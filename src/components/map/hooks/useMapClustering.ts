
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation, isWithinCorsica } from '../types';

export const useMapClustering = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  onMarkerClick: (location: MapLocation) => void,
  enabled: boolean = false
) => {
  // Setup cluster layers when map and locations change
  useEffect(() => {
    if (!map.current || !enabled || !locations.length) return;

    console.log('Setting up clustering with locations:', locations.length);

    // Remove existing layers and source if they exist
    if (map.current.getSource('markers-source')) {
      map.current.removeLayer('markers-clusters');
      map.current.removeLayer('markers-cluster-count');
      map.current.removeLayer('unclustered-point');
      map.current.removeSource('markers-source');
    }

    // Filter valid locations
    const validLocations = locations.filter(loc => 
      typeof loc.latitude === 'number' && 
      typeof loc.longitude === 'number' &&
      isWithinCorsica(loc.latitude, loc.longitude)
    );

    if (validLocations.length === 0) return;

    // Only add clustering if the map style is loaded
    if (map.current.isStyleLoaded()) {
      setupClusterLayers(map.current, validLocations, onMarkerClick);
    } else {
      // Wait for style to load before adding layers
      const handleStyleLoad = () => {
        if (map.current) {
          setupClusterLayers(map.current, validLocations, onMarkerClick);
        }
      };
      
      map.current.once('styledata', handleStyleLoad);
    }

    // Cleanup function
    return () => {
      if (map.current) {
        if (map.current.getSource('markers-source')) {
          map.current.removeLayer('markers-clusters');
          map.current.removeLayer('markers-cluster-count');
          map.current.removeLayer('unclustered-point');
          map.current.removeSource('markers-source');
        }
      }
    };
  }, [map, locations, onMarkerClick, enabled]);
};

// Helper function to setup cluster layers
const setupClusterLayers = (
  map: mapboxgl.Map, 
  locations: MapLocation[], 
  onMarkerClick: (location: MapLocation) => void
) => {
  // Prepare GeoJSON data
  const features = locations.map(location => ({
    type: 'Feature' as const,
    geometry: {
      type: 'Point' as const,
      coordinates: [location.longitude, location.latitude]
    },
    properties: {
      id: location.id,
      title: location.title,
      type: location.type,
      description: location.description || '',
      image: location.image || '',
      isPrimary: location.isPrimary || false
    }
  }));

  // Add data source for clustering
  map.addSource('markers-source', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features
    },
    cluster: true,
    clusterMaxZoom: 12,
    clusterRadius: 50
  });

  // Add cluster layers
  map.addLayer({
    id: 'markers-clusters',
    type: 'circle',
    source: 'markers-source',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': [
        'step',
        ['get', 'point_count'],
        '#51bbd6',
        10,
        '#f1f075',
        30,
        '#f28cb1'
      ],
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,
        10,
        25,
        30,
        30
      ]
    }
  });

  // Add count labels
  map.addLayer({
    id: 'markers-cluster-count',
    type: 'symbol',
    source: 'markers-source',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    },
    paint: {
      'text-color': '#ffffff'
    }
  });

  // Individual points
  map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'markers-source',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': [
        'match',
        ['get', 'type'],
        'itinerary', '#3b82f6',
        'accommodation', '#10b981',
        'pointOfInterest', '#ef4444',
        '#000000'
      ],
      'circle-radius': 12,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });

  // Setup event handlers
  setupClusterEventHandlers(map, onMarkerClick);
};

// Helper function to setup event handlers for clusters
const setupClusterEventHandlers = (
  map: mapboxgl.Map, 
  onMarkerClick: (location: MapLocation) => void
) => {
  // Click event for clusters
  map.on('click', 'markers-clusters', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ['markers-clusters']
    });
    
    if (features.length > 0) {
      const clusterId = features[0].properties?.cluster_id;
      const source = map.getSource('markers-source') as mapboxgl.GeoJSONSource;
      
      source.getClusterExpansionZoom(
        clusterId,
        (err, zoom) => {
          if (err) return;
          
          const coordinates = (features[0].geometry as any).coordinates;
          map.flyTo({
            center: coordinates,
            zoom: zoom
          });
        }
      );
    }
  });

  // Click event for individual points
  map.on('click', 'unclustered-point', (e) => {
    if (!e.features || e.features.length === 0) return;
    
    const feature = e.features[0];
    const props = feature.properties;
    
    if (props) {
      const location: MapLocation = {
        id: props.id,
        title: props.title,
        latitude: (feature.geometry as any).coordinates[1],
        longitude: (feature.geometry as any).coordinates[0],
        type: props.type as 'itinerary' | 'accommodation' | 'pointOfInterest',
        description: props.description,
        image: props.image,
        isPrimary: props.isPrimary
      };
      
      onMarkerClick(location);
    }
  });

  // Change cursor on hover
  map.on('mouseenter', 'markers-clusters', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  
  map.on('mouseleave', 'markers-clusters', () => {
    map.getCanvas().style.cursor = '';
  });
  
  map.on('mouseenter', 'unclustered-point', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  
  map.on('mouseleave', 'unclustered-point', () => {
    map.getCanvas().style.cursor = '';
  });
};


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
    if (!map.current || !enabled) return;

    console.log('Setting up clustering with locations:', locations.length);

    // Check if the map has the source before trying to remove
    const safelyRemoveLayersAndSource = () => {
      if (!map.current) return;
      
      try {
        // Check if map has the layers before removing them
        if (map.current.getLayer('markers-clusters')) {
          map.current.removeLayer('markers-clusters');
        }
        
        if (map.current.getLayer('markers-cluster-count')) {
          map.current.removeLayer('markers-cluster-count');
        }
        
        if (map.current.getLayer('unclustered-point')) {
          map.current.removeLayer('unclustered-point');
        }

        // Delay source removal to ensure layers are removed first
        setTimeout(() => {
          if (!map.current) return;
          
          try {
            // Check if map has the source before removing it
            if (map.current.getSource('markers-source')) {
              map.current.removeSource('markers-source');
            }
          } catch (error) {
            console.error("Error removing map source:", error);
          }
        }, 100);
      } catch (error) {
        console.error("Error cleaning up map resources:", error);
        // Continue execution even if there's an error
      }
    };

    // Filter valid locations
    const validLocations = locations.filter(loc => 
      typeof loc.latitude === 'number' && 
      typeof loc.longitude === 'number' &&
      isWithinCorsica(loc.latitude, loc.longitude)
    );

    // Debug log for validating locations
    console.log('Valid locations for clustering:', validLocations.length);
    
    if (validLocations.length === 0) {
      safelyRemoveLayersAndSource();
      return;
    }

    // Only add clustering if the map style is loaded
    const setupClusteringWithRetry = (retryCount = 0) => {
      if (!map.current) return;
      
      if (map.current.isStyleLoaded()) {
        safelyRemoveLayersAndSource();
        setTimeout(() => {
          if (map.current) {
            setupClusterLayers(map.current, validLocations, onMarkerClick);
          }
        }, 100);
      } else if (retryCount < 5) {
        // Retry a few times if style isn't loaded yet
        console.log('Map style not loaded, retrying...');
        setTimeout(() => setupClusteringWithRetry(retryCount + 1), 300);
      } else {
        console.error('Map style failed to load after retries');
      }
    };
    
    setupClusteringWithRetry();

    // Cleanup function with safety delay
    return () => {
      setTimeout(() => {
        safelyRemoveLayersAndSource();
      }, 200);
    };
  }, [map, locations, onMarkerClick, enabled]);
};

// Helper function to setup cluster layers
const setupClusterLayers = (
  map: mapboxgl.Map, 
  locations: MapLocation[], 
  onMarkerClick: (location: MapLocation) => void
) => {
  try {
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

    // Debug log to check features
    console.log('Creating features for map:', features.length);

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

    // Individual points with more visible style
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
  } catch (error) {
    console.error("Error setting up cluster layers:", error);
  }
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
            zoom: zoom,
            essential: true,
            duration: 1000
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

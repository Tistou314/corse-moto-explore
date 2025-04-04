
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation, CORSICA_BOUNDS, isWithinCorsica } from './types';
import { createMapMarker } from './MapMarker';

export const useMapMarkers = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  onMarkerClick: (location: MapLocation) => void,
  enableClustering: boolean = false
) => {
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  
  // Add markers when locations change
  useEffect(() => {
    if (!map.current || !locations.length) return;

    console.log('Adding markers for locations:', locations.length);

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // For clustering
    if (enableClustering && map.current.getSource('markers-source')) {
      map.current.removeLayer('markers-clusters');
      map.current.removeLayer('markers-cluster-count');
      map.current.removeLayer('unclustered-point');
      map.current.removeSource('markers-source');
    }

    // Filter locations by type to separate itinerary points, POIs and accommodations
    // And make sure they have valid coordinates
    const validLocations = locations.filter(loc => 
      typeof loc.latitude === 'number' && 
      typeof loc.longitude === 'number' &&
      isWithinCorsica(loc.latitude, loc.longitude)
    );

    const itineraryPoints = validLocations.filter(loc => loc.type === 'itinerary');
    const poiPoints = validLocations.filter(loc => loc.type === 'pointOfInterest');
    const accommodationPoints = validLocations.filter(loc => loc.type === 'accommodation');
    
    // Check what we have to work with
    console.log('Valid locations:', validLocations.length);
    console.log('Itinerary points:', itineraryPoints.length);
    console.log('POI points:', poiPoints.length);
    console.log('Accommodation points:', accommodationPoints.length);

    // Sort POIs so that primary ones come last (will be drawn on top)
    const sortedPois = [...poiPoints].sort((a, b) => {
      if (a.isPrimary && !b.isPrimary) return 1;
      if (!a.isPrimary && b.isPrimary) return -1;
      return 0;
    });

    // If clustering is enabled and we have enough points, use it
    if (enableClustering && validLocations.length > 10 && map.current.isStyleLoaded()) {
      // Prepare GeoJSON data
      const features = validLocations.map(location => ({
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
      map.current.addSource('markers-source', {
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
      map.current.addLayer({
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
      map.current.addLayer({
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
      map.current.addLayer({
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

      // Click event for clusters
      map.current.on('click', 'markers-clusters', (e) => {
        if (!map.current) return;
        
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ['markers-clusters']
        });
        
        if (features.length > 0) {
          const clusterId = features[0].properties?.cluster_id;
          const source = map.current.getSource('markers-source') as mapboxgl.GeoJSONSource;
          
          source.getClusterExpansionZoom(
            clusterId,
            (err, zoom) => {
              if (err || !map.current) return;
              
              const coordinates = (features[0].geometry as any).coordinates;
              map.current.flyTo({
                center: coordinates,
                zoom: zoom
              });
            }
          );
        }
      });

      // Click event for individual points
      map.current.on('click', 'unclustered-point', (e) => {
        if (!map.current || !e.features || e.features.length === 0) return;
        
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
      map.current.on('mouseenter', 'markers-clusters', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer';
      });
      
      map.current.on('mouseleave', 'markers-clusters', () => {
        if (map.current) map.current.getCanvas().style.cursor = '';
      });
      
      map.current.on('mouseenter', 'unclustered-point', () => {
        if (map.current) map.current.getCanvas().style.cursor = 'pointer';
      });
      
      map.current.on('mouseleave', 'unclustered-point', () => {
        if (map.current) map.current.getCanvas().style.cursor = '';
      });
    } else {
      // Regular markers if not using clustering
      [...itineraryPoints, ...accommodationPoints, ...sortedPois].forEach(location => {
        const marker = createMapMarker({
          location,
          map: map.current!,
          onClick: onMarkerClick
        });
        
        markersRef.current.push(marker);
      });
    }

    // Fit map bounds to include all valid locations
    if (validLocations.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();
      
      validLocations.forEach(location => {
        bounds.extend([location.longitude, location.latitude]);
      });
      
      map.current.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        maxZoom: 12,
        duration: 1000
      });
    } else if (validLocations.length === 1) {
      // If only one valid location, center on it
      map.current.flyTo({
        center: [validLocations[0].longitude, validLocations[0].latitude],
        zoom: 11,
        duration: 1000
      });
    } else {
      // Default view of Corsica if no valid locations
      map.current.flyTo({
        center: [9.03, 42.16],
        zoom: 8,
        duration: 1000
      });
    }

    // Cleanup function
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      
      if (map.current) {
        if (map.current.getSource('markers-source')) {
          map.current.removeLayer('markers-clusters');
          map.current.removeLayer('markers-cluster-count');
          map.current.removeLayer('unclustered-point');
          map.current.removeSource('markers-source');
        }
      }
    };
  }, [locations, map, onMarkerClick, enableClustering]);

  return { markersRef };
};

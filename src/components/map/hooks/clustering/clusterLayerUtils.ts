
import mapboxgl from 'mapbox-gl';
import { MapLocation } from '../../types';
import { setupClusterEventHandlers } from './clusterEventHandlers';

// Helper function to setup cluster layers
export const setupClusterLayers = (
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

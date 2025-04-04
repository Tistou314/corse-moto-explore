
import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation } from '../types';
import { setupClusterLayers } from './clustering/clusterLayerUtils';
import { safelyRemoveLayersAndSource } from './clustering/clusterCleanupUtils';
import { filterValidLocations } from './clustering/locationValidation';

export const useMapClustering = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  onMarkerClick: (location: MapLocation) => void,
  enabled: boolean = true
) => {
  // Setup and manage clustering
  useEffect(() => {
    // Skip if clustering is disabled or map isn't available
    if (!enabled || !map.current) return;
    
    const validLocations = filterValidLocations(locations);
    
    if (validLocations.length === 0) {
      console.log('No valid locations for clustering');
      return;
    }
    
    // Make sure the map is fully loaded before adding sources and layers
    const setupClustering = () => {
      if (!map.current) return;
      
      try {
        // Setup cluster layers
        setupClusterLayers(map.current, validLocations, onMarkerClick);
      } catch (error) {
        console.error('Error setting up map clustering:', error);
      }
    };
    
    // Check if style has finished loading
    if (map.current.isStyleLoaded()) {
      setupClustering();
    } else {
      // Wait for the style to load
      map.current.once('style.load', setupClustering);
    }
    
    // Cleanup function
    return () => {
      safelyRemoveLayersAndSource(map.current);
    };
  }, [map, locations, onMarkerClick, enabled]);
};

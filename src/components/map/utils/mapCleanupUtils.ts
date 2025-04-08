
import mapboxgl from 'mapbox-gl';

/**
 * Clean up map resources safely in the correct order
 */
export const cleanupMapResources = (
  map: mapboxgl.Map, 
  setIsLoaded?: (loaded: boolean) => void
): void => {
  try {
    // Remove terrain first to avoid dependency issues
    if (map.getTerrain()) {
      map.setTerrain(null);
    }
    
    // Safely remove sources in correct order with proper delays
    setTimeout(() => {
      if (!map) return;
      
      try {
        ['hills', 'corsica-outline'].forEach(layerId => {
          if (map && map.getLayer(layerId)) {
            map.removeLayer(layerId);
          }
        });
        
        setTimeout(() => {
          if (!map) return;
          
          try {
            ['mapbox-dem', 'corsica-boundary'].forEach(sourceId => {
              if (map && map.getSource(sourceId)) {
                map.removeSource(sourceId);
              }
            });
          } catch (error) {
            console.error("Error removing sources:", error);
          }
        }, 100);
      } catch (error) {
        console.error("Error removing layers:", error);
      }
    }, 100);
    
    // Finally remove the map with delay
    setTimeout(() => {
      if (map) {
        map.remove();
      }
      
      if (setIsLoaded) {
        setIsLoaded(false);
      }
    }, 300);
  } catch (error) {
    console.error("Error cleaning up map:", error);
  }
};

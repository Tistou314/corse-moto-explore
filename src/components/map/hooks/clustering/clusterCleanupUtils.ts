
import mapboxgl from 'mapbox-gl';

// Safely remove map layers and sources
export const safelyRemoveLayersAndSource = (map: mapboxgl.Map | null) => {
  if (!map) return;
  
  try {
    // Check if map has the layers before removing them
    const layersToRemove = ['markers-clusters', 'markers-cluster-count', 'unclustered-point'];
    
    layersToRemove.forEach(layerId => {
      try {
        if (map.getLayer(layerId)) {
          map.removeLayer(layerId);
        }
      } catch (error) {
        console.error(`Error removing map layer ${layerId}:`, error);
      }
    });

    // Delay source removal to ensure layers are removed first
    setTimeout(() => {
      if (!map) return;
      
      try {
        // Check if map has the source before removing it
        if (map.getSource('markers-source')) {
          map.removeSource('markers-source');
        }
      } catch (error) {
        console.error("Error removing map source:", error);
      }
    }, 300); // Increased timeout for better reliability
  } catch (error) {
    console.error("Error in cleanup function:", error);
    // Continue execution even if there's an error
  }
};

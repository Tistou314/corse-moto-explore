
import mapboxgl from 'mapbox-gl';
import { getCorsicaBoundaryCoordinates } from './mapDataUtils';

/**
 * Sets up map layers including terrain, DEM sources and boundary
 */
export const setupMapLayers = (map: mapboxgl.Map): void => {
  try {
    // Add DEM source for terrain
    map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
      'tileSize': 512,
      'maxzoom': 14
    });
    
    // Add terrain layer
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    
    // Add Corsica boundary layer - uniquement pour le debug visuel
    map.addSource('corsica-boundary', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [getCorsicaBoundaryCoordinates()]
        },
        'properties': {}
      }
    });

    // Add boundary line layer with more subtle styling
    map.addLayer({
      'id': 'corsica-outline',
      'type': 'line',
      'source': 'corsica-boundary',
      'layout': {},
      'paint': {
        'line-color': '#e0756b',
        'line-width': 1.5,
        'line-opacity': 0.4,
        'line-dasharray': [2, 1]
      }
    });
    
    // Add hillshading layer for better relief visualization
    map.addLayer({
      'id': 'hills',
      'type': 'hillshade',
      'source': 'mapbox-dem',
      'layout': {'visibility': 'visible'},
      'paint': {
        'hillshade-highlight-color': 'white',
        'hillshade-illumination-direction': 270,
        'hillshade-shadow-color': 'rgba(0, 0, 0, 0.15)',
        'hillshade-exaggeration': 0.8
      }
    }, 'corsica-outline');
  } catch (error) {
    console.error("Error setting up map terrain and layers:", error);
  }
};

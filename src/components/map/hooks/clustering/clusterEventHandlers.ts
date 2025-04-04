
import mapboxgl from 'mapbox-gl';
import { MapLocation } from '../../types';

// Helper function to setup event handlers for clusters
export const setupClusterEventHandlers = (
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

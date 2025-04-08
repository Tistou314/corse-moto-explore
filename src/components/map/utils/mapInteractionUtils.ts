import mapboxgl from 'mapbox-gl';

/**
 * Configures map interactions based on whether the map should be interactive or not
 */
export const configureMapInteractions = (
  map: mapboxgl.Map,
  interactive: boolean = true
): void => {
  if (interactive) {
    // Add navigation controls for interactive maps
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: false
    }), 'top-right');
  } else {
    // Disable some interactions but keep basic ones for better UX
    map.scrollZoom.disable();
    map.boxZoom.disable();
    map.dragRotate.disable();
    map.keyboard.disable();
    map.doubleClickZoom.disable();
    map.touchZoomRotate.disable();
  }
};

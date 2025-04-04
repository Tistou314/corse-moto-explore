
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation } from './types';
import { createMapMarker } from './MapMarker';

export const useMapMarkers = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  onMarkerClick: (location: MapLocation) => void
) => {
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  
  // Add markers when locations change
  useEffect(() => {
    if (!map.current || !locations.length) return;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Filter locations by type to separate itinerary points, POIs and start/end points
    const itineraryPoints = locations.filter(loc => loc.type === 'itinerary');
    const poiPoints = locations.filter(loc => loc.type === 'pointOfInterest');

    // Add markers
    [...itineraryPoints, ...poiPoints].forEach(location => {
      const marker = createMapMarker({
        location,
        map: map.current!,
        onClick: onMarkerClick
      });
      
      markersRef.current.push(marker);
    });

    // Fit bounds to markers if there are multiple
    if (locations.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach(location => {
        bounds.extend([location.longitude, location.latitude]);
      });
      
      map.current.fitBounds(bounds, {
        padding: 80,
        maxZoom: 12,
        duration: 1000
      });
    }

    // Cleanup function
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    };
  }, [locations, map, onMarkerClick]);

  return { markersRef };
};

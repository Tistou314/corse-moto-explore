
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

    console.log('Adding markers for locations:', locations);

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Filter locations by type to separate itinerary points, POIs and start/end points
    const itineraryPoints = locations.filter(loc => loc.type === 'itinerary');
    const poiPoints = locations.filter(loc => loc.type === 'pointOfInterest');
    const accommodationPoints = locations.filter(loc => loc.type === 'accommodation');

    // Sort POIs so that primary ones come last (will be drawn on top)
    const sortedPois = [...poiPoints].sort((a, b) => {
      if (a.isPrimary && !b.isPrimary) return 1;
      if (!a.isPrimary && b.isPrimary) return -1;
      return 0;
    });

    // Add markers in order: itinerary points, accommodations, and POIs last so they're on top
    [...itineraryPoints, ...accommodationPoints, ...sortedPois].forEach(location => {
      // Skip if we don't have valid coordinates
      if (typeof location.latitude !== 'number' || typeof location.longitude !== 'number') {
        console.warn('Skipping location without valid coordinates:', location.title);
        return;
      }
      
      const marker = createMapMarker({
        location,
        map: map.current!,
        onClick: onMarkerClick
      });
      
      markersRef.current.push(marker);
    });

    // Fit bounds to markers if there are multiple with valid coordinates
    const validLocations = locations.filter(
      loc => typeof loc.latitude === 'number' && typeof loc.longitude === 'number'
    );
    
    if (validLocations.length > 1) {
      const bounds = new mapboxgl.LngLatBounds();
      validLocations.forEach(location => {
        bounds.extend([location.longitude, location.latitude]);
      });
      
      map.current.fitBounds(bounds, {
        padding: 80,
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
    }

    // Cleanup function
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    };
  }, [locations, map, onMarkerClick]);

  return { markersRef };
};

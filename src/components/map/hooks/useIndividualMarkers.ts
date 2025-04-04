
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation, isWithinCorsica } from '../types';
import { createMapMarker } from '../MapMarker';

export const useIndividualMarkers = (
  map: React.MutableRefObject<mapboxgl.Map | null>,
  locations: MapLocation[] = [],
  onMarkerClick: (location: MapLocation) => void
) => {
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  
  // Add individual markers when locations change
  useEffect(() => {
    // Skip if map is not available or no locations
    if (!map.current) return;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Filter locations by type and validate coordinates
    const validLocations = locations.filter(loc => 
      typeof loc.latitude === 'number' && 
      typeof loc.longitude === 'number' &&
      isWithinCorsica(loc.latitude, loc.longitude)
    );

    if (validLocations.length === 0) return;

    // Split locations by type
    const itineraryPoints = validLocations.filter(loc => loc.type === 'itinerary');
    const poiPoints = validLocations.filter(loc => loc.type === 'pointOfInterest');
    const accommodationPoints = validLocations.filter(loc => loc.type === 'accommodation');
    
    console.log('Creating individual markers:', {
      itineraries: itineraryPoints.length,
      pois: poiPoints.length,
      accommodations: accommodationPoints.length
    });

    // Sort POIs so that primary ones come last (will be drawn on top)
    const sortedPois = [...poiPoints].sort((a, b) => {
      if (a.isPrimary && !b.isPrimary) return 1;
      if (!a.isPrimary && b.isPrimary) return -1;
      return 0;
    });

    // Add markers in specific order: itineraries, accommodations, then POIs (with primary POIs last)
    [...itineraryPoints, ...accommodationPoints, ...sortedPois].forEach(location => {
      const marker = createMapMarker({
        location,
        map: map.current!,
        onClick: onMarkerClick
      });
      
      markersRef.current.push(marker);
    });

    // Cleanup function
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
    };
  }, [locations, map, onMarkerClick]);

  return { markersRef };
};

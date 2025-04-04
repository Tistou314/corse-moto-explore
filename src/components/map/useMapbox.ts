
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation, CorsicaCenter } from './types';
import { createMapMarker } from './MapMarker';
import { useMap } from '@/contexts/MapContext';

export const useMapbox = (
  locations: MapLocation[] = [],
  center: [number, number] = CorsicaCenter,
  zoom: number = 8.5,
  interactive: boolean = true
) => {
  const { mapboxToken } = useMap();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  // Setup and initialize map
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    // Vérification explicite du token
    console.log('Token Mapbox utilisé :', mapboxToken);
    
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12', // A style suitable for outdoors/hiking
      center: center,
      zoom: zoom,
      maxZoom: 15,
      minZoom: 7,
      attributionControl: true,
    });

    // Add navigation controls if interactive
    if (interactive) {
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    } else {
      // If not interactive, disable map interactions
      map.current.scrollZoom.disable();
      map.current.boxZoom.disable();
      map.current.dragRotate.disable();
      map.current.dragPan.disable();
      map.current.keyboard.disable();
      map.current.doubleClickZoom.disable();
      map.current.touchZoomRotate.disable();
    }

    // Cleanup
    return () => {
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];
      map.current?.remove();
      map.current = null;
    };
  }, [mapboxToken, center, zoom, interactive]);

  // Add markers when locations change
  useEffect(() => {
    if (!map.current || !locations.length) return;

    // Remove existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    locations.forEach(location => {
      const marker = createMapMarker({
        location,
        map: map.current!,
        onClick: (loc) => {
          setSelectedLocation(loc);
          map.current!.flyTo({
            center: [loc.longitude, loc.latitude],
            zoom: Math.max(map.current!.getZoom(), 10.5),
            essential: true,
            duration: 1000
          });
        }
      });
      
      markersRef.current.push(marker);
    });

    // Fit bounds to markers if there are multiple and we're not in a detail view
    if (locations.length > 1 && zoom <= 9) {
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach(location => {
        bounds.extend([location.longitude, location.latitude]);
      });
      
      map.current.fitBounds(bounds, {
        padding: 50,
        maxZoom: 12,
        duration: 1000
      });
    }
  }, [locations, map.current]);

  const closePopup = () => {
    setSelectedLocation(null);
  };

  return { mapContainer, selectedLocation, closePopup, mapboxToken };
};

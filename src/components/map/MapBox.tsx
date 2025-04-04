
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap } from '@/contexts/MapContext';
import { Bike, MapPin, Hotel, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Define marker types and their colors
const markerTypes = {
  itinerary: '#3b82f6', // blue
  accommodation: '#10b981', // green
  pointOfInterest: '#ef4444', // red
};

interface MapLocation {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  type: 'itinerary' | 'accommodation' | 'pointOfInterest';
  description?: string;
}

interface MapBoxProps {
  center?: [number, number];
  zoom?: number;
  locations?: MapLocation[];
  interactive?: boolean;
  height?: string;
}

const CorsicaCenter: [number, number] = [9.2, 42.2]; // Center of Corsica

const MapBox = ({ 
  center = CorsicaCenter, 
  zoom = 8.5,
  locations = [],
  interactive = true,
  height = '400px'
}: MapBoxProps) => {
  const { mapboxToken } = useMap();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  // Setup and initialize map
  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

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
      const el = document.createElement('div');
      el.className = 'marker';
      
      // Style the marker based on type
      const color = markerTypes[location.type];
      el.style.backgroundColor = color;
      el.style.width = '24px';
      el.style.height = '24px';
      el.style.borderRadius = '50%';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
      el.style.color = 'white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
      el.style.cursor = 'pointer';
      
      // Add icon based on type
      let iconElement;
      if (location.type === 'itinerary') {
        iconElement = document.createElement('span');
        iconElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10.5V12a10 10 0 1 1-9-9.95"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
      } else if (location.type === 'accommodation') {
        iconElement = document.createElement('span');
        iconElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18"/><path d="M21 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><path d="M6 20v2"/><path d="M18 20v2"/><path d="M8 2v5"/><path d="M16 2v5"/></svg>';
      } else {
        iconElement = document.createElement('span');
        iconElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
      }
      
      el.appendChild(iconElement);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([location.longitude, location.latitude])
        .addTo(map.current!);

      el.addEventListener('click', () => {
        setSelectedLocation(location);
        map.current!.flyTo({
          center: [location.longitude, location.latitude],
          zoom: Math.max(map.current!.getZoom(), 10.5),
          essential: true,
          duration: 1000
        });
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

  // Handle token not being available
  if (!mapboxToken) {
    return null;
  }

  return (
    <div className="relative w-full" style={{ height }}>
      <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden border border-gray-200" />
      
      {selectedLocation && (
        <Card className="absolute bottom-4 left-4 p-4 max-w-sm bg-white shadow-lg">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">{selectedLocation.title}</h3>
            <Button variant="ghost" className="h-6 w-6 p-0" onClick={closePopup}>×</Button>
          </div>
          {selectedLocation.description && (
            <p className="text-sm text-muted-foreground mt-1">{selectedLocation.description}</p>
          )}
          <div className="mt-2">
            {selectedLocation.type === 'itinerary' && (
              <Button size="sm" variant="outline" asChild className="mt-2">
                <a href={`/itineraires/${selectedLocation.id}`}>
                  Voir l'itinéraire
                </a>
              </Button>
            )}
            {selectedLocation.type === 'accommodation' && (
              <Button size="sm" variant="outline" asChild className="mt-2">
                <a href={`/hebergements/${selectedLocation.id}`}>
                  Voir l'hébergement
                </a>
              </Button>
            )}
            {selectedLocation.type === 'pointOfInterest' && (
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Info className="w-3 h-3 mr-1" />
                Point d'intérêt
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default MapBox;

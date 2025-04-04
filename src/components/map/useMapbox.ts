
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapLocation, CorsicaCenter, markerTypes } from './types';
import { createMapMarker } from './MapMarker';
import { useMap } from '@/contexts/MapContext';

export const useMapbox = (
  locations: MapLocation[] = [],
  center: [number, number] = CorsicaCenter,
  zoom: number = 8.5,
  interactive: boolean = true,
  drawRoute: boolean = false
) => {
  const { mapboxToken } = useMap();
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const routeRef = useRef<string | null>(null);
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

  // Add markers and draw route when locations change
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

    // Draw route if requested and we have at least 2 points
    if (drawRoute && map.current.isStyleLoaded() && locations.length >= 2) {
      // Only POIs and itinerary points should be part of the route
      const routePoints = [...itineraryPoints, ...poiPoints].sort((a, b) => {
        // Sort to ensure itinerary points are first, then POIs
        if (a.type === 'itinerary' && b.type !== 'itinerary') return -1;
        if (a.type !== 'itinerary' && b.type === 'itinerary') return 1;
        return 0;
      });
      
      if (routePoints.length >= 2) {
        const routeId = 'route';
        
        // Remove existing route if it exists
        if (map.current.getSource(routeId)) {
          map.current.removeLayer(routeId);
          map.current.removeSource(routeId);
        }
        
        // Create route data
        const routeData = {
          'type': 'Feature' as const,
          'properties': {},
          'geometry': {
            'type': 'LineString' as const,
            'coordinates': routePoints.map(point => [point.longitude, point.latitude])
          }
        };
        
        // Add route to map
        map.current.addSource(routeId, {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [routeData]
          }
        });
        
        map.current.addLayer({
          'id': routeId,
          'type': 'line',
          'source': routeId,
          'layout': {
            'line-join': 'round',
            'line-cap': 'round'
          },
          'paint': {
            'line-color': '#e02b20',
            'line-width': 4,
            'line-opacity': 0.8
          }
        });
        
        routeRef.current = routeId;
      }
    }

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
  }, [locations, map.current, drawRoute]);

  // Add event listener for style load to handle the case when the map style is loaded after locations are added
  useEffect(() => {
    if (!map.current) return;
    
    const handleStyleData = () => {
      if (drawRoute && locations.length >= 2 && !routeRef.current) {
        // Redraw route once style is loaded
        const routePoints = locations.filter(loc => 
          loc.type === 'itinerary' || loc.type === 'pointOfInterest'
        );
        
        if (routePoints.length >= 2) {
          const routeId = 'route';
          
          // Check if source already exists
          if (map.current?.getSource(routeId)) {
            map.current.removeLayer(routeId);
            map.current.removeSource(routeId);
          }
          
          // Create route data
          const routeData = {
            'type': 'Feature' as const,
            'properties': {},
            'geometry': {
              'type': 'LineString' as const,
              'coordinates': routePoints.map(point => [point.longitude, point.latitude])
            }
          };
          
          // Add route to map
          map.current?.addSource(routeId, {
            'type': 'geojson',
            'data': {
              'type': 'FeatureCollection',
              'features': [routeData]
            }
          });
          
          map.current?.addLayer({
            'id': routeId,
            'type': 'line',
            'source': routeId,
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': '#e02b20',
              'line-width': 4,
              'line-opacity': 0.8
            }
          });
          
          routeRef.current = routeId;
        }
      }
    };
    
    map.current.on('styledata', handleStyleData);
    
    return () => {
      map.current?.off('styledata', handleStyleData);
    };
  }, [map.current, locations, drawRoute]);

  const closePopup = () => {
    setSelectedLocation(null);
  };

  return { mapContainer, selectedLocation, closePopup, mapboxToken };
};

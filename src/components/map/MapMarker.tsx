
import mapboxgl from 'mapbox-gl';
import { markerTypes, MapLocation } from './types';

interface CreateMarkerProps {
  location: MapLocation;
  map: mapboxgl.Map;
  onClick: (location: MapLocation) => void;
}

export const createMapMarker = ({ location, map, onClick }: CreateMarkerProps): mapboxgl.Marker => {
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
    .addTo(map);

  el.addEventListener('click', () => {
    onClick(location);
  });

  return marker;
};

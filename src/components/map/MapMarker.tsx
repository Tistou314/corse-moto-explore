
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
  el.style.transition = 'box-shadow 0.2s ease'; // Remove transform transition
  el.style.position = 'relative'; // Important for positioning
  
  // Add icon based on type
  let iconElement;
  if (location.type === 'itinerary') {
    iconElement = document.createElement('span');
    iconElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10.5V12a10 10 0 1 1-9-9.95"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  } else if (location.type === 'accommodation') {
    iconElement = document.createElement('span');
    iconElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18"/><path d="M21 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><path d="M6 20v2"/><path d="M18 20v2"/><path d="M8 2v5"/><path d="M16 2v5"/></svg>';
  } else if (location.type === 'pointOfInterest') {
    iconElement = document.createElement('span');
    iconElement.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
    
    // Styles without transform
    if (location.isPrimary) {
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 3px 8px rgba(0,0,0,0.4)';
    }
  }
  
  el.appendChild(iconElement);

  // Add hover effects without translation
  el.addEventListener('mouseenter', () => {
    el.style.boxShadow = '0 4px 8px rgba(0,0,0,0.4)'; // Enhance shadow only
    // No scale transform
  });
  
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = location.type === 'pointOfInterest' && location.isPrimary
      ? '0 3px 8px rgba(0,0,0,0.4)'
      : '0 2px 4px rgba(0,0,0,0.2)';
    // No scale transform
  });

  // Add a subtle pulse animation for POIs to make them more noticeable
  if (location.type === 'pointOfInterest') {
    const pulseEffect = document.createElement('div');
    pulseEffect.style.position = 'absolute';
    pulseEffect.style.borderRadius = '50%';
    pulseEffect.style.width = '100%';
    pulseEffect.style.height = '100%';
    pulseEffect.style.backgroundColor = color;
    pulseEffect.style.opacity = '0.6';
    pulseEffect.style.animation = 'pulse 2s infinite';
    
    // Add the keyframe animation - make sure not to move the marker position
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 0.6;
        }
        70% {
          transform: scale(1.5);
          opacity: 0;
        }
        100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    el.insertBefore(pulseEffect, el.firstChild);
  }

  // Add title attribute for hover effect with available information
  el.title = location.title || 'Point d\'intérêt';
  if (location.description) {
    el.title += ` - ${location.description.substring(0, 50)}${location.description.length > 50 ? '...' : ''}`;
  }

  // Create the marker with anchor 'center'
  const marker = new mapboxgl.Marker({
    element: el,
    anchor: 'center' // Important: This ensures the marker stays centered at the exact coordinates
  })
    .setLngLat([location.longitude, location.latitude])
    .addTo(map);

  el.addEventListener('click', () => {
    onClick(location);
  });

  return marker;
};

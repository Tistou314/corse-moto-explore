
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
  el.style.width = '30px'; // Larger for better visibility
  el.style.height = '30px';
  el.style.borderRadius = '50%';
  el.style.display = 'flex';
  el.style.alignItems = 'center';
  el.style.justifyContent = 'center';
  el.style.color = 'white';
  el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  el.style.cursor = 'pointer';
  el.style.transition = 'box-shadow 0.2s ease';
  el.style.position = 'relative';
  el.style.border = '2px solid white';
  
  // Add icon based on type
  let iconElement = document.createElement('span');
  if (location.type === 'itinerary') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m3 9 4-4 5 5 4-4 3 3"/></svg>';
  } else if (location.type === 'accommodation') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18"/><path d="M21 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><path d="M6 20v2"/><path d="M18 20v2"/><path d="M8 2v5"/><path d="M16 2v5"/></svg>';
  } else if (location.type === 'pointOfInterest') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
    
    // Additional styling for POIs
    if (location.isPrimary) {
      el.style.border = '3px solid white';
      el.style.boxShadow = '0 3px 8px rgba(0,0,0,0.4)';
    }
  }
  
  el.appendChild(iconElement);

  // Add hover effects - but only for the shadow, not position
  el.addEventListener('mouseenter', () => {
    el.style.boxShadow = '0 4px 8px rgba(0,0,0,0.5)';
    // Remove the transform effect
  });
  
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = location.type === 'pointOfInterest' && location.isPrimary
      ? '0 3px 8px rgba(0,0,0,0.4)'
      : '0 2px 6px rgba(0,0,0,0.3)';
    // Remove the transform effect
  });

  // Add pulse effect for primary POIs
  if (location.type === 'pointOfInterest' && location.isPrimary) {
    const pulseEffect = document.createElement('div');
    pulseEffect.style.position = 'absolute';
    pulseEffect.style.borderRadius = '50%';
    pulseEffect.style.width = '100%';
    pulseEffect.style.height = '100%';
    pulseEffect.style.backgroundColor = color;
    pulseEffect.style.opacity = '0.6';
    pulseEffect.style.animation = 'pulse 2s infinite';
    
    // Add keyframe animation
    const styleId = `marker-style-${location.id}`;
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
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
    }
    
    el.insertBefore(pulseEffect, el.firstChild);
  }

  // Add title for hover tooltip
  el.title = location.title || 'Point d\'intérêt';
  if (location.description) {
    el.title += ` - ${location.description.substring(0, 50)}${location.description.length > 50 ? '...' : ''}`;
  }

  // Create marker centered at coordinates
  const marker = new mapboxgl.Marker({
    element: el,
    anchor: 'center'
  })
    .setLngLat([location.longitude, location.latitude])
    .addTo(map);

  // Add click handler
  el.addEventListener('click', () => {
    onClick(location);
  });

  return marker;
};


import mapboxgl from 'mapbox-gl';
import { markerTypes, MapLocation, isWithinCorsica } from './types';

interface CreateMarkerProps {
  location: MapLocation;
  map: mapboxgl.Map;
  onClick: (location: MapLocation) => void;
}

export const createMapMarker = ({ location, map, onClick }: CreateMarkerProps): mapboxgl.Marker | null => {
  // Validation de coordonnées avant création du marker
  if (!location || 
      typeof location.latitude !== 'number' || 
      typeof location.longitude !== 'number' ||
      isNaN(location.latitude) || 
      isNaN(location.longitude)) {
    console.error(`Coordonnées invalides pour ${location?.title || 'marker inconnu'}:`, location);
    return null;
  }
  
  // Ajout de logs pour debug
  console.log(`Création d'un marker pour ${location.title} aux coordonnées: [${location.latitude}, ${location.longitude}]`);
  
  // Vérification que les coordonnées sont dans une plage valide pour la Corse
  if (!isWithinCorsica(location.latitude, location.longitude)) {
    console.warn(`Coordonnées hors de la Corse pour ${location.title}:`, 
      `[${location.latitude}, ${location.longitude}]`,
      "Vérifiez que les coordonnées ne sont pas inversées (latitude/longitude)");
  }

  const el = document.createElement('div');
  el.className = 'marker';
  
  // Déterminer la couleur du marqueur en fonction du type
  // Utiliser une couleur vive pour les stations-service pour une meilleure visibilité
  const color = location.type === 'gasStation' 
    ? '#f59e0b' // couleur ambre pour stations-service 
    : (markerTypes[location.type] || '#000000');
  
  // Styles de base pour le marqueur
  el.style.backgroundColor = color;
  el.style.width = '30px';
  el.style.height = '30px';
  el.style.borderRadius = '50%';
  el.style.display = 'flex';
  el.style.alignItems = 'center';
  el.style.justifyContent = 'center';
  el.style.color = 'white';
  el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  el.style.cursor = 'pointer';
  el.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
  el.style.position = 'relative';
  el.style.border = '2px solid white';
  el.style.zIndex = '5';
  
  // Style spécifique pour les stations stratégiques
  if (location.isPrimary) {
    el.style.border = '3px solid white';
    el.style.boxShadow = '0 3px 8px rgba(0,0,0,0.5)';
    el.style.zIndex = '10'; // Stations stratégiques au premier plan
  }
  
  // Ajouter une icône en fonction du type
  let iconElement = document.createElement('span');
  
  // Icône pour les stations service
  if (location.type === 'gasStation') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h12"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>';
  } else if (location.type === 'itinerary') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m3 9 4-4 5 5 4-4 3 3"/></svg>';
  } else if (location.type === 'accommodation') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h18"/><path d="M21 7v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"/><path d="M6 20v2"/><path d="M18 20v2"/><path d="M8 2v5"/><path d="M16 2v5"/></svg>';
  } else if (location.type === 'pointOfInterest') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
  } else {
    // Icône par défaut pour les autres types
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>';
  }
  
  el.appendChild(iconElement);

  // Effet de survol
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'scale(1.1)';
    el.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
  });
  
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'scale(1)';
    el.style.boxShadow = location.isPrimary 
      ? '0 3px 8px rgba(0,0,0,0.5)' 
      : '0 2px 6px rgba(0,0,0,0.3)';
  });

  // Effet de pulse pour les stations stratégiques
  if (location.isPrimary) {
    const pulseEffect = document.createElement('div');
    pulseEffect.style.position = 'absolute';
    pulseEffect.style.borderRadius = '50%';
    pulseEffect.style.width = '100%';
    pulseEffect.style.height = '100%';
    pulseEffect.style.backgroundColor = color;
    pulseEffect.style.opacity = '0.6';
    pulseEffect.style.animation = 'pulse 2s infinite';
    
    // Ajout de l'animation keyframe si elle n'existe pas déjà
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

  // Ajouter un titre au survol
  el.title = location.title || 'Point d\'intérêt';
  if (location.description) {
    el.title += ` - ${location.description.substring(0, 50)}${location.description.length > 50 ? '...' : ''}`;
  }

  try {
    // Création du marqueur centré sur les coordonnées
    console.log(`Ajout du marker à la carte: [${location.longitude}, ${location.latitude}]`);
    const marker = new mapboxgl.Marker({
      element: el,
      anchor: 'center'
    })
      .setLngLat([location.longitude, location.latitude])
      .addTo(map);

    // Gestionnaire d'événement de clic
    el.addEventListener('click', () => {
      onClick(location);
      console.log(`Marqueur cliqué: ${location.title}`);
    });

    return marker;
  } catch (error) {
    console.error(`Erreur lors de la création du marker pour ${location.title}:`, error);
    return null;
  }
};

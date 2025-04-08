
import mapboxgl from 'mapbox-gl';
import { markerTypes, MapLocation, isWithinCorsica, validateAndFixCoordinates } from './types';

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
  
  // Vérification et correction des coordonnées
  const validatedCoords = validateAndFixCoordinates(location.latitude, location.longitude);
  if (!validatedCoords) {
    console.error(`Impossible de créer un marqueur pour ${location.title}: coordonnées trop éloignées de la Corse`);
    return null;
  }
  
  // Utiliser les coordonnées validées/corrigées
  const [validLat, validLng] = validatedCoords;

  const el = document.createElement('div');
  el.className = 'marker';
  
  // Déterminer la couleur du marqueur en fonction du type
  const color = location.category === 'station-service' 
    ? '#f59e0b' // couleur ambre pour stations-service 
    : (markerTypes[location.type] || '#000000');
  
  // Styles de base pour le marqueur
  el.style.backgroundColor = color;
  el.style.width = '36px';
  el.style.height = '36px';
  el.style.borderRadius = '50%';
  el.style.display = 'flex';
  el.style.alignItems = 'center';
  el.style.justifyContent = 'center';
  el.style.color = 'white';
  el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  el.style.cursor = 'pointer';
  el.style.position = 'relative';
  el.style.border = '2px solid white';
  el.style.zIndex = '999';
  
  // Définir correctement le transformOrigin pour éviter le glissement
  el.style.transform = 'translate(-50%, -50%)';  
  el.style.transformOrigin = 'center';
  
  // Style spécifique pour les stations stratégiques
  if (location.isPrimary) {
    el.style.border = '4px solid white'; 
    el.style.boxShadow = '0 3px 8px rgba(0,0,0,0.5)';
    el.style.zIndex = '1000';
    el.style.width = '40px';
    el.style.height = '40px'; 
  }
  
  // Ajouter une icône en fonction du type
  let iconElement = document.createElement('span');
  
  // Icône pour les stations service
  if (location.category === 'station-service') {
    iconElement.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22h12"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>';
  } else if (location.type === 'pointOfInterest') {
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
  } else {
    // Icône par défaut pour les autres types
    iconElement.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>';
  }
  
  el.appendChild(iconElement);

  // Ajouter pulse effect pour les stations stratégiques
  if (location.isPrimary && location.category === 'station-service') {
    const pulseEffect = document.createElement('div');
    pulseEffect.style.position = 'absolute';
    pulseEffect.style.borderRadius = '50%';
    pulseEffect.style.width = '100%';
    pulseEffect.style.height = '100%';
    pulseEffect.style.backgroundColor = color;
    pulseEffect.style.opacity = '0.6';
    pulseEffect.style.animation = 'pulse 2s infinite';
    pulseEffect.style.zIndex = '-1';
    
    // Ajout de l'animation keyframe si elle n'existe pas déjà
    const styleId = 'marker-pulse-animation';
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

  // Effets de survol sans changer la transformation translate
  el.addEventListener('mouseenter', () => {
    el.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
    el.style.filter = 'brightness(1.1)';
    el.style.zIndex = '1001';
  });
  
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = location.isPrimary 
      ? '0 3px 8px rgba(0,0,0,0.5)' 
      : '0 2px 6px rgba(0,0,0,0.3)';
    el.style.filter = 'brightness(1)';
    el.style.zIndex = location.isPrimary ? '1000' : '999';
  });

  // Ajouter un titre au survol
  el.title = location.title || 'Point d\'intérêt';
  if (location.description) {
    el.title += ` - ${location.description.substring(0, 50)}${location.description.length > 50 ? '...' : ''}`;
  }

  try {
    // Création du marqueur avec ordre longitude, latitude pour Mapbox
    // et utilisation des coordonnées validées
    const marker = new mapboxgl.Marker({
      element: el,
      anchor: 'center'
    })
      .setLngLat([validLng, validLat])
      .addTo(map);

    // Gestionnaire d'événement de clic
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      onClick(location);
    });

    return marker;
  } catch (error) {
    console.error(`Erreur lors de la création du marker pour ${location.title}:`, error);
    return null;
  }
};

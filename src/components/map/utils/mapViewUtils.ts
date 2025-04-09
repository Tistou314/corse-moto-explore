
import mapboxgl from 'mapbox-gl';
import { MapLocation, isWithinCorsica, CorsicaCenter } from '../types';

/**
 * Ajuste la vue de la carte pour inclure tous les emplacements valides.
 * Gère également les cas où aucun emplacement valide n'est disponible.
 */
export const fitMapToLocations = (
  map: mapboxgl.Map,
  locations: MapLocation[] = []
) => {
  console.log(`Ajustement de la carte pour ${locations.length} emplacements`);
  
  // Filter locations to only include valid coordinates within Corsica
  const validLocations = locations.filter(loc => 
    typeof loc.latitude === 'number' && 
    typeof loc.longitude === 'number' &&
    !isNaN(loc.latitude) && 
    !isNaN(loc.longitude) &&
    isWithinCorsica(loc.latitude, loc.longitude, 0.2)
  );
  
  console.log(`Emplacements valides pour la carte: ${validLocations.length}/${locations.length}`);
  
  // Si on n'a pas de données valides, utiliser la vue par défaut de la Corse
  if (validLocations.length === 0) {
    console.warn("Aucun emplacement valide pour la carte, vue par défaut de la Corse");
    map.flyTo({
      center: CorsicaCenter,  // [9.13, 42.16] - Centre géographique de la Corse
      zoom: 8.5,
      duration: 1000
    });
    return;
  }

  if (validLocations.length > 1) {
    // Create bounds that include all markers
    const bounds = new mapboxgl.LngLatBounds();
    
    validLocations.forEach(location => {
      // Attention: L'ordre est important pour MapBox (longitude, latitude)
      bounds.extend([location.longitude, location.latitude]);
    });
    
    // Log du périmètre pour debug
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    console.log(`Bounds: NE [${ne.lat}, ${ne.lng}], SW [${sw.lat}, ${sw.lng}]`);
    
    // Adjust view to include all markers
    map.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      maxZoom: 12,
      duration: 1000
    });
    console.log("Carte ajustée à tous les marqueurs");
  } else if (validLocations.length === 1) {
    // If only one location, center on it
    const loc = validLocations[0];
    console.log(`Centrage sur une seule station: ${loc.title} [${loc.longitude}, ${loc.latitude}]`);
    
    map.flyTo({
      center: [loc.longitude, loc.latitude],  // Attention: MapBox utilise [longitude, latitude]
      zoom: 11,
      duration: 1000
    });
  }
};

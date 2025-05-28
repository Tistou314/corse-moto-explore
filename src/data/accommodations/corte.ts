
import { Accommodation } from './types';

export const corteAccommodations: Accommodation[] = [
  {
    id: "corte1",
    name: "Ferme auberge du col de la vaccia",
    type: "hotel",
    location: "Olivese",
    region: "corte",
    description: "Authentique ferme-auberge située sur le col de la Vaccia, offrant une expérience unique dans un cadre montagneux exceptionnel. Idéale pour les motards qui parcourent les routes sinueuses du centre de l'île.",
    priceRange: "50€ - 70€",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800&q=60",
    amenities: ["Table d'hôtes généreuse", "Produits fermiers", "Vue panoramique sur le col", "Spécialités corses"],
    bikerAmenities: ["Parking gratuit", "Site isolé en montagne", "Routes panoramiques"],
    contact: {
      phone: "+33 6 84 75 70 27",
      website: "https://www.auberge-coldelavaccia.fr/"
    },
    address: "Col de la Vaccia (RD69), 20140 Olivese",
    latitude: 41.82194,
    longitude: 9.08444
  }
];

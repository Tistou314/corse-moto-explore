
import { Accommodation } from './types';

export const corteAccommodations: Accommodation[] = [
  {
    id: "acc13",
    name: "Ferme auberge du col de la vaccia",
    type: "hotel",
    location: "Olivese",
    region: "corte",
    description: "Authentique ferme-auberge située sur le col de la Vaccia, offrant une expérience unique dans un cadre montagneux exceptionnel. Idéale pour les motards qui parcourent les routes sinueuses du centre de l'île.",
    priceRange: "70€ - 120€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2019/06/15/11/31/corsica-4275625_1280.jpg",
    amenities: ["Restaurant", "Produits fermiers", "Vue montagne", "Authentique"],
    bikerAmenities: ["Parking sécurisé", "Routes panoramiques", "Propriétaires motards"],
    contact: {
      phone: "+33 6 84 75 70 27",
      website: "https://www.auberge-coldelavaccia.fr/"
    },
    address: "Coldelavaccia, 20140 Olivese, France",
    latitude: 41.8333802,
    longitude: 9.0909544
  }
];


import { Accommodation } from './types';

export const portoAccommodations: Accommodation[] = [
  {
    id: "acc10",
    name: "Hôtel & Résidence Le Subrini",
    type: "hotel",
    location: "Porto",
    region: "porto",
    description: "Hôtel 3★ labellisé Relais Motards, idéalement placé sur le petit port de Porto (entre Ajaccio et Calvi). Il met à disposition des clients un parking privé gratuit et surtout un garage fermé spécialement pour les motos – un vrai plus dans ce village touristique. Point de départ parfait pour attaquer les virages des calanques de Piana (au sud) ou la route côtière vers Calvi (au nord). Chambres climatisées, piscine extérieure et restaurants à proximité immédiate.",
    priceRange: "90€ - 160€",
    rating: 8.4,
    image: "https://cdn.pixabay.com/photo/2019/06/28/03/07/corsica-4303457_1280.jpg",
    amenities: ["Piscine", "Climatisation", "Wifi gratuit", "Vue mer"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 26 14 94",
      email: "subrini@hotels-porto.com",
      website: "hotel-lesubrini-corse.com"
    },
    bookingLink: "https://www.hotel-lesubrini-corse.com",
    address: "Marine de Porto, 20150 Ota"
  },
  {
    id: "acc11",
    name: "Hôtel Capo d'Orto",
    type: "hotel",
    location: "Porto",
    region: "porto",
    description: "Relais Motards 3★ dominant le golfe de Porto. Grand parking gratuit et abri moto à disposition (garage fermé sur demande). Emplacement sur la route de Calvi (D81), à la sortie de Porto, très facile pour reprendre la route sans subir le trafic du port. Chambres avec balcon et vue mer imprenable. Piscine panoramique chauffée – idéale pour se délasser après avoir roulé dans la réserve de Scandola ou les gorges de la Spelunca.",
    priceRange: "95€ - 170€",
    rating: 8.8,
    image: "https://cdn.pixabay.com/photo/2015/09/07/13/08/corsica-928718_1280.jpg",
    amenities: ["Piscine chauffée", "Vue panoramique", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 26 11 14",
      email: "info@hotel-capo-dorto.com",
      website: "hotel-capo-dorto.com"
    },
    bookingLink: "https://www.hotel-capo-dorto.com",
    address: "Route de Calvi, lieu-dit Porto, 20150 Ota"
  }
];

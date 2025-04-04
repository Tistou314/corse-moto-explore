
import { Accommodation } from '../types';

export const calviCampings: Accommodation[] = [
  {
    id: "camp13",
    name: "Camping La Pinède",
    type: "camping",
    location: "Calvi",
    region: "calvi",
    description: "Village-camping 4★ en bord de mer, à 5 min du centre de Calvi. Parc arboré avec bungalows tout confort et vaste parc aquatique (piscine chauffée, toboggans). Clubs motards bienvenus : le camping accueille régulièrement des rassemblements. Grands emplacements stabilisés permettant de stationner motos et tentes facilement. Restaurant sur place apprécié des groupes de motards.",
    priceRange: "30€ - 100€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2017/07/15/11/43/france-2506774_1280.jpg",
    amenities: ["Parc aquatique", "Bungalows", "Restaurant", "Proximité centre-ville"],
    bikerAmenities: ["Accueil groupes motards", "Emplacements stabilisés"],
    contact: {
      phone: "+33 4 95 65 17 80",
      website: "camping-calvi.com"
    },
    bookingLink: "https://www.camping-calvi.com",
    address: "Route de la Pinède, 20260 Calvi",
    latitude: 42.556,
    longitude: 8.757
  },
  {
    id: "camp14",
    name: "Camping Kalliste",
    type: "camping",
    location: "Saint-Florent",
    region: "calvi",
    description: "Camping-Village 4★ aux portes de Saint-Florent, avec accès direct à la plage de la Roya. Piscine chauffée, jacuzzi, restaurant-bar et supérette. Adapté aux motards : dispose d'installations spéciales pour les accueillir. Les allées sont praticables pour les deux-roues et une consigne bagages est proposée (utile avant le check-in ou après le check-out en moto). Proximité du désert des Agriates.",
    priceRange: "26€ - 95€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/08/27/15/47/caravan-1624438_1280.jpg",
    amenities: ["Accès plage", "Piscine chauffée", "Jacuzzi", "Restaurant", "Supérette"],
    bikerAmenities: ["Installations pour motards", "Consigne bagages"],
    contact: {
      phone: "+33 4 95 37 03 08",
      website: "camping-saintflorent.com"
    },
    bookingLink: "https://www.camping-saintflorent.com",
    address: "332 Route de la Roya, 20217 Saint-Florent",
    latitude: 42.67336,
    longitude: 9.29684
  }
];

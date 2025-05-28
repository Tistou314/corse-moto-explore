
import { Accommodation } from '../types';

export const calviCampings: Accommodation[] = [
  {
    id: "camp-calvi1",
    name: "Camping La Pinède",
    type: "camping",
    location: "Calvi",
    region: "calvi",
    description: "Village-camping 4★ en bord de mer, à 5 min du centre de Calvi. Parc arboré avec bungalows tout confort et vaste parc aquatique (piscine chauffée, toboggans). Clubs motards bienvenus : le camping accueille régulièrement des rassemblements. Grands emplacements stabilisés permettant de stationner motos facilement.",
    priceRange: "30€ - 100€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2017/07/15/11/43/france-2506774_1280.jpg",
    amenities: ["Parc aquatique", "Bungalows", "Restaurant", "Proximité centre-ville", "Plage"],
    bikerAmenities: ["Accueil groupes motards", "Parking privé", "Espace motos"],
    contact: {
      phone: "+33 4 95 65 17 80",
      website: "camping-calvi.com"
    },
    bookingLink: "https://www.camping-calvi.com",
    address: "Route de la Pinède, 20260 Calvi",
    latitude: 42.55,
    longitude: 8.76
  },
  {
    id: "camp-calvi2",
    name: "Camping Kalliste",
    type: "camping",
    location: "Saint-Florent",
    region: "calvi",
    description: "Camping-Village 4★ aux portes de Saint-Florent, avec accès direct à la plage de la Roya. Piscine chauffée, jacuzzi, restaurant-bar et supérette. Adapté aux motards avec local deux-roues sécurisé. Les allées sont praticables pour les deux-roues et une consigne bagages est proposée.",
    priceRange: "26€ - 95€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/08/27/15/47/caravan-1624438_1280.jpg",
    amenities: ["Accès plage", "Piscine chauffée", "Jacuzzi", "Restaurant", "Supérette"],
    bikerAmenities: ["Local deux-roues", "Consigne bagages", "Proche Saint-Florent"],
    contact: {
      phone: "+33 4 95 37 03 08",
      website: "camping-saintflorent.com"
    },
    bookingLink: "https://www.camping-saintflorent.com",
    address: "Route de la Mer, 20217 Saint-Florent",
    latitude: 42.68,
    longitude: 9.30
  },
  {
    id: "camp-calvi3",
    name: "Camping Les Oliviers",
    type: "camping",
    location: "Calvi",
    region: "calvi",
    description: "Camping 4★ avec terrasses ombragées d'oliviers, proche de Calvi. Cadre naturel exceptionnel avec piscine, spa et snack-bar. Abri motos disponible pour la sécurité des deux-roues. Idéal pour explorer la Balagne et ses villages perchés.",
    priceRange: "28€ - 85€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2015/09/18/11/47/camping-945422_1280.jpg",
    amenities: ["Terrasses ombragées", "Piscine", "Spa", "Snack-bar", "Proche Calvi"],
    bikerAmenities: ["Abri motos", "Proche routes Balagne"],
    contact: {
      phone: "+33 4 95 65 17 80"
    },
    address: "Route de la forêt de Bonifatu, 20260 Calvi",
    latitude: 42.56,
    longitude: 8.78
  }
];

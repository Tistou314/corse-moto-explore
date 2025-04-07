
import { Accommodation } from './types';

export const portovecchioAccommodations: Accommodation[] = [
  {
    id: "portovecchio1",
    name: "Hôtel Olmuccio",
    type: "hotel",
    location: "Sainte Lucie de Porto Vecchio",
    region: "portovecchio",
    description: "Hôtel de charme situé à Sainte Lucie de Porto Vecchio, offrant une expérience authentique dans un cadre verdoyant. Idéal pour les motards qui souhaitent explorer la côte sud-est de la Corse.",
    priceRange: "110€ - 200€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Terrasse", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 71 41 39",
      website: "https://www.olmuccio.com/"
    },
    address: "Hotel OLMUCCIO, 4305 strada di, 20144 SAINTE LUCIE DE PORTO VECCHIO, France",
    latitude: 41.6995446,
    longitude: 9.3946549
  },
  {
    id: "portovecchio2",
    name: "Casanghjulina",
    type: "hotel",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Établissement de charme situé près de Porto-Vecchio, offrant un cadre paisible et élégant idéal pour se détendre après une journée de moto sur les routes corses.",
    priceRange: "95€ - 180€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg",
    amenities: ["Piscine", "Jardin", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Conseils d'itinéraires"],
    contact: {
      phone: "+33 6 30 20 00 00",
      website: "http://www.casanghjulina.com/"
    },
    address: "Fiumu d'Oso, 158 Route de l'Ancienne Voie Ferrée, 20137 Porto-Vecchio, France",
    latitude: 41.6704139,
    longitude: 9.2999758
  }
];

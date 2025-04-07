
import { Accommodation } from '../../types';

export const autresGites: Accommodation[] = [
  {
    id: "gite-autres1",
    name: "Domaine CARDU",
    type: "gite",
    location: "Corse",
    region: "autres",
    description: "Un domaine de charme offrant une expérience authentique et paisible en Corse.",
    priceRange: "90€ - 150€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/reception-2165756_1280.jpg",
    amenities: ["Vue panoramique", "Terrasse", "Petit-déjeuner"],
    bikerAmenities: ["Parking moto", "Conseils d'itinéraires"],
    contact: {
      phone: "+33 6 23 78 45 91",
      website: "http://www.domainecardu.com"
    },
    address: "Domaine CARDU, Corse",
    latitude: 42.0,
    longitude: 9.0
  },
  {
    id: "gite-autres2",
    name: "Domaine de Piscia - Clos Finidori - Fromagerie de Marie",
    type: "gite",
    location: "Corse",
    region: "autres",
    description: "Un domaine unique combinant hébergement, fromagerie et authenticité corse.",
    priceRange: "85€ - 130€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/reception-2165756_1280.jpg",
    amenities: ["Fromagerie", "Terrasse", "Produits locaux"],
    bikerAmenities: ["Parking moto", "Dégustation"],
    contact: {
      phone: "+33 6 18 34 56 72",
      website: "http://www.domainedepiscia.com"
    },
    address: "Domaine de Piscia, Corse",
    latitude: 42.2,
    longitude: 9.2
  }
];

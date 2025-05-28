
import { Accommodation } from '../types';

export const proprianoCampings: Accommodation[] = [
  {
    id: "camp-prop1",
    name: "Camping des Îles",
    type: "camping",
    location: "Propriano",
    region: "propriano",
    description: "Grand camping 4★ en bord de mer dans le golfe du Valinco. Piscine, restaurant-bar et animations. Parking gardé la nuit pour la sécurité des équipements. Idéal pour explorer le golfe du Valinco et Sartène.",
    priceRange: "28€ - 95€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2020/05/17/18/24/camping-5182650_1280.jpg",
    amenities: ["Bord de mer", "Piscine", "Restaurant-bar", "Animations"],
    bikerAmenities: ["Parking gardé la nuit", "Golfe du Valinco"],
    contact: {
      phone: "+33 4 95 76 12 34"
    },
    bookingLink: "https://www.camping-desiles.com",
    address: "Route de Pianottoli, 20110 Propriano",
    latitude: 41.66,
    longitude: 8.90
  },
  {
    id: "camp-prop2",
    name: "Camping Campo Di Liccia",
    type: "camping",
    location: "Bonifacio",
    region: "propriano",
    description: "Camping 3★ familial de 5 ha, très ombragé sous les oliviers et chênes-liège. Situé près de Bonifacio, idéal pour explorer l'extrême-sud. Piscine, restaurant, supérette sur place. Parking intérieur sécurisé.",
    priceRange: "22€ - 85€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2016/06/02/07/58/camping-1430231_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Supérette", "Emplacements ombragés"],
    bikerAmenities: ["Parking intérieur", "Proche Bonifacio"],
    contact: {
      phone: "+33 4 95 73 03 09",
      email: "info@campingdiliccia.com",
      website: "campingdiliccia.com"
    },
    bookingLink: "https://www.campingdiliccia.com",
    address: "Route de Bonifacio, 20169 Bonifacio",
    latitude: 41.44,
    longitude: 9.15
  }
];

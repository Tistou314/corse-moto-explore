
import { Accommodation } from '../types';

export const proprianoCampings: Accommodation[] = [
  {
    id: "camp10",
    name: "Camping Des Îles",
    type: "camping",
    location: "Bonifacio",
    region: "propriano",
    description: "Grand camping 4★ de 8 ha avec tous les services modernes : piscine, tennis, mini-golf, restaurant, supérette. Surveillance nocturne assurée (vigile) pour la tranquillité et la sécurité des équipements. Situé à 5 minutes de la citadelle de Bonifacio et à 900 m de la plage de Piantarella. Emplacements et locations haut de gamme (bungalows climatisés). Les motos peuvent stationner à proximité des hébergements (allées prévues).",
    priceRange: "28€ - 95€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2020/05/17/18/24/camping-5182650_1280.jpg",
    amenities: ["Piscine", "Tennis", "Mini-golf", "Restaurant", "Supérette"],
    bikerAmenities: ["Surveillance nocturne", "Stationnement près des hébergements"],
    contact: {
      phone: "+33 4 95 73 11 89",
      website: "camping-desiles.com"
    },
    bookingLink: "https://www.camping-desiles.com",
    address: "Route de Piantarella, 20169 Bonifacio",
    latitude: 41.399,
    longitude: 9.184
  },
  {
    id: "camp11",
    name: "Camping Campo Di Liccia",
    type: "camping",
    location: "Bonifacio",
    region: "propriano",
    description: "Camping familial de 5 ha, très ombragé sous les oliviers et chênes-liège. Situé à 4 km de Bonifacio, idéal pour explorer l'extrême-sud (Figari, plages de Santa Manza). Piscine, restaurant, supérette sur place. Forfait motard avantageux (tarif spécial moto). L'ambiance est conviviale et calme la nuit.",
    priceRange: "22€ - 85€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2016/06/02/07/58/camping-1430231_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Supérette", "Emplacements ombragés"],
    bikerAmenities: ["Forfait motard", "Calme nocturne"],
    contact: {
      phone: "+33 4 95 73 03 09",
      email: "info@campingdiliccia.com",
      website: "campingdiliccia.com"
    },
    bookingLink: "https://www.campingdiliccia.com",
    address: "Parmentile, Route de Porto-Vecchio, 20169 Bonifacio",
    latitude: 41.426,
    longitude: 9.185
  },
  {
    id: "camp15",
    name: "Camping Le Soleil",
    type: "camping",
    location: "Propriano",
    region: "propriano",
    description: "Camping familial 3★ situé entre Propriano et Campomoro, à 800m d'une magnifique plage. Emplacements ombragés spacieux, piscine, snack-bar. Accueil convivial des motards avec espace dédié pour le stationnement des deux-roues. Idéal pour explorer le golfe du Valinco et les routes côtières vers Ajaccio ou Bonifacio.",
    priceRange: "18€ - 70€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/58/camping-1846122_1280.jpg",
    amenities: ["Piscine", "Snack-bar", "Emplacements ombragés", "Proche plage"],
    bikerAmenities: ["Espace stationnement moto", "Accueil motards", "Itinéraires disponibles"],
    contact: {
      phone: "+33 4 95 76 01 55",
      website: "camping-lesoleil-corse.com"
    },
    bookingLink: "https://www.camping-lesoleil-corse.com",
    address: "Route de Campomoro, 20110 Propriano",
    latitude: 41.67,
    longitude: 8.88
  }
];

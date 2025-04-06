
import { Accommodation } from './types';

export const portovecchioAccommodations: Accommodation[] = [
  {
    id: "acc9",
    name: "Hôtel Olmuccio",
    type: "hotel",
    location: "Sainte Lucie De Porto Vecchio",
    region: "portovecchio",
    description: "Hôtel de charme situé à Sainte Lucie de Porto Vecchio, offrant un cadre paisible et une belle architecture. Idéalement placé pour explorer les plages du sud de l'île et les montagnes de l'Alta Rocca.",
    priceRange: "95€ - 180€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2015/09/18/01/02/pool-944866_1280.jpg",
    amenities: ["Piscine", "Jardin", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto"],
    contact: {
      website: "https://www.olmuccio.com/"
    },
    address: "Hotel OLMUCCIO, 4305 strada di, 20144 SAINTE LUCIE DE PORTO VECCHIO, France",
    latitude: 41.6995446,
    longitude: 9.3946549
  },
  {
    id: "acc10",
    name: "Domaine de Sonia",
    type: "hotel",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Magnifique domaine situé à proximité de la célèbre plage de Palombaggia. Offre un cadre parfait pour les motards qui souhaitent combiner exploration à moto et moments de détente sur les plus belles plages de Corse.",
    priceRange: "110€ - 250€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2018/01/15/17/32/corsica-3084781_1280.jpg",
    amenities: ["Piscine", "Jardin", "Climatisation", "Vue mer", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 6 71 08 84 09",
      website: "https://domainedesonia.com/"
    },
    address: "U pirellu résidence, hameau de, Route de Palombaggia, 20137 Porto-Vecchio, France",
    latitude: 41.5886842,
    longitude: 9.3289101
  },
  {
    id: "acc11",
    name: "Casanghjulina",
    type: "hotel",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Établissement de charme situé près du Fiumu d'Oso, à quelques minutes des plages et du centre-ville de Porto-Vecchio. Parfait pour découvrir la région sud en moto tout en restant à proximité des commodités.",
    priceRange: "100€ - 220€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2019/07/06/11/15/corsica-4320229_1280.jpg",
    amenities: ["Piscine", "Jardin", "Terrasse", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto"],
    contact: {
      phone: "+33 6 30 20 00 00",
      website: "http://www.casanghjulina.com/"
    },
    address: "Fiumu d'Oso, 158 Route de l'Ancienne Voie Ferrée, 20137 Porto-Vecchio, France",
    latitude: 41.6704139,
    longitude: 9.2999758
  },
  {
    id: "acc12",
    name: "Hotel & Spa des Pecheurs",
    type: "hotel",
    location: "Bonifacio",
    region: "portovecchio",
    description: "Hôtel exclusif situé sur l'île privée de Cavallo, accessible uniquement par bateau depuis Bonifacio. Un havre de luxe pour les motards qui souhaitent faire une pause sur la terre ferme et découvrir un lieu d'exception.",
    priceRange: "250€ - 600€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2014/10/01/16/36/siamese-fighting-fish-468786_1280.jpg",
    amenities: ["Spa", "Piscine", "Restaurant gastronomique", "Plage privée", "Vue mer"],
    bikerAmenities: ["Transfert moto possible", "Services premium"],
    contact: {
      phone: "+33 4 95 70 36 39",
      website: "https://www.hoteldespecheurs.com/"
    },
    address: "Ile de Cavallo, 20169 Bonifacio, France",
    latitude: 41.3629397,
    longitude: 9.2662857
  }
];

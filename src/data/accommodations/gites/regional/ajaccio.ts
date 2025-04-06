
import { Accommodation } from '../../types';

export const ajaccioGites: Accommodation[] = [
  {
    id: "gite17",
    name: "Domaine de Sonia",
    type: "chambre",
    location: "Porto-Vecchio",
    region: "ajaccio",
    description: "Hébergement de charme près de Porto-Vecchio, offrant un cadre paisible et élégant. Idéal pour les motards à la recherche de confort et de tranquillité.",
    priceRange: "80€ - 120€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/reception-2165756_1280.jpg",
    amenities: ["Vue panoramique", "Terrasse", "Petit-déjeuner"],
    bikerAmenities: ["Parking moto", "Conseils d'itinéraires"],
    contact: {
      phone: "+33 6 71 08 84 09",
      website: "https://domainedesonia.com/"
    },
    address: "U pirellu résidence, hameau de, Route de Palombaggia, 20137 Porto-Vecchio",
    latitude: 41.5886842,
    longitude: 9.3289101
  }
];


import { Accommodation } from '../types';

export const calviGites: Accommodation[] = [
  {
    id: "gite12",
    name: "A Casa di l'Alivu",
    type: "chambre",
    location: "Lama",
    region: "calvi",
    description: "Chambres d'hôtes dans une maison de village en Balagne, avec vue sur la vallée de l'Ostriconi. Garage voûté pour 2 motos (hauteur limitée) + parking public à 50 m pour autres motos. Hôte motard amateur de vieilles Ducati – peut accompagner les visiteurs sur une portion de route pour leur montrer des coins secrets. Petit-déjeuner copieux inclus.",
    priceRange: "65€ - 90€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2020/02/01/06/12/living-room-4809587_1280.jpg",
    amenities: ["Vue vallée", "Petit-déjeuner copieux", "Village authentique"],
    bikerAmenities: ["Garage voûté", "Hôte motard", "Conseils d'itinéraires"],
    contact: {
      phone: "+33 6 10 56 00 00",
      website: "casadilalivu.com"
    },
    address: "Quartier Poggio, 20218 Lama",
    latitude: 42.5736,
    longitude: 9.1561
  }
];

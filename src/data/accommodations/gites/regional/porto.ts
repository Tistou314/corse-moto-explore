
import { Accommodation } from '../../types';

export const portoGites: Accommodation[] = [
  {
    id: "gite7",
    name: "Vue sur Calanques",
    type: "chambre",
    location: "Ota",
    region: "porto",
    description: "Chambres d'hôtes situées à quelques minutes des célèbres calanques de Piana. Terrasse panoramique avec vue imprenable sur le golfe de Porto. Garage fermé pour les motos. Les propriétaires proposent des itinéraires adaptés pour découvrir la région en moto. Petit déjeuner inclus avec des produits maison.",
    priceRange: "75€ - 110€",
    rating: 4.9,
    image: "https://cdn.pixabay.com/photo/2020/02/03/00/12/living-room-4815021_1280.jpg",
    amenities: ["Vue mer", "Terrasse panoramique", "Wi-Fi", "Petit déjeuner"],
    bikerAmenities: ["Garage fermé", "Itinéraires moto", "Routes panoramiques"],
    contact: {
      phone: "+33 6 87 59 04 12",
      website: "chambres-calanques-piana.com"
    },
    address: "Route des Calanques, 20150 Ota",
    latitude: 42.2523,
    longitude: 8.6975
  }
];


import { Accommodation } from './types';

export const ajaccioAccommodations: Accommodation[] = [
  {
    id: "ajaccio1",
    name: "Le Week End",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Hôtel élégant situé sur la Route des Sanguinaires avec une vue magnifique sur la baie d'Ajaccio. Parfait pour les motards qui veulent explorer la côte ouest de la Corse.",
    priceRange: "120€ - 250€",
    rating: 4.3,
    image: "/lovable-uploads/8ad6059c-3be0-4ac9-bcce-f48495f63260.png",
    amenities: ["Piscine", "Restaurant", "Bar", "Climatisation", "Vue mer", "Wifi gratuit"],
    bikerAmenities: ["Parking privé gratuit", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 52 51 78",
      website: "https://www.hotel-le-weekend.com/"
    },
    address: "Route des Sanguinaires, 20000 Ajaccio",
    latitude: 41.91,
    longitude: 8.65
  },
  {
    id: "ajaccio2",
    name: "Radisson Blu Resort & Spa, Ajaccio Bay",
    type: "hotel",
    location: "Porticcio",
    region: "ajaccio",
    description: "Resort luxueux situé dans la baie d'Ajaccio à Porticcio. Offre des équipements haut de gamme et un spa pour se détendre après une longue journée de conduite à moto.",
    priceRange: "180€ - 400€",
    rating: 4.6,
    image: "/lovable-uploads/4f782a78-47e0-4676-a139-1ff26b164087.png",
    amenities: ["Spa", "Piscine extérieure", "Restaurant", "Bar", "Climatisation", "Accès direct plage"],
    bikerAmenities: ["Parking gratuit", "Garage"],
    contact: {
      phone: "+33 4 95 77 97 97",
      website: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-ajaccio-bay-spa"
    },
    address: "Agosta Plage, 20166 Porticcio (Albitreccia)",
    latitude: 41.92867,
    longitude: 8.77748
  },
  {
    id: "ajaccio3",
    name: "Hotel Stella Di Mare",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Élégant hôtel situé le long de la route des Sanguinaires, offrant une vue imprenable sur la mer Méditerranée. L'établissement est idéalement situé pour les motards souhaitant explorer la côte ouest.",
    priceRange: "100€ - 200€",
    rating: 4.2,
    image: "/lovable-uploads/62b4ce49-f171-4ad5-b5a9-8394b08772ac.png",
    amenities: ["Climatisation", "Restaurant-bar", "Vue mer", "Wifi gratuit", "Piscine d'eau de mer", "Accès plage"],
    bikerAmenities: ["Parking gratuit"],
    contact: {
      phone: "+33 4 95 52 01 07",
      website: "https://www.hotel-stelladimare.com/"
    },
    address: "31 Route des Sanguinaires, 20000 Ajaccio",
    latitude: 41.91,
    longitude: 8.66
  },
  {
    id: "ajaccio4",
    name: "Hôtel La Pinède",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Hôtel de charme entouré de pins, situé sur la plage de Barbicaja. Un cadre idéal face à la mer pour les motards à la recherche de tranquillité après une journée d'exploration.",
    priceRange: "157€ - 280€",
    rating: 4.0,
    image: "/lovable-uploads/5ba3cc29-9514-4f3f-acf3-0afaa48d8799.png",
    amenities: ["Climatisation", "Restaurant", "Bar", "Jardin", "Wifi gratuit", "Piscine", "Vue mer", "Salle de sport"],
    bikerAmenities: ["Parking gratuit"],
    contact: {
      phone: "+33 4 95 52 00 44",
      website: "http://www.la-pinede.com/"
    },
    address: "Plage de Barbicaja, Route des Îles Sanguinaires, 20000 Ajaccio",
    latitude: 41.93,
    longitude: 8.70
  }
];

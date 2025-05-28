
import { Accommodation } from './types';

export const portoAccommodations: Accommodation[] = [
  {
    id: "porto1",
    name: "Hôtel Les Roches Rouges",
    type: "hotel",
    location: "Piana",
    region: "porto",
    description: "Hôtel emblématique offrant une vue spectaculaire sur les célèbres Calanques de Piana. Sa terrasse classée historique est l'endroit idéal pour admirer le coucher de soleil après une journée de moto dans cette région exceptionnelle.",
    priceRange: "80€ - 130€",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=800&q=60",
    amenities: ["Restaurant panoramique", "Terrasse classée historique", "Vue exceptionnelle sur les Calanques", "Bar lounge", "Wifi"],
    bikerAmenities: ["Parking privé gratuit", "Routes panoramiques"],
    contact: {
      phone: "+33 4 95 27 81 81",
      website: "http://www.roches-rouges.com"
    },
    address: "Route de Porto, 20115 Piana",
    latitude: 42.24028,
    longitude: 8.64167
  }
];

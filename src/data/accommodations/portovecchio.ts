
import { Accommodation } from './types';

export const portovecchioAccommodations: Accommodation[] = [
  {
    id: "portovecchio1",
    name: "Hôtel Résidence Olmuccio",
    type: "hotel",
    location: "Sainte-Lucie de Porto-Vecchio",
    region: "portovecchio",
    description: "Hôtel résidence situé à proximité des plus belles plages du sud de la Corse. Un lieu idéal pour les motards souhaitant découvrir l'extrême sud de l'île tout en profitant du confort d'un établissement reconnu Relais Motards.",
    priceRange: "90€ - 170€",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    amenities: ["Restaurant", "Piscine", "Plage à 400m", "Wifi"],
    bikerAmenities: ["Parking gratuit", "Relais Motards"],
    contact: {
      phone: "+33 4 95 70 22 75",
      website: "http://www.residence-olmuccio.com"
    },
    address: "Lieu-dit Olmucciu, 20144 Sainte-Lucie de Porto-Vecchio",
    latitude: 41.72,
    longitude: 9.373
  }
];

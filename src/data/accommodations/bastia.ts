
import { Accommodation } from './types';

export const bastiaAccommodations: Accommodation[] = [
  {
    id: "bastia1",
    name: "LE RELAIS DE SISCO",
    type: "hotel",
    location: "Sisco",
    region: "bastia",
    description: "Charmant relais situé sur la route du Cap Corse, parfait comme point de départ pour explorer cette magnifique péninsule. Accueil chaleureux et conseils personnalisés pour les motards.",
    priceRange: "80€ - 150€",
    rating: 4.2,
    image: "/lovable-uploads/f0a702d1-389f-45b9-b92f-25947b798f34.png",
    amenities: ["Restaurant", "Terrasse", "Wifi gratuit", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto", "Propriétaires motards"],
    contact: {
      phone: "+33 6 11 48 34 05",
      website: "http://www.lerelaisdesisco.fr/"
    },
    address: "Canavaggia Lieu-dit, 20233 Sisco, France",
    latitude: 42.8102568,
    longitude: 9.4681131
  },
  {
    id: "bastia2",
    name: "Corse Hôtel",
    type: "hotel",
    location: "Biguglia",
    region: "bastia",
    description: "Hôtel moderne situé à proximité de Bastia, facile d'accès depuis le port et l'aéroport. Un excellent point de départ pour explorer le Cap Corse ou descendre vers l'intérieur de l'île.",
    priceRange: "85€ - 160€",
    rating: 3.8,
    image: "/lovable-uploads/0a9d0690-525a-4b87-a78f-c7ec868066a9.png",
    amenities: ["Restaurant", "Bar", "Climatisation", "Wifi gratuit", "Parking"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 30 02 00",
      website: "http://www.cors-hotel.com/"
    },
    address: "Lot. Arbucetta, 20620 Biguglia, France",
    latitude: 42.6265527,
    longitude: 9.4392168
  },
  {
    id: "bastia3",
    name: "Hôtel Restaurant Spa La Madrague",
    type: "hotel",
    location: "Lucciana",
    region: "bastia",
    description: "Hôtel avec spa situé près de l'aéroport de Bastia, offrant un véritable havre de paix. Idéal pour se détendre après une journée intense de route, avec son spa et sa piscine.",
    priceRange: "100€ - 220€",
    rating: 4.4,
    image: "/lovable-uploads/c9c69fc8-07ec-474b-9707-bb25b3ee2ec1.png",
    amenities: ["Spa", "Piscine", "Restaurant", "Bar", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé", "Garage"],
    contact: {
      phone: "+33 4 95 30 02 50",
      website: "http://www.hotel-lamadrague.com/"
    },
    address: "D107, Route de la Canonica, 20290 Lucciana, France",
    latitude: 42.54312,
    longitude: 9.469483
  }
];


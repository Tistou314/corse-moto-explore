
import { Accommodation } from './types';

export const bastiaAccommodations: Accommodation[] = [
  {
    id: "bastia1",
    name: "LE RELAIS DE SISCO",
    type: "hotel",
    location: "Sisco",
    region: "bastia",
    description: "Charmante résidence située sur la route du Cap Corse, parfait comme point de départ pour explorer cette magnifique péninsule. Accueil chaleureux dans un cadre verdoyant avec piscine.",
    priceRange: "80€ - 150€",
    rating: 4.2,
    image: "/lovable-uploads/f0a702d1-389f-45b9-b92f-25947b798f34.png",
    amenities: ["Piscine extérieure", "Terrasse", "Wifi gratuit", "Jardins", "Appartements équipés"],
    bikerAmenities: ["Parking privé gratuit", "Itinéraires moto"],
    contact: {
      phone: "+33 6 11 48 34 05",
      website: "http://www.lerelaisdesisco.fr/"
    },
    address: "Marine de Sisco, 20233 Sisco (Cap Corse)",
    latitude: 42.82,
    longitude: 9.45
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
    amenities: ["Restaurant", "Piscine extérieure", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Parking clos gratuit"],
    contact: {
      phone: "+33 4 95 30 02 00",
      website: "http://www.cors-hotel.com/"
    },
    address: "T11 (RN193), 20620 Biguglia (Bastia)",
    latitude: 42.62,
    longitude: 9.44
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
    amenities: ["Spa et massages", "Piscine", "Restaurant", "Bar", "Climatisation", "Wifi gratuit"],
    bikerAmenities: ["Grand parking", "Proximité aéroport"],
    contact: {
      phone: "+33 4 95 30 02 50",
      website: "http://www.hotel-lamadrague.com/"
    },
    address: "Route de la Canonica (RD107), 20290 Lucciana",
    latitude: 42.54253,
    longitude: 9.46919
  },
  {
    id: "bastia4",
    name: "Casanghjulina",
    type: "gite",
    location: "Saint-Florent",
    region: "bastia",
    description: "Chambres d'hôtes de charme au cœur du désert des Agriates, offrant un havre de paix aux motards en quête d'authenticité. Un lieu idéal pour découvrir Saint-Florent et ses environs.",
    priceRange: "90€ - 160€",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=60",
    amenities: ["Piscine", "Table d'hôtes", "Wifi", "Vue montagne"],
    bikerAmenities: ["Parking privé", "Garage motos"],
    contact: {
      phone: "+33 6 12 34 56 78"
    },
    address: "Lieu-dit Tragone, 20217 Saint-Florent",
    latitude: 42.68,
    longitude: 9.30
  }
];

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
    amenities: ["Piscine", "Restaurant", "Bar", "Climatisation", "Vue mer"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 52 51 78",
      website: "https://www.hotel-le-weekend.com/"
    },
    address: "Rte des Sanguinaires, 20000 Ajaccio, France",
    latitude: 41.9097195,
    longitude: 8.6480548
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
    amenities: ["Spa", "Piscine", "Restaurant", "Bar", "Climatisation", "Vue mer"],
    bikerAmenities: ["Parking sécurisé", "Garage"],
    contact: {
      phone: "+33 4 95 77 97 97",
      website: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-ajaccio-bay-spa"
    },
    address: "Agosta Plage FR 20166, Porticcio Corsica, 20166 Grosseto-Prugna, France",
    latitude: 41.8651628,
    longitude: 8.7920834
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
    image: "https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg",
    amenities: ["Climatisation", "Restaurant", "Bar", "Vue mer", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 52 01 07",
      website: "https://www.hotel-stelladimare.com/"
    },
    address: "31 Rte des Sanguinaires, 20000 Ajaccio, France",
    latitude: 41.9079247,
    longitude: 8.659979
  },
  {
    id: "ajaccio4",
    name: "Hôtel La Pinède",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Hôtel de charme entouré de pins, à proximité des plages des Sanguinaires. Un cadre idéal pour les motards à la recherche de tranquillité après une journée d'exploration.",
    priceRange: "90€ - 180€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2018/08/08/13/34/housing-development-3591293_1280.jpg",
    amenities: ["Climatisation", "Restaurant", "Bar", "Jardin", "Wifi gratuit"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 52 00 44",
      website: "http://www.la-pinede.com/"
    },
    address: "ROUTE DES ILES SANGUINAIRES, 20000 Ajaccio, France",
    latitude: 41.9101983,
    longitude: 8.6882254
  }
];

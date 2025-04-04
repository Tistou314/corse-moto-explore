
import { Accommodation } from '../../types';

export const corteGites: Accommodation[] = [
  {
    id: "gite5",
    name: "Castagniccia",
    type: "gite",
    location: "Piedicroce",
    region: "corte",
    description: "Gîte traditionnel en pierre au cœur de la Castagniccia, idéal pour explorer les routes sinueuses de cette région verdoyante. Parking couvert pour les motos. Possibilité de dîner sur place avec des produits régionaux. À 30 minutes des cascades des Anglais, lieu parfait pour se rafraîchir après une journée en moto.",
    priceRange: "60€ - 90€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/41/house-1836070_1280.jpg",
    amenities: ["Calme", "Nature", "Produits régionaux", "Terrasse"],
    bikerAmenities: ["Parking couvert", "Routes sinueuses", "Itinéraires moto"],
    contact: {
      phone: "+33 6 33 45 67 24",
      website: "gite-castagniccia.corsica"
    },
    address: "Place de l'Église, 20229 Piedicroce",
    latitude: 42.3707,
    longitude: 9.3317
  }
];

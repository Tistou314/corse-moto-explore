
import { Accommodation } from '../types';

export const corteCampings: Accommodation[] = [
  {
    id: "camp-corte1",
    name: "Camping u Casone",
    type: "camping",
    location: "Venaco",
    region: "corte",
    description: "Camping ombragé au cœur de la Corse, situé en bord de rivière avec emplacement spécialement aménagé pour les motards. Douches chaudes et sanitaires propres. Bloc technique avec petit atelier pour l'entretien des motos. À proximité des plus belles routes de montagne de l'île.",
    priceRange: "18€ - 25€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/42/camping-1845906_1280.jpg",
    amenities: ["Bord de rivière", "Ombragé", "Sanitaires propres", "Épicerie"],
    bikerAmenities: ["Emplacements dédiés", "Atelier technique", "Routes de montagne"],
    contact: {
      phone: "+33 4 95 46 07 65",
      website: "camping-ucasone.com"
    },
    address: "Route de la rivière, 20231 Venaco",
    latitude: 42.2318,
    longitude: 9.1750
  }
];

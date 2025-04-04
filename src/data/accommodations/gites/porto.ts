
import { Accommodation } from '../types';

export const portoGites: Accommodation[] = [
  {
    id: "gite14",
    name: "Gîte Auberge du Col de Vergio",
    type: "gite",
    location: "Albertacce",
    region: "porto",
    description: "Auberge d'altitude située au col routier le plus haut de Corse (1477 m), étape mythique pour les motards. Dortoirs et chambres simples. Grand parking où les motos peuvent être regroupées devant l'entrée (sous l'éclairage la nuit). Possibilité de ranger motos dans le garage de l'hôtel en cas de mauvais temps. Restaurant rustique servant une cuisine roborative (soupe corse, civet de sanglier) bienvenue après les routes de montagne.",
    priceRange: "40€ - 70€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2017/08/06/18/33/barn-2594975_1280.jpg",
    amenities: ["Col d'altitude", "Restaurant", "Dortoirs", "Cheminée"],
    bikerAmenities: ["Parking éclairé", "Garage en cas de mauvais temps", "Étape mythique"],
    contact: {
      phone: "+33 4 95 48 00 37"
    },
    address: "Col de Vergio (RN 193), 20224 Albertacce",
    latitude: 42.2931,
    longitude: 8.8886
  }
];


import { Accommodation } from '../../types';

export const portoGites: Accommodation[] = [
  {
    id: "gite-porto1",
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
  },
  {
    id: "gite-porto2",
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
      phone: "+33 4 95 48 00 37",
      website: "http://www.auberge-col-vergio.com"
    },
    address: "Col de Vergio (RN 193), 20224 Albertacce",
    latitude: 42.2931,
    longitude: 8.8886
  }
];

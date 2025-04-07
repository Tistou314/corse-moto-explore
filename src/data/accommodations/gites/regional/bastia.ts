
import { Accommodation } from '../../types';

export const bastiaGites: Accommodation[] = [
  {
    id: "gite23",
    name: "U Castellu",
    type: "gite",
    location: "Luri",
    region: "bastia",
    description: "Gîte de caractère dans une ancienne bâtisse du Cap Corse, avec vue panoramique sur la mer. Parking privé pour les motos dans la cour intérieure de la propriété. Propriétaire motard qui peut conseiller des itinéraires adaptés dans le Cap Corse. Proche de nombreuses plages sauvages.",
    priceRange: "85€ - 120€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg",
    amenities: ["Vue panoramique", "Terrasse", "Barbecue", "Wi-Fi"],
    bikerAmenities: ["Parking sécurisé", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 15 78 92 30",
      website: "ucastellu-capcorse.com"
    },
    address: "Route du Moulin, 20228 Luri",
    latitude: 42.9073,
    longitude: 9.4444
  },
  {
    id: "gite24",
    name: "Chambres d'hôtes Le Refuge Orezza",
    type: "chambre",
    location: "Piedicroce",
    region: "bastia",
    description: "Ancien couvent restauré offrant 5 chambres d'hôtes au cœur de la Castagniccia (célèbre pour ses routes sinueuses). Hangar sécurisé dans l'enceinte pour abriter jusqu'à 6 motos. Possibilité de dîner sur place autour de la cheminée (cuisine traditionnelle corse). Outils et compresseur disponibles en libre-service. Cadre atypique et authentique très apprécié des motards voyageurs.",
    priceRange: "65€ - 95€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2014/07/10/16/35/parlor-389256_1280.jpg",
    amenities: ["Repas sur place", "Bâtiment historique", "Cheminée", "Wifi gratuit"],
    bikerAmenities: ["Hangar sécurisé", "Outils disponibles", "Compresseur", "Propriétaires motards"],
    contact: {
      phone: "+33 6 14 58 00 00",
      website: "refuge-orezza.fr"
    },
    address: "Couvent Saint-François, 20229 Piedicroce",
    latitude: 42.3923,
    longitude: 9.3147
  },
  {
    id: "gite25",
    name: "Centu Chiavi",
    type: "chambre",
    location: "Barrettali",
    region: "bastia",
    description: "Chambre d'hôtes de charme dans un ancien domaine viticole sur la côte sauvage du Cap Corse. Cour intérieure fermée où l'on peut stationner 2-3 motos à l'abri. Atelier d'artiste attenant utilisé comme abri en cas de pluie. Hôtes connaissant parfaitement la région : ils fournissent des roadbooks maison avec itinéraires panoramiques du Cap (patron membre d'un moto-club local).",
    priceRange: "70€ - 110€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg",
    amenities: ["Vue mer", "Domaine viticole", "Repas sur place", "Calme"],
    bikerAmenities: ["Cour intérieure fermée", "Abri pluie", "Roadbooks fournis", "Propriétaire motard"],
    contact: {
      phone: "+33 4 95 35 61 32",
      website: "centuchiavi.com"
    },
    address: "Marine de Giottani, 20228 Barrettali",
    latitude: 42.8285,
    longitude: 9.4061
  }
];

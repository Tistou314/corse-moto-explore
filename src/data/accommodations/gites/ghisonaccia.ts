
import { Accommodation } from '../types';

export const ghisonacciaGites: Accommodation[] = [
  {
    id: "gite5",
    name: "L'Auberge d'Isolaccio",
    type: "gite",
    location: "Isolaccio-di-Fiumorbo",
    region: "ghisonaccia",
    description: "Gîte-auberge rural dans un village de moyenne montagne, labellisé Accueil Motards. Grand garage couvert pour abriter motos et scooters la nuit. Atelier avec outils de base et point de lavage à disposition. Table d'hôtes proposant une cuisine corse copieuse (idéal pour les groupes en itinérance). Situé à 15 min de la RT10 (axe Bastia-Bonifacio).",
    priceRange: "55€ - 85€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2018/01/29/07/11/modern-minimalist-bedroom-3115111_1280.jpg",
    amenities: ["Table d'hôtes", "Cuisine corse", "Vue montagne"],
    bikerAmenities: ["Garage couvert", "Atelier équipé", "Point de lavage", "Propriétaires motards"],
    contact: {
      phone: "+33 4 95 56 47 92",
      website: "auberge-isolaccio.com"
    },
    address: "Village, 20243 Isolaccio-di-Fiumorbo",
    latitude: 42.0034,
    longitude: 9.2686
  },
  {
    id: "gite6",
    name: "Gîtes A Bella Scusa",
    type: "gite",
    location: "Santa-Lucia-di-Moriani",
    region: "ghisonaccia",
    description: "Location de deux gîtes neufs (2 et 4 pers) avec grand garage fermé commun pour motos sur sol dur et plat. Emplacement de lavage moto et local de séchage des combinaisons mis à disposition. Propriétaire attentif, propose sur demande une table d'hôtes et peut guider vers les ateliers mécaniques alentours en cas de besoin.",
    priceRange: "60€ - 90€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/04/18/08/51/bathroom-1336167_1280.jpg",
    amenities: ["Cuisine équipée", "Barbecue", "Terrasse", "Jardin"],
    bikerAmenities: ["Garage fermé", "Emplacement lavage", "Local séchage"],
    contact: {
      website: "gites-de-france-corse.com"
    },
    address: "Lieu-dit Prunete, 20230 Santa-Lucia-di-Moriani",
    latitude: 42.3726,
    longitude: 9.5276
  }
];

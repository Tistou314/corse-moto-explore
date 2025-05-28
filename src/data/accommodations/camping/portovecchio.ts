
import { Accommodation } from '../types';

export const portovecchioCampings: Accommodation[] = [
  {
    id: "camp-pv1",
    name: "Camping L'Oso",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Membre du réseau Relais Motards, ce camping 3★ familial entre mer et montagne offre un parking privé et fermé pour motos, un espace pour sécher les vêtements et laver le linge, du petit outillage, accueil de groupes, mise à disposition de roadbooks. Grande piscine chauffée et emplacements ombragés.",
    priceRange: "25€ - 85€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Emplacements ombragés", "Wifi"],
    bikerAmenities: ["Parking gratuit", "Relais Motards", "Entre mer et montagne"],
    contact: {
      phone: "+33 4 95 71 60 99",
      email: "contact@campingloso.com",
      website: "https://www.campingloso.com"
    },
    bookingLink: "https://www.campingloso.com",
    address: "Lieu-dit Lecci, 20137 Porto-Vecchio",
    latitude: 41.66,
    longitude: 9.31
  },
  {
    id: "camp-pv2",
    name: "Camping U Stabiacciu",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Camping 3★ labellisé Relais Motards avec tarifs spéciaux motards (-5% sur les emplacements dès 3 nuits). Grand espace piscine et animations (pool party, soirées DJ). Restaurant sur place. Parking gratuit à côté des chalets pour stationner la moto en sécurité.",
    priceRange: "20€ - 70€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2018/02/21/10/16/accommodation-3169211_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Animations", "Emplacements ombragés"],
    bikerAmenities: ["Parking gratuit", "Tarifs spéciaux motards"],
    contact: {
      phone: "+33 4 95 70 37 17",
      email: "stabiacciu@wanadoo.fr",
      website: "https://www.stabiacciu.com"
    },
    bookingLink: "https://www.stabiacciu.com",
    address: "Route de Piccovaggia, 20137 Porto-Vecchio",
    latitude: 41.59,
    longitude: 9.27
  },
  {
    id: "camp-pv3",
    name: "Camping Fautea",
    type: "camping",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    description: "Camping 3★ au pied de la tour génoise de Fautea, entre mer et nature. Emplacements avec vue sur la mer et la tour historique. Atmosphère très calme la nuit, idéal pour une étape repos après les virages du col de Bavella tout proche. Accès aisé depuis la RT10.",
    priceRange: "15€ - 55€",
    rating: 3.8,
    image: "https://cdn.pixabay.com/photo/2014/11/27/00/58/beach-547750_1280.jpg",
    amenities: ["Vue mer", "Accès plage", "Pizzeria", "Tour génoise"],
    bikerAmenities: ["Calme nocturne", "Proche col de Bavella", "Parking gratuit"],
    contact: {
      phone: "+33 4 95 70 49 83",
      website: "http://www.camping-fautea.com"
    },
    bookingLink: "http://www.camping-fautea.com",
    address: "Lieu-dit Fautea, 20144 Zonza",
    latitude: 41.75,
    longitude: 9.37
  }
];

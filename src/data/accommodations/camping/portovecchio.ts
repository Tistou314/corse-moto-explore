
import { Accommodation } from '../types';

export const portovecchioCampings: Accommodation[] = [
  {
    id: "camp1",
    name: "Camping L'Oso",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Membre du réseau Relais Motards, ce camping 3★ offre un parking privé et fermé pour motos, un espace pour sécher les vêtements et laver le linge, du petit outillage, accueil de groupes, mise à disposition de roadbooks. Grande piscine chauffée, emplacements ombragés et divers hébergements (tentes, mobil-homes) dans un cadre boisé calme.",
    priceRange: "25€ - 85€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg",
    amenities: ["Piscine chauffée", "Restaurant", "Emplacements ombragés", "Wifi"],
    bikerAmenities: ["Parking sécurisé", "Petit outillage", "Roadbooks", "Accueil groupes"],
    contact: {
      phone: "+33 4 95 71 60 99",
      email: "contact@campingloso.com",
      website: "campingloso.com"
    },
    bookingLink: "https://www.campingloso.com",
    address: "Route de Cala Rossa, 20137 Porto-Vecchio",
    latitude: 41.63111,
    longitude: 9.32533
  },
  {
    id: "camp2",
    name: "Camping U Stabiacciu",
    type: "camping",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Camping 3★ labellisé Relais Motards avec tarifs spéciaux motards (-5% sur les emplacements dès 3 nuits). Grand espace piscine et animations (pool party, soirées DJ). Restaurant sur place. Parking gratuit à côté des chalets pour stationner la moto en sécurité. Atmosphère festive en été (DJ sets) et conviviale.",
    priceRange: "20€ - 70€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2018/02/21/10/16/accommodation-3169211_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Animations", "Wifi"],
    bikerAmenities: ["Parking sécurisé", "Tarifs spéciaux motards", "Proche plages"],
    contact: {
      phone: "+33 4 95 70 37 17",
      email: "stabiacciu@wanadoo.fr",
      website: "stabiacciu.com"
    },
    bookingLink: "https://www.stabiacciu.com",
    address: "Route de Porra, 20137 Porto-Vecchio",
    latitude: 41.588,
    longitude: 9.279
  },
  {
    id: "camp3",
    name: "Camping Santa Lucia",
    type: "camping",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    description: "Camping familial 3★ au bord de la plage de Fautea. Propose aux motards voyageant léger la location de lodges en toile équipés (tentes prêtes à l'emploi) - idéal pour ceux en deux-roues sans s'encombrer de matériel de camping. Emplacements ombragés, piscine, mini-golf et animations familiales sur place.",
    priceRange: "18€ - 75€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2018/06/14/21/15/the-beach-3475305_1280.jpg",
    amenities: ["Accès plage", "Piscine", "Mini-golf", "Animations"],
    bikerAmenities: ["Tentes équipées", "Emplacements ombragés", "Accueil motards"],
    contact: {
      phone: "+33 4 95 71 45 28",
      email: "informations@campingsantalucia.com"
    },
    bookingLink: "https://www.campingsantalucia.com",
    address: "Lieu-dit Ste-Lucie, 20144 Zonza",
    latitude: 41.71,
    longitude: 9.38
  },
  {
    id: "camp4",
    name: "Camping Gallina Varja",
    type: "camping",
    location: "Sotta",
    region: "portovecchio",
    description: "Ce camping atypique est tenu par une famille de motards. Il combine hébergements insolites (chambres en bois, chalets, écolodges et mobil-homes) et ambiance conviviale. Parking gratuit sur place pour les motos. Possibilité de demi-pension : repas du terroir pris en terrasse dans une ambiance chaleureuse. Situé à la croisée des routes vers Bonifacio et Porto-Vecchio.",
    priceRange: "22€ - 90€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2017/11/24/10/43/camping-2974050_1280.jpg",
    amenities: ["Hébergements insolites", "Restaurant", "Terrasse", "Calme"],
    bikerAmenities: ["Parking moto", "Propriétaires motards", "Repas du terroir"],
    contact: {
      phone: "+33 6 64 30 95 70",
      website: "gallinavarja.com"
    },
    bookingLink: "https://www.gallinavarja.com",
    address: "802 Strada di Gallina Varja, 20146 Sotta",
    latitude: 41.84981,
    longitude: 9.19818
  },
  {
    id: "camp8",
    name: "Camping Fautea",
    type: "camping",
    location: "Sainte-Lucie-de-Porto-Vecchio",
    region: "portovecchio",
    description: "Petit camping au pied de la tour génoise de Fautea, entre mer et nature. Emplacements en terrasses ombragées avec vue mer. Atmosphère très calme la nuit, idéal pour une étape repos après les virages du col de Bavella tout proche. Accès aisé depuis la RT10.",
    priceRange: "15€ - 40€",
    rating: 3.8,
    image: "https://cdn.pixabay.com/photo/2014/11/27/00/58/beach-547750_1280.jpg",
    amenities: ["Vue mer", "Emplacements ombragés", "Tranquillité"],
    bikerAmenities: ["Calme nocturne", "Proche col de Bavella"],
    contact: {
      phone: "+33 4 95 70 49 83",
      website: "http://www.camping-fautea.com"
    },
    bookingLink: "https://www.camping.info/fr/camping-fautea",
    address: "Plage de Fautea, 20144 Zonza",
    latitude: 41.705,
    longitude: 9.39
  }
];

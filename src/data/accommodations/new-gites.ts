import { Accommodation } from './types';

export const newGites: Accommodation[] = [
  {
    id: "maison-de-la-vigne",
    name: "Maison de la Vigne",
    type: "gite",
    description:
      "Maison d’hôtes tenue par des motards avec cinq chambres climatisées. Accueil personnalisé, conseils d’itinéraires, circuits en étoile (Cap Corse, Balagne, Corte) et roadbooks détaillés. Possibilité de repas sur place.",
    location: "Venzolasca",
    region: "bastia",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 140€",
    rating: 4.6,
    amenities: ["Chambres climatisées", "Repas sur place", "WiFi"],
    bikerAmenities: [
      "Propriétaires motards",
      "Roadbooks détaillés",
      "Circuits en étoile",
      "Conseils personnalisés"
    ],
    contact: {
      phone: "04 95 34 36 68 / 06 23 21 33 14",
      email: "resa@maisondelavigne.com",
      website: "https://maisondelavigne.com"
    },
    address: "Route de Venzolasca, 20215 Venzolasca"
  },
  {
    id: "gites-o-fil-de-leau-francardo",
    name: "Gîtes O Fil de l’Eau (Francardo)",
    type: "gite",
    description:
      "Complexe avec cinq chambres, deux appartements et un lodge, piscine chauffée et spa. Pour motards: parking fermé avec télécommande, carports réservés, dépôt de bagages possible, roadbooks GPX, bar, espace détente, petits déjeuners et repas.",
    location: "Omessa / Francardo",
    region: "corte",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    priceRange: "70€ - 180€",
    rating: 4.7,
    amenities: ["Piscine chauffée", "Spa", "Bar", "Espace détente"],
    bikerAmenities: [
      "Parking fermé (télécommande)",
      "Carports motos réservés",
      "Dépôt de bagages",
      "Roadbooks GPX"
    ],
    contact: {
      phone: "+33 6 06 63 97 41",
      website: "https://gitesofildeleaufrancardo.com"
    },
    address: "273 Carrughju Dessus, 20236 Omessa"
  },
  {
    id: "couvent-saint-hyacinthe",
    name: "Couvent Saint Hyacinthe (gîte d’étape)",
    type: "gite",
    description:
      "Ancien couvent transformé en gîte d’étape accueillant motards, cyclistes et randonneurs. Dortoirs/chambres, restauration, espace pour laver et entretenir les motos, machine à laver, outils mécaniques, grand parking.",
    location: "Santa Maria di Lota",
    region: "bastia",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    priceRange: "30€ - 80€",
    rating: 4.4,
    amenities: ["Dortoirs et chambres", "Restauration", "Machine à laver"],
    bikerAmenities: [
      "Espace lavage/entretien moto",
      "Outils mécaniques",
      "Grand parking"
    ],
    contact: {
      phone: "+33 4 95 33 28 29 / +33 6 23 20 00 66",
      email: "mshcorse@gmail.com",
      website: "https://couventsainthyacinthe.corsica"
    },
    address: "Lieu dit Miomo, 20200 Santa Maria di Lota"
  }
];

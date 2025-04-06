
import { Accommodation } from '../../types';

export const corteGites: Accommodation[] = [
  {
    id: "gite1",
    name: "Gîtes O Fil de l'Eau",
    type: "gite",
    location: "Omessa",
    region: "corte",
    description: "Gîtes au bord du Golo, idéaux pour les motards cherchant un point de chute reposant. Situés dans un cadre naturel préservé, ces gîtes offrent un accueil chaleureux et des conseils personnalisés pour explorer la région.",
    priceRange: "60€ - 120€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_1280.jpg",
    amenities: ["Au bord de l'eau", "Wifi gratuit", "Parking"],
    bikerAmenities: ["Garage fermé", "Outillage de base", "Compresseur", "Propriétaires motards"],
    contact: {
      phone: "+33 6 06 63 97 41",
      website: "gitesofildeleaufrancardo.com"
    },
    address: "Lieu-dit U Ponte, 20236 Omessa",
    latitude: 42.3825,
    longitude: 9.1597
  }
];

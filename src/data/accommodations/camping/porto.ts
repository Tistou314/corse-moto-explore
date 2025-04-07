
import { Accommodation } from '../types';

export const portoCampings: Accommodation[] = [
  {
    id: "camp-porto1",
    name: "Camping Les Oliviers",
    type: "camping",
    location: "Porto/Ota",
    region: "porto",
    description: "Camping 4★ bien équipé dominant le golfe de Porto. Accueil chaleureux et convivial garanti aux motards. Emplacements ombragés en restanques, rivière accessible pour se rafraîchir, piscine chauffée et espace bien-être. Situé à 2 minutes de la plage de Porto et des calanques de Piana toutes proches, point de chute idéal pour explorer la côte ouest. Stationnement aisé des motos sur le terrain (allées carrossables).",
    priceRange: "22€ - 90€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2015/09/18/11/47/camping-945422_1280.jpg",
    amenities: ["Vue golfe", "Piscine chauffée", "Rivière", "Espace bien-être"],
    bikerAmenities: ["Accueil motards", "Stationnement facile", "Proche calanques"],
    contact: {
      phone: "+33 4 95 26 14 49",
      email: "lesoliviersporto@wanadoo.fr",
      website: "camping-oliviers-porto.com"
    },
    bookingLink: "https://www.camping-oliviers-porto.com",
    address: "Pont de Porto, 20150 Ota",
    latitude: 42.26191,
    longitude: 8.71033
  }
];

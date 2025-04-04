
import { Accommodation } from './types';

export const bastiaAccommodations: Accommodation[] = [
  {
    id: "acc1",
    name: "Hôtel Les Voyageurs",
    type: "hotel",
    location: "Bastia",
    region: "bastia",
    description: "Hôtel 3★ familial situé en centre-ville de Bastia, à 5 min à pied du port (idéal en arrivant en ferry). Il dispose d'un parking fermé et gardé (en supplément) pour les motos et voitures. Emplacement pratique pour explorer le Cap Corse ou rejoindre le ferry.",
    priceRange: "80€ - 120€",
    rating: 8.9,
    image: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "TV", "Ascenseur"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques"],
    contact: {
      phone: "+33 4 95 34 90 80",
      email: "lesvoyageurshotel@gmail.com",
      website: "hotel-lesvoyageurs-bastia.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/les-voyageurs-bastia.fr.html",
    address: "9 avenue Maréchal Sebastiani, 20200 Bastia"
  },
  {
    id: "acc21",
    name: "Domaine de Casabianca",
    type: "gite",
    location: "Bastia",
    region: "bastia",
    description: "Cette ancienne bergerie rénovée offre un cadre authentique au pied du Cap Corse. Les propriétaires, eux-mêmes motards, vous guideront pour découvrir les plus beaux parcours du nord de l'île et les villages perchés.",
    priceRange: "80€ - 120€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg",
    amenities: ["Jardin", "Terrasse", "Cuisine équipée", "Barbecue"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"]
  }
];

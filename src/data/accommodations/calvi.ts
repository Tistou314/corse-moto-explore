
import { Accommodation } from './types';

export const calviAccommodations: Accommodation[] = [
  {
    id: "acc12",
    name: "Le Saint Erasme",
    type: "hotel",
    location: "Calvi",
    region: "calvi",
    description: "Hôtel 3★ éco-responsable sur la côte rocheuse de Calvi, à 10 min à pied du centre. Dispose d'un parking privé (places limitées, payantes – réservation conseillée). Les motos peuvent y être stationnées en sécurité la nuit (parking fermé la nuit). Point de vue exceptionnel sur la mer et la citadelle toute proche. Belle piscine panoramique chauffée pour se rafraîchir en fin de journée. Ascenseur et réception 24h/24.",
    priceRange: "95€ - 180€",
    rating: 8.9,
    image: "https://cdn.pixabay.com/photo/2020/01/25/18/17/calvi-4792680_1280.jpg",
    amenities: ["Piscine panoramique chauffée", "Vue mer", "Climatisation", "Wifi gratuit", "Ascenseur", "Réception 24h/24"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 65 04 50",
      email: "info@hotel-st-erasme.com",
      website: "hotel-st-erasme.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/le-saint-erasme-calvi.fr.html",
    address: "Route d'Ajaccio (par la corniche), 20260 Calvi"
  },
  {
    id: "acc13",
    name: "Hôtel Il Tramonto",
    type: "hotel",
    location: "Calvi",
    region: "calvi",
    description: "Petit hôtel 2★ familial récemment rénové, célèbre pour sa vue sur les couchers de soleil (comme son nom l'indique). Situé en bord de route côtière Calvi–Porto, il est facile d'accès en moto et possède un parking gratuit pour les clients. Ambiance conviviale et simple, idéale pour une halte économique à Calvi. Chambres climatisées, certaines avec balcon sur la mer. À seulement 500 m du centre-ville et du port de Calvi.",
    priceRange: "60€ - 95€",
    rating: 8.2,
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/42/beach-1846009_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "Vue mer"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 65 04 17",
      email: "il.tramonto.calvi@gmail.com",
      website: "hoteliltramonto.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/il-tramonto.fr.html",
    address: "Route de Porto (par la côte), 20260 Calvi"
  },
  {
    id: "acc14",
    name: "Hôtel Liberata & Spa",
    type: "hotel",
    location: "L'Île-Rousse",
    region: "calvi",
    description: "Boutique-hôtel 4★ de charme en front de mer à L'Île-Rousse, à deux pas du centre-ville et du port de ferry. Il offre un parking privé gratuit à ses clients, précieux dans cette station balnéaire. Seulement 16 chambres, décor Art Nouveau, et un spa sur place pour se relaxer après la route. Plage et restaurants accessibles à pied en 1 min. Idéal comme étape grand confort dans la région de la Balagne, avant d'attaquer les virages vers Calvi ou le désert des Agriates.",
    priceRange: "150€ - 350€",
    rating: 9.4,
    image: "https://cdn.pixabay.com/photo/2016/03/28/09/35/beach-1285144_1280.jpg",
    amenities: ["Spa", "Climatisation", "Wifi gratuit", "Front de mer", "Décor Art Nouveau"],
    bikerAmenities: ["Parking sécurisé"],
    contact: {
      phone: "+33 4 95 62 03 62",
      email: "hotel.liberata@orange.fr",
      website: "hotel-liberata.fr"
    },
    bookingLink: "https://www.booking.com/hotel/fr/liberata.fr.html",
    address: "Boulevard Charles-Marie Savelli, 20220 L'Île-Rousse"
  },
  {
    id: "acc20",
    name: "Hôtel Biker's Paradise",
    type: "hotel",
    location: "Calvi",
    region: "calvi",
    description: "Cet hôtel conçu spécialement pour les motards offre tout ce dont vous avez besoin. Des chambres spacieuses pour ranger votre équipement, un garage sécurisé avec station de lavage et une équipe qui connaît les meilleurs itinéraires de la Balagne.",
    priceRange: "100€ - 150€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
    amenities: ["Restaurant", "Bar", "Piscine", "Terrasse panoramique"],
    bikerAmenities: ["Parking sécurisé", "Station de lavage", "Atelier de réparation", "Itinéraires moto"]
  }
];

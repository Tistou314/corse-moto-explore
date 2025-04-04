
import { Accommodation } from '../types';

export const portovecchioGites: Accommodation[] = [
  {
    id: "gite10",
    name: "Gîte A Funtana",
    type: "gite",
    location: "Zonza",
    region: "portovecchio",
    description: "Gîte d'étape communal idéalement placé au pied des Aiguilles de Bavella (spots moto réputés). Dortoirs et chambres simples. Garage fermé partagé (12 motos max) et atelier de fortune (leviers, clés, etc. fournis par le gardien). Sèche-chaussures électrique utile en cas de pluie en montagne. Point de départ de balades vers l'Alta Rocca, l'Ospédale et la côte est.",
    priceRange: "30€ - 50€",
    rating: 4.0,
    image: "https://cdn.pixabay.com/photo/2016/04/15/11/46/wilderness-1330743_1280.jpg",
    amenities: ["Cuisine commune", "Dortoirs", "Repas du soir", "Au pied de Bavella"],
    bikerAmenities: ["Garage fermé partagé", "Atelier équipé", "Sèche-équipement"],
    address: "Hameau de Zonza, 20124 Zonza",
    latitude: 41.7386,
    longitude: 9.1763
  },
  {
    id: "gite15",
    name: "Sole e Monti",
    type: "gite",
    location: "Quenza",
    region: "portovecchio",
    description: "Petit hôtel familial également recommandé aux motards pour ses tarifs étape. Abri couvert disponible (ancienne remise à foin) pour une dizaine de motos. Situé entre Bavella et l'Alta Rocca, point stratégique pour rayonner sur toutes les petites routes alentour. Le patron, ancien enduriste, connaît parfaitement les pistes et routes du secteur. Possibilité de laver les motos au jet.",
    priceRange: "55€ - 90€",
    rating: 4.4,
    image: "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
    amenities: ["Restaurant", "Table d'hôtes", "Terrasse", "Calme"],
    bikerAmenities: ["Abri couvert", "Station de lavage", "Propriétaire motard", "Conseils itinéraires"],
    contact: {
      phone: "+33 4 95 78 62 62",
      website: "solemonti.com"
    },
    address: "Village de Quenza, 20122",
    latitude: 41.7682,
    longitude: 9.1349
  }
];


import { Accommodation } from '../../types';

export const portovecchioGites: Accommodation[] = [
  {
    id: "gite8",
    name: "A Pineta",
    type: "gite",
    location: "Lecci",
    region: "portovecchio",
    description: "Gîte moderne entouré de pins, à 10 minutes des plages de Saint-Cyprien. Parking ombragé et sécurisé pour les motos. Piscine privée. Proche des plus belles plages du sud de la Corse et de la ville animée de Porto-Vecchio. Les propriétaires sont motards et partagent volontiers leurs connaissances des routes locales.",
    priceRange: "90€ - 140€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2017/08/30/12/08/villa-2696715_1280.jpg",
    amenities: ["Piscine privée", "Climatisation", "Jardin", "Terrasse"],
    bikerAmenities: ["Parking ombragé", "Propriétaires motards", "Proche plages"],
    contact: {
      phone: "+33 6 44 55 88 99",
      website: "apineta-corse.com"
    },
    address: "Route de Saint-Cyprien, 20144 Lecci",
    latitude: 41.6756,
    longitude: 9.3403
  },
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
    contact: {
      phone: "+33 4 95 78 68 32",
      website: "http://www.gitecommunal-zonza.fr"
    },
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
  },
  {
    id: "gite17",
    name: "Domaine de Sonia",
    type: "chambre",
    location: "Porto-Vecchio",
    region: "portovecchio",
    description: "Hébergement de charme près de Porto-Vecchio, offrant un cadre paisible et élégant. Idéal pour les motards à la recherche de confort et de tranquillité.",
    priceRange: "80€ - 120€",
    rating: 4.6,
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/reception-2165756_1280.jpg",
    amenities: ["Vue panoramique", "Terrasse", "Petit-déjeuner"],
    bikerAmenities: ["Parking moto", "Conseils d'itinéraires"],
    contact: {
      phone: "+33 6 71 08 84 09",
      website: "https://domainedesonia.com/"
    },
    address: "U pirellu résidence, hameau de, Route de Palombaggia, 20137 Porto-Vecchio",
    latitude: 41.5886842,
    longitude: 9.3289101
  }
];

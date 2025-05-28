
import { Accommodation } from './types';

export const calviAccommodations: Accommodation[] = [
  {
    id: "calvi1",
    name: "Le Grillon",
    type: "hotel",
    location: "L'Île-Rousse",
    region: "calvi",
    description: "Hôtel familial situé au cœur de L'Île-Rousse, à seulement 150 mètres de la plage. Parfait pour les motards qui souhaitent explorer la région de la Balagne tout en profitant d'un cadre urbain agréable.",
    priceRange: "50€ - 100€",
    rating: 4.1,
    image: "/lovable-uploads/022ab12c-1e1f-4cf5-b98e-71c905a7d42c.png",
    amenities: ["Climatisation", "Wifi gratuit", "Proximité plage", "Bar-restaurant", "Centre-ville"],
    bikerAmenities: ["Garage motos fermé", "Parking privé sécurisé pour motos", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 60 43 69",
      website: "https://www.hotelgrillon.com/"
    },
    address: "10 Avenue Paul-Doumer, 20220 L'Île-Rousse",
    latitude: 42.63244,
    longitude: 8.94078
  },
  {
    id: "calvi2",
    name: "Corsica Paddock",
    type: "gite",
    location: "Castellare-di-Casinca",
    region: "calvi",
    description: "Véritable relais motard situé dans la Plaine Orientale, le Corsica Paddock offre un accueil chaleureux aux motards avec des équipements adaptés à leurs besoins, dont un garage équipé.",
    priceRange: "60€ - 90€",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=60",
    amenities: ["Chambres d'hôtes confortables", "Piscine", "Table d'hôtes le soir", "Wifi"],
    bikerAmenities: ["Garage motos équipé", "Atelier et outillage", "Séchage d'équipement"],
    contact: {
      phone: "+33 6 70 80 90 10",
      website: "http://www.corsicapaddock.com"
    },
    address: "Lieu-dit U Paddulu, 20212 Castellare-di-Casinca",
    latitude: 42.47,
    longitude: 9.45
  }
];

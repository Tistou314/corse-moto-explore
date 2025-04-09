
import { Accommodation } from './types';

export const calviAccommodations: Accommodation[] = [
  {
    id: "calvi1",
    name: "Le Grillon",
    type: "hotel",
    location: "L'Île-Rousse",
    region: "calvi",
    description: "Charmant hôtel familial situé au cœur de L'Île-Rousse, à quelques pas de la plage. Parfait pour les motards qui souhaitent explorer la région de la Balagne tout en profitant d'un cadre urbain agréable.",
    priceRange: "90€ - 170€",
    rating: 4.1,
    image: "/lovable-uploads/022ab12c-1e1f-4cf5-b98e-71c905a7d42c.png",
    amenities: ["Climatisation", "Wifi gratuit", "Proximité plage", "Restaurant", "Bar"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 60 43 69",
      website: "https://www.hotelgrillon.com/"
    },
    address: "10 Av. Paul Doumer, 20220 L'Île-Rousse, France",
    latitude: 42.6324162,
    longitude: 8.9407538
  }
];


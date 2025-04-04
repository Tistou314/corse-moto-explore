
import { Accommodation } from './types';

export const ajaccioAccommodations: Accommodation[] = [
  {
    id: "acc8",
    name: "Best Western Plus Ajaccio Amirauté",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Grand hôtel 4★ moderne en bord de mer à Ajaccio. Parking privé gratuit et garage fermé pour motos sur place, avec accès direct à l'hôtel. Idéal pour garer en sécurité sa moto avant de visiter la ville (centre à 5 min). Piscine extérieure chauffée, jacuzzi à 30 °C toute l'année – parfait pour détendre les muscles après les km. Réception 24/7 et bar ouvert en continu, pratique pour les arrivées tardives en ferry.",
    priceRange: "100€ - 200€",
    rating: 8.8,
    image: "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_1280.jpg",
    amenities: ["Piscine chauffée", "Jacuzzi", "Bar", "Climatisation", "Restaurant", "Réception 24h/24"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé"],
    contact: {
      phone: "+33 4 95 27 22 57",
      email: "contactajaccio@corsica-hotels.fr",
      website: "ajaccio.corsica-hotels.fr"
    },
    bookingLink: "https://www.bestwestern.fr/fr/hotel-Ajaccio-Best-Western-Plus-Ajaccio-Amiraute-93798",
    address: "20 Boulevard Georges Pompidou, 20090 Ajaccio"
  },
  {
    id: "acc9",
    name: "Hôtel Punta e Mare",
    type: "hotel",
    location: "Cargèse",
    region: "ajaccio",
    description: "Relais Motards 2★ à l'entrée de Cargèse, à 100 m du centre du village. L'établissement propose un parking privé sécurisé sur place et même un garage fermé pour vélos/motos. Sa situation « entre mer et montagne » est idéale : on rejoint facilement les calanques de Piana au nord ou Ajaccio au sud. Chambres climatisées et quelques studios/appartements pratiques pour les groupes. Gérant motard offrant volontiers des conseils de balades locales.",
    priceRange: "65€ - 95€",
    rating: 9.2,
    image: "https://cdn.pixabay.com/photo/2018/08/08/13/34/housing-development-3591293_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "Studios disponibles"],
    bikerAmenities: ["Parking sécurisé", "Garage fermé", "Itinéraires moto", "Propriétaires motards"],
    contact: {
      phone: "+33 6 89 72 41 81",
      email: "punta.e.mare@wanadoo.fr",
      website: "locations-cargese.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/punta-e-mare.fr.html",
    address: "Route de Paomia, 20130 Cargèse"
  },
  {
    id: "acc17",
    name: "Hôtel Marina Corsica",
    type: "hotel",
    location: "Ajaccio",
    region: "ajaccio",
    description: "Cet hôtel moderne offre une vue imprenable sur la baie d'Ajaccio et dispose d'un garage sécurisé pour les motos. Le personnel de l'hôtel est familier avec les besoins des motards et propose des cartes détaillées des itinéraires les plus pittoresques de la région.",
    priceRange: "120€ - 200€",
    rating: 4.5,
    image: "https://cdn.pixabay.com/photo/2017/03/22/17/39/reception-2165756_1280.jpg",
    amenities: ["Piscine", "Restaurant", "Bar", "Wifi gratuit", "Climatisation"],
    bikerAmenities: ["Parking sécurisé", "Itinéraires moto", "Atelier de réparation"]
  }
];

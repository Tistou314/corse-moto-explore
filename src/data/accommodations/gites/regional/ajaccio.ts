
import { Accommodation } from '../../types';

export const ajaccioGites: Accommodation[] = [
  {
    id: "gite2",
    name: "Casa d'Omigna",
    type: "chambre",
    location: "Cargèse",
    region: "ajaccio",
    description: "Gîte et chambres d'hôtes avec vue mer, tenu par un motard passionné. Garage fermé mis à disposition gratuitement pour les motos. Atelier équipé pour petites réparations. Hébergement de charme (3 épis) avec table d'hôtes sur demande le soir. Situé à proximité des splendides plages et calanques de Piana.",
    priceRange: "75€ - 110€",
    rating: 4.8,
    image: "https://cdn.pixabay.com/photo/2017/09/09/17/08/swimming-pool-2732985_1280.jpg",
    amenities: ["Vue mer", "Table d'hôtes", "Climatisation", "Terrasse"],
    bikerAmenities: ["Garage fermé", "Atelier équipé", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 20 50 36 47",
      website: "casadomigna.com"
    },
    address: "Route du bord de mer, lieu-dit Omigna, 20130 Cargèse",
    latitude: 42.1368,
    longitude: 8.5951
  },
  {
    id: "gite3",
    name: "Chalet Zen",
    type: "chambre",
    location: "Peri",
    region: "ajaccio",
    description: "Chambres d'hôtes au calme dans l'arrière-pays ajaccien, aménagées dans un chalet en bois. Parking privé sécurisé dans la propriété (portail fermé la nuit). Espace bien-être avec jacuzzi – idéal pour se détendre après une journée de moto. Propriétaires aux petits soins (boissons fraîches offertes à l'arrivée des motards).",
    priceRange: "65€ - 95€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813636_1280.jpg",
    amenities: ["Jacuzzi", "Parking privé", "Calme", "Petit-déjeuner inclus"],
    bikerAmenities: ["Parking sécurisé", "Boisson de bienvenue"],
    contact: {
      phone: "+33 6 23 14 89 00",
      website: "chalet-zen-chambre-d-hote-corse-moto-aeroport-ajaccio.com"
    },
    address: "Hameau de Péri, 20167 Peri",
    latitude: 41.9775,
    longitude: 8.8188
  }
];

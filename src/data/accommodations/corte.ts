
import { Accommodation } from './types';

export const corteAccommodations: Accommodation[] = [
  {
    id: "acc15",
    name: "Hôtel Duc de Padoue",
    type: "hotel",
    location: "Corte",
    region: "corte",
    description: "Charmant hôtel 3★ au cœur de Corte (Centre-Corse), géré familialement. Bien qu'en plein centre historique, il propose un garage abrité pour motos/vélos (places limitées) ainsi qu'un parking privé payant à proximité. Le personnel se plie en quatre pour les voyageurs, et pourra indiquer un lieu pour laver ou bricoler sa moto si besoin. Emplacement idéal pour rayonner dans les gorges de la Restonica (à 10 min) ou partir vers les cols de la Scala di Santa Regina et Vergio.",
    priceRange: "75€ - 130€",
    rating: 8.4,
    image: "https://cdn.pixabay.com/photo/2016/10/28/21/16/hotel-1779258_1280.jpg",
    amenities: ["Climatisation", "Wifi gratuit", "Centre historique"],
    bikerAmenities: ["Garage fermé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 46 01 37",
      email: "info@ducdepadoue.com",
      website: "ducdepadoue.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/duc-de-padoue.fr.html",
    address: "2 Place Padoue, 20250 Corte"
  },
  {
    id: "acc16",
    name: "Autour du Hamac",
    type: "chambre",
    location: "Moltifao",
    region: "corte",
    description: "Relais Motards convivial, cette maison d'hôtes 3 épis (ouverte d'avril à oct.) est située aux portes des gorges de l'Asco, dans un petit village authentique du nord de la Corse. Grand jardin clôturé avec espace pour garer plusieurs motos en sécurité (parking privé gratuit). Les propriétaires, eux-mêmes motards, proposent table d'hôtes le soir et conseils de balades. Emplacement central : à mi-chemin entre les plages de Balagne (Île-Rousse à ~30 min) et les montagnes du Cinto. Une petite piscine et des hamacs permettent de se détendre après la route.",
    priceRange: "70€ - 110€",
    rating: 9.2,
    image: "https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg",
    amenities: ["Piscine", "Table d'hôtes", "Jardin", "Hamacs"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Propriétaires motards", "Itinéraires moto"],
    contact: {
      phone: "+33 6 72 78 95 73",
      email: "autourduhamac@gmail.com",
      website: "autourduhamac.fr"
    },
    bookingLink: "https://www.autourduhamac.fr",
    address: "Route d'Asco, 20218 Moltifao"
  },
  {
    id: "acc18",
    name: "Gîte du Maquis",
    type: "gite",
    location: "Corte",
    region: "corte",
    description: "Niché au cœur du Parc Naturel Régional de Corse, ce gîte authentique est tenu par un couple passionné de moto. Ils partagent volontiers leur connaissance des routes montagneuses les moins fréquentées et proposent des petits-déjeuners copieux parfaits avant une journée de route.",
    priceRange: "70€ - 90€",
    rating: 4.7,
    image: "https://cdn.pixabay.com/photo/2016/10/29/20/15/cottage-1781760_1280.jpg",
    amenities: ["Petit-déjeuner inclus", "Terrasse", "Jardin", "Wifi"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"]
  },
  {
    id: "acc22",
    name: "Camping L'Arinella",
    type: "camping",
    location: "Corte",
    region: "corte",
    description: "Idéalement situé au centre de la Corse, ce camping est parfait comme base pour explorer l'île. Des emplacements réservés aux motards sont disponibles à l'ombre des pins, avec un local fermé pour le matériel.",
    priceRange: "20€ - 35€",
    rating: 4.3,
    image: "https://cdn.pixabay.com/photo/2016/02/18/22/16/tent-1208201_1280.jpg",
    amenities: ["Piscine naturelle", "Restaurant", "Épicerie", "Animations"],
    bikerAmenities: ["Espace motards dédié", "Local sécurisé", "Proche routes panoramiques"]
  }
];

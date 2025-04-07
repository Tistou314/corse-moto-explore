
import { Accommodation } from './types';

export const proprianoAccommodations: Accommodation[] = [
  {
    id: "propriano1",
    name: "Villa Les Orangers",
    type: "hotel",
    location: "Olmeto",
    region: "propriano",
    description: "Relais Motards 3★ niché dans une demeure du XIXᵉ siècle à Olmeto, sur les hauteurs du golfe du Valinco (Propriano). L'hôtel dispose d'un parking privé gratuit et même d'un espace pouvant accueillir vans ou remorques. Emplacement stratégique pour explorer le sud-ouest : plages de Porto Pollo à 10 min, superbes virages du col de Saint-Eustache vers Zonza, etc. Piscine extérieure chauffée et restaurant sur place.",
    priceRange: "85€ - 140€",
    rating: 9.0,
    image: "https://cdn.pixabay.com/photo/2019/07/23/14/15/architecture-4357403_1280.jpg",
    amenities: ["Piscine chauffée", "Restaurant", "Wifi gratuit", "Vue panoramique"],
    bikerAmenities: ["Parking sécurisé", "Proche routes panoramiques", "Itinéraires moto"],
    contact: {
      phone: "+33 4 95 77 25 79",
      email: "hotelvlo.2a@gmail.com",
      website: "villa-lesorangers-olmeto.com"
    },
    bookingLink: "https://www.booking.com/hotel/fr/villa-les-orangers-olmeto.fr.html",
    address: "Place Foata, 20113 Olmeto"
  }
];

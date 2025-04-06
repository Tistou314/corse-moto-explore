
import { Accommodation } from '../types';

export const ghisonacciaCampings: Accommodation[] = [
  {
    id: "camp6",
    name: "Camping Europa Beach",
    type: "camping",
    location: "Sorbo-Ocagnano",
    region: "ghisonaccia",
    description: "Petit camping en bord de mer donnant sur une plage de sable fin. Accès direct plage, bar, boulangerie et supérette sur place. Billard, pétanque, ping-pong en libre accès. Accueil spécial motards : emplacements tentes ombragés où l'on peut garer sa moto juste à côté. Location de bungalows également possible pour plus de confort. Parking gratuit pour motos.",
    priceRange: "15€ - 60€",
    rating: 3.9,
    image: "https://cdn.pixabay.com/photo/2016/11/21/16/36/motorhome-1846328_1280.jpg",
    amenities: ["Accès plage", "Bar", "Boulangerie", "Supérette"],
    bikerAmenities: ["Emplacements moto à côté des tentes", "Parking gratuit", "Bungalows"],
    contact: {
      phone: "+33 7 88 10 77 25",
      website: "http://camping-europabeach.com"
    },
    bookingLink: "https://www.camping.info/fr/europa-beach",
    address: "Route de Pinarello, 20213 Sorbo-Ocagnano",
    latitude: 42.48728,
    longitude: 9.52434
  }
];

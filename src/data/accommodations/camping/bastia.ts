
import { Accommodation } from '../types';

export const bastiaCampings: Accommodation[] = [
  {
    id: "camp-bastia1",
    name: "Camping La Pietra",
    type: "camping",
    location: "Pietracorbara",
    region: "bastia",
    description: "Camping 3★ très bien situé en bord de mer à la Marine de Pietracorbara. Accès direct à la plage, piscine et restaurant sur place. Emplacements spacieux (126 places) sous les arbres. Vigil de nuit assurant la sécurité du site, appréciable pour les motos stationnées. Location de bungalows et mobil-homes possible.",
    priceRange: "20€ - 80€",
    rating: 4.1,
    image: "https://cdn.pixabay.com/photo/2021/09/19/07/56/caravan-6636964_1280.jpg",
    amenities: ["Accès plage", "Piscine", "Restaurant", "Emplacements ombragés"],
    bikerAmenities: ["Vigile de nuit", "Stationnement sécurisé"],
    contact: {
      phone: "+33 4 95 35 27 49",
      website: "la-pietra.com"
    },
    bookingLink: "https://www.la-pietra.com",
    address: "Lieu-dit Presa, 20233 Pietracorbara",
    latitude: 42.82,
    longitude: 9.45
  },
  {
    id: "camp-bastia2",
    name: "Camping San Damiano",
    type: "camping",
    location: "Biguglia",
    region: "bastia",
    description: "Grand camping 4★ en bord de plage, avec 300 emplacements et 150 bungalows. Supérette 8àHuit et restaurant-pizzeria sur place. Accès direct à la plage de la Marana. Infrastructure moderne (piscine, salle de sport). Les motos sont les bienvenues : plusieurs voyageurs ont classé San Damiano « adapté à la moto ». Parking intérieur.",
    priceRange: "24€ - 90€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2020/06/22/10/40/caravan-5328597_1280.jpg",
    amenities: ["Accès plage", "Piscine", "Restaurant", "Supérette", "Salle de sport"],
    bikerAmenities: ["Adapté à la moto", "Parking intérieur"],
    contact: {
      phone: "+33 4 95 33 68 02",
      website: "campingsandamiano.com"
    },
    bookingLink: "https://www.campingsandamiano.com",
    address: "Lido de la Marana, 20620 Biguglia",
    latitude: 42.62,
    longitude: 9.481
  }
];

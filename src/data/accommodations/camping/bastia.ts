
import { Accommodation } from '../types';

export const bastiaCampings: Accommodation[] = [
  {
    id: "camp-bastia1",
    name: "Camping La Pietra",
    type: "camping",
    location: "Pietracorbara",
    region: "bastia",
    description: "Camping 3★ très bien situé en bord de mer à la Marine de Pietracorbara sur la côte Est du Cap Corse. Accès direct à la plage, restaurant pizzeria sur place. Emplacements spacieux sous les arbres. Accueil spécialisé des motards avec stationnement sécurisé.",
    priceRange: "20€ - 80€",
    rating: 4.1,
    image: "https://cdn.pixabay.com/photo/2021/09/19/07/56/caravan-6636964_1280.jpg",
    amenities: ["Accès plage", "Restaurant pizzeria", "Emplacements ombragés", "Wifi zones communes"],
    bikerAmenities: ["Accueil motards", "Parking gratuit", "Côte Est Cap Corse"],
    contact: {
      phone: "+33 4 95 35 27 49",
      website: "la-pietra.com"
    },
    bookingLink: "https://www.la-pietra.com",
    address: "Lieu-dit A Marina, 20233 Pietracorbara",
    latitude: 42.83,
    longitude: 9.45
  },
  {
    id: "camp-bastia2",
    name: "Camping San Damiano",
    type: "camping",
    location: "Biguglia",
    region: "bastia",
    description: "Grand camping 4★ en bord de plage, avec 300 emplacements et 150 bungalows. Supérette 8àHuit et restaurant-pizzeria sur place. Accès direct à la plage de la Marana. Infrastructure moderne (piscine, salle de sport). Parking surveillé la nuit pour la sécurité des motos.",
    priceRange: "24€ - 90€",
    rating: 4.2,
    image: "https://cdn.pixabay.com/photo/2020/06/22/10/40/caravan-5328597_1280.jpg",
    amenities: ["Accès plage", "Piscine", "Restaurant", "Supérette", "Salle de sport"],
    bikerAmenities: ["Parking surveillé", "Adapté à la moto"],
    contact: {
      phone: "+33 4 95 33 68 02",
      website: "campingsandamiano.com"
    },
    bookingLink: "https://www.campingsandamiano.com",
    address: "Lido de la Marana, 20620 Biguglia",
    latitude: 42.61,
    longitude: 9.50
  }
];

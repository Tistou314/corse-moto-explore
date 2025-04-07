
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Hotel, MapPin, ShieldCheck, Clock, Bike } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface AccommodationTypeInfo {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
}

const accommodationTypesInfo: AccommodationTypeInfo[] = [
  {
    title: 'Hôtels moto-friendly',
    description: 'Hébergements proposant des services adaptés aux motards : parking sécurisé, atelier de réparation, lavage de moto.',
    icon: Hotel,
    image: '/lovable-uploads/2120b253-8c47-4a6f-8c9c-7b6cb386889b.png'
  },
  {
    title: 'Gîtes et chambres d\'hôtes',
    description: 'Hébergements authentiques offrant un accueil chaleureux et des conseils locaux pour les motards.',
    icon: MapPin,
    image: '/lovable-uploads/0e248deb-e0c7-4afb-b4fe-2dfdef43fa71.png'
  },
  {
    title: 'Campings pour motards',
    description: 'Emplacements spacieux, équipements adaptés et ambiance conviviale pour les voyageurs à moto.',
    icon: Bike,
    image: '/lovable-uploads/7510c501-c422-488c-8e85-d2b2ce36ff2c.png'
  },
  {
    title: 'Critères de sélection',
    description: 'Découvrez nos recommandations basées sur la sécurité, la proximité des routes, et l\'accueil des motards.',
    icon: ShieldCheck,
    image: '/lovable-uploads/62ada3d0-f81e-4c6c-a666-479d8f4e3f1f.png'
  },
  {
    title: 'Réservation et disponibilités',
    description: 'Conseils pour réserver votre hébergement en Corse, notamment pendant la haute saison.',
    icon: Clock,
    image: '/lovable-uploads/7c63f699-ad4b-4ddb-88fd-4d2dbb506352.png'
  }
];

const AccommodationTypeCards = () => {
  return (
    <>
      <Carousel className="w-full mb-12">
        <CarouselContent>
          {accommodationTypesInfo.map((type, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden">
                  {type.image && (
                    <div className="w-full h-48 overflow-hidden">
                      <AspectRatio ratio={16 / 9} className="bg-muted">
                        <img 
                          src={type.image} 
                          alt={type.title} 
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <type.icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {accommodationTypesInfo.map((type, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <type.icon className="w-8 h-8 text-primary" />
                <CardTitle>{type.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AccommodationTypeCards;

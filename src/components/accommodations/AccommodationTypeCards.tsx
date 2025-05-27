
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
import OptimizedImage from '@/components/ui/optimized-image';

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
    image: '/lovable-uploads/d9155718-b957-403e-8ede-ff4f0383aee0.png'
  },
  {
    title: 'Gîtes et chambres d\'hôtes',
    description: 'Hébergements authentiques offrant un accueil chaleureux et des conseils locaux pour les motards.',
    icon: MapPin,
    image: '/lovable-uploads/381bb3e5-8c88-48aa-8685-829520b4e247.png'
  },
  {
    title: 'Campings pour motards',
    description: 'Emplacements spacieux, équipements adaptés et ambiance conviviale pour les voyageurs à moto.',
    icon: Bike,
    image: '/lovable-uploads/5a4881ff-0af8-4998-81d1-f13d1fc1b7d1.png'
  },
  {
    title: 'Critères de sélection',
    description: 'Découvrez nos recommandations basées sur la sécurité, la proximité des routes, et l\'accueil des motards.',
    icon: ShieldCheck,
    image: '/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png'
  },
  {
    title: 'Réservation et disponibilités',
    description: 'Conseils pour réserver votre hébergement en Corse, notamment pendant la haute saison.',
    icon: Clock,
    image: '/lovable-uploads/8feaf7ab-0f70-42d5-9b80-fbbcf2f96595.png'
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
                <Card className="overflow-hidden bg-white hover:shadow-lg transition-shadow">
                  {type.image && (
                    <div className="w-full h-48 overflow-hidden">
                      <AspectRatio ratio={16 / 9} className="bg-corsica-pearl">
                        <OptimizedImage 
                          src={type.image} 
                          alt={type.title} 
                          className="object-cover w-full h-full"
                          priority={index < 2}
                        />
                      </AspectRatio>
                    </div>
                  )}
                  <CardHeader className="bg-corsica-azure text-white">
                    <div className="flex items-center space-x-4">
                      <type.icon className="w-6 h-6 text-white" />
                      <CardTitle className="text-lg text-white">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="text-corsica-charcoal">{type.description}</p>
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
          <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-corsica-azure/20">
            <CardHeader className="bg-corsica-azure text-white">
              <div className="flex items-center space-x-4">
                <type.icon className="w-8 h-8 text-white" />
                <CardTitle className="text-white">{type.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="bg-white">
              <p className="text-corsica-charcoal">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AccommodationTypeCards;

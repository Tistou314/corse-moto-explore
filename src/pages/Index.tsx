
import { Link } from 'react-router-dom';
import { Bike, Map, Info, Compass, Clock, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ItineraryCard from '@/components/ItineraryCard';
import BlogPostCard from '@/components/BlogPostCard';
import MapPlaceholder from '@/components/MapPlaceholder';
import { itineraries } from '@/data/itineraires';
import { blogPosts } from '@/data/blogPosts';

const Index = () => {
  // Get featured itineraries (first 3)
  const featuredItineraries = itineraries.slice(0, 3);
  
  // Get recent blog posts (first 3)
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Découvrez la Corse à Moto"
        subtitle="Explorez les plus belles routes, parcours et paysages de l'Île de Beauté. Guides, itinéraires et conseils pour une aventure inoubliable."
        cta={{ text: "Découvrir les itinéraires", link: "/itineraires" }}
        imagePath="https://cdn.pixabay.com/photo/2019/09/03/08/28/corsica-4448629_1280.jpg"
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tout ce dont vous avez besoin pour votre aventure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Parcourez nos ressources complètes pour planifier votre voyage à moto en Corse,
              des itinéraires détaillés aux conseils pratiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Itinéraires détaillés"
              description="Des parcours soigneusement sélectionnés avec descriptions, difficultés et points d'intérêt."
              icon={Bike}
            />
            <FeatureCard 
              title="Carte interactive"
              description="Visualisez tous les itinéraires et points d'intérêt sur notre carte interactive."
              icon={Map}
            />
            <FeatureCard 
              title="Guide pratique"
              description="Conseils pour préparer votre voyage, traversée en ferry, hébergements recommandés."
              icon={Info}
            />
            <FeatureCard 
              title="Expériences authentiques"
              description="Découvrez les meilleurs spots et routes cachées connues des locaux."
              icon={Compass}
            />
            <FeatureCard 
              title="Meilleure saison"
              description="Informations sur les périodes optimales pour découvrir la Corse à moto."
              icon={Clock}
            />
            <FeatureCard 
              title="Conseils de sécurité"
              description="Recommandations pour rouler en toute sécurité sur les routes corses."
              icon={Shield}
            />
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Itinéraires populaires</h2>
              <p className="text-muted-foreground">
                Découvrez nos parcours les plus appréciés à travers l'île
              </p>
            </div>
            <Link to="/itineraires">
              <Button variant="outline" className="mt-4 md:mt-0">
                Voir tous les itinéraires
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItineraries.map((itinerary) => (
              <ItineraryCard 
                key={itinerary.id}
                id={itinerary.id}
                title={itinerary.title}
                description={itinerary.description}
                image={itinerary.image}
                duration={itinerary.duration}
                distance={itinerary.distance}
                difficulty={itinerary.difficulty}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Carte des itinéraires</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visualisez les parcours et points d'intérêt pour préparer votre aventure
            </p>
          </div>

          <div className="mb-8">
            <MapPlaceholder />
          </div>

          <div className="text-center">
            <Link to="/carte">
              <Button className="bg-corsica-blue hover:bg-corsica-blue/90">
                Explorer la carte interactive
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Conseils & Expériences</h2>
              <p className="text-muted-foreground">
                Articles, guides et récits pour enrichir votre voyage
              </p>
            </div>
            <Link to="/blog">
              <Button variant="outline" className="mt-4 md:mt-0">
                Voir tous les articles
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard 
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                author={post.author}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corsica-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt pour l'aventure ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Commencez à planifier votre voyage à moto en Corse dès maintenant
            et découvrez les routes les plus spectaculaires de l'île.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/itineraires">
              <Button size="lg" className="bg-white text-corsica-blue hover:bg-corsica-light">
                Explorer les itinéraires
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

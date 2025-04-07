
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/home/FeaturesSection';
import ItinerariesSection from '@/components/home/ItinerariesSection';
import BlogSection from '@/components/home/BlogSection';
import AccommodationsSection from '@/components/home/AccommodationsSection';
import CampingSection from '@/components/home/CampingSection';
import CTASection from '@/components/home/CTASection';
import GitesSection from '@/components/home/GitesSection';
import { itineraries } from '@/data/itineraries';
import { blogPosts } from '@/data/blogPosts';
import { accommodations } from '@/data/accommodations';
import { campingAccommodations } from '@/data/accommodations/camping';
import { gitesAccommodations } from '@/data/accommodations';

const Index = () => {
  // Get featured itineraries (first 3)
  const featuredItineraries = itineraries.slice(0, 3);
  
  // Get recent blog posts (first 3)
  const recentPosts = blogPosts.slice(0, 3);
  
  // Get featured accommodations (hotels, first 3)
  const featuredAccommodations = accommodations
    .filter(acc => acc.type === 'hotel')
    .slice(0, 3);
    
  // Get featured campings (first 3)
  const featuredCampings = campingAccommodations.slice(0, 3);
  
  // Get featured gites (first 3)
  const featuredGites = gitesAccommodations
    .filter(acc => acc.type === 'gite' || acc.type === 'chambre')
    .slice(0, 3);

  // Utiliser une image de route côtière spectaculaire
  const heroImage = "/lovable-uploads/6f930ced-66d6-4bfe-adb7-246828fa75a7.png";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with coastal road image */}
      <Hero 
        title="Découvrez la Corse à Moto"
        subtitle="Explorez les plus belles routes, parcours et paysages de l'Île de Beauté. Guides, itinéraires et conseils pour une aventure inoubliable."
        cta={{ text: "Découvrir les itinéraires", link: "/itineraires" }}
        imagePath={heroImage}
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Featured Itineraries */}
      <ItinerariesSection itineraries={featuredItineraries} />

      {/* Blog Posts */}
      <BlogSection posts={recentPosts} />

      {/* Accommodations Section */}
      <AccommodationsSection accommodations={featuredAccommodations} />
      
      {/* Gites and Chambres d'hotes Section */}
      <GitesSection gites={featuredGites} />
      
      {/* Camping Section */}
      <CampingSection campings={featuredCampings} />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;

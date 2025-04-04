
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/home/FeaturesSection';
import ItinerariesSection from '@/components/home/ItinerariesSection';
import MapSection from '@/components/home/MapSection';
import BlogSection from '@/components/home/BlogSection';
import AccommodationsSection from '@/components/home/AccommodationsSection';
import CampingSection from '@/components/home/CampingSection';
import CTASection from '@/components/home/CTASection';
import { itineraries } from '@/data/itineraires';
import { blogPosts } from '@/data/blogPosts';
import { accommodations } from '@/data/accommodations';
import { campingAccommodations } from '@/data/accommodations/camping';

const Index = () => {
  // Get featured itineraries (first 3)
  const featuredItineraries = itineraries.slice(0, 3);
  
  // Get recent blog posts (first 3)
  const recentPosts = blogPosts.slice(0, 3);
  
  // Get featured accommodations (hotels and gites, first 3)
  const featuredAccommodations = accommodations
    .filter(acc => acc.type !== 'camping')
    .slice(0, 3);
    
  // Get featured campings (first 3)
  const featuredCampings = campingAccommodations.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Découvrez la Corse à Moto"
        subtitle="Explorez les plus belles routes, parcours et paysages de l'Île de Beauté. Guides, itinéraires et conseils pour une aventure inoubliable."
        cta={{ text: "Découvrir les itinéraires", link: "/itineraires" }}
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Featured Itineraries */}
      <ItinerariesSection itineraries={featuredItineraries} />

      {/* Map Preview */}
      <MapSection />

      {/* Blog Posts */}
      <BlogSection posts={recentPosts} />

      {/* Accommodations Section */}
      <AccommodationsSection accommodations={featuredAccommodations} />
      
      {/* Camping Section */}
      <CampingSection campings={featuredCampings} />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;

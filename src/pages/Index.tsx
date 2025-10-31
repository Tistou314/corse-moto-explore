
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModernHero from '@/components/modern/ModernHero';
import ModernFeaturesSection from '@/components/modern/ModernFeaturesSection';
import ItinerariesSection from '@/components/home/ItinerariesSection';
import BlogSection from '@/components/home/BlogSection';
import AccommodationsSection from '@/components/home/AccommodationsSection';
import CampingSection from '@/components/home/CampingSection';
import CTASection from '@/components/home/CTASection';
import GitesSection from '@/components/home/GitesSection';
import MapSection from '@/components/home/MapSection'; 
import SchemaOrg from '@/components/seo/SchemaOrg';
import { itineraries } from '@/data/itineraries';
import { blogPosts } from '@/data/blogPosts';
import { accommodations, campingAccommodations, gitesAccommodations } from '@/data/accommodations';

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
    .filter(acc => acc.type === 'gite')
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>La Corse à Moto - Itinéraires, Hébergements & Guide Complet</title>
        <meta name="description" content="Découvrez les meilleurs itinéraires moto en Corse, des hébergements adaptés aux motards et un guide pratique complet pour explorer l'Île de Beauté en deux-roues." />
      </Helmet>
      
      <SchemaOrg type="website" />
      <SchemaOrg type="organization" />
      
      <Navbar />
      
      {/* Modern Hero Section with carousel */}
      <ModernHero />

      {/* Modern Features Section */}
      <ModernFeaturesSection />

      {/* Featured Itineraries */}
      <ItinerariesSection itineraries={featuredItineraries} />

      {/* Blog Posts */}
      <BlogSection posts={recentPosts} />
      
      {/* Map Section */}
      <MapSection />

      {/* Accommodations Section */}
      <AccommodationsSection accommodations={featuredAccommodations} />
      
      {/* Gites Section */}
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

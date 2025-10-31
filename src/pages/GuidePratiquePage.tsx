
import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import GuideTabs from '@/components/guide/GuideTabs';

const getPageMetadata = () => {
  return {
    title: "Guide Pratique Moto Corse - Conseils & Astuces Essentiels",
    description: "Conseils, astuces et informations essentielles pour préparer et profiter pleinement de votre voyage à moto en Corse. Équipement, sécurité, traversée et saisons."
  };
};

const GuidePratiquePage = () => {
  const metadata = getPageMetadata();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Guide Pratique"
        subtitle="Conseils, astuces et informations essentielles pour préparer et profiter pleinement de votre voyage à moto en Corse."
        imagePath="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?auto=format&fit=crop&q=80"
      />

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <GuideTabs />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GuidePratiquePage;

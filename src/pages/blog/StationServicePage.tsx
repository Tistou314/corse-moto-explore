
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import GasStationsPageHeader from '@/components/gas-stations/GasStationsPageHeader';
import FuellingTips from '@/components/gas-stations/FuellingTips';
import StationsListByRegion from '@/components/gas-stations/StationsListByRegion';
import BackToTopButton from '@/components/gas-stations/BackToTopButton';
import BackToBlogs from '@/components/gas-stations/BackToBlogs';
import { 
  bastiaStations,
  nebbioStations,
  ajaccioStations,
  balagneStations,
  extremeSudStations,
  centreStations,
  castagnacciaStations,
  valincoStations,
  luccianaBigugliaStations,
  plaineOrientaleStations
} from '@/data/gas-stations/regions';

const StationServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState('all');
  
  const regionMap = {
    'all': [...bastiaStations, ...nebbioStations, ...ajaccioStations, ...balagneStations, 
           ...extremeSudStations, ...centreStations, ...castagnacciaStations, ...valincoStations, 
           ...luccianaBigugliaStations, ...plaineOrientaleStations],
    'Bastia': bastiaStations,
    'Nebbio': nebbioStations,
    'Ajaccio': ajaccioStations,
    'Balagne': balagneStations,
    'Extrême Sud': extremeSudStations,
    'Centre': centreStations,
    'Castagniccia': castagnacciaStations,
    'Valinco': valincoStations,
    'Lucciana-Biguglia': luccianaBigugliaStations,
    'Plaine Orientale': plaineOrientaleStations
  };
  
  const displayedStations = regionMap[activeRegion] || regionMap.all;
  const strategicStations = displayedStations.filter(station => station.isStrategic);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-corsica-pearl">
      <Navbar />
      
      <Hero 
        title="Stations-service en Corse" 
        subtitle="Trouvez facilement où faire le plein lors de votre road trip moto sur l'Île de Beauté"
        imagePath="/lovable-uploads/137f7ca8-9347-4597-acb8-7f92a1430224.png"
      />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <GasStationsPageHeader />
          <FuellingTips />
          
          <StationsListByRegion 
            activeRegion={activeRegion}
            setActiveRegion={setActiveRegion}
            regionMap={regionMap}
            displayedStations={displayedStations}
            strategicStations={strategicStations}
          />
        </div>
        
        <BackToBlogs />
        <BackToTopButton isVisible={isVisible} onClick={scrollToTop} />
      </main>

      <Footer />
    </div>
  );
};

export default StationServicePage;

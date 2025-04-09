
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GasStationsPageHeader = () => {
  return (
    <div className="mb-8">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-corsica-blue hover:text-corsica-blue/80 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux articles
      </Link>
      
      <h1 className="text-3xl font-bold mb-2">Stations-service en Corse</h1>
      <p className="text-muted-foreground mb-6">
        Liste complète des stations-service pour les motards en Corse.
      </p>
    </div>
  );
};

export default GasStationsPageHeader;

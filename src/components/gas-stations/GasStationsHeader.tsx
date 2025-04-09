
import React from 'react';
import { Link } from 'react-router-dom';

const GasStationsHeader = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">Stations-service en Corse</h1>
      <p className="text-muted-foreground">
        Trouvez toutes les stations-service sur l'Île de Beauté pour planifier vos pleins lors de votre voyage à moto.
      </p>
      <div className="flex gap-2 mt-4">
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          Accueil
        </Link>
        <span className="text-muted-foreground">/</span>
        <span>Stations-service</span>
      </div>
    </div>
  );
};

export default GasStationsHeader;

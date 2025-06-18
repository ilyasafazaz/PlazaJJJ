
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </Link>
          <FileText className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Conditions Générales</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2>1. Objet</h2>
            <p>
              Les présentes conditions générales ont pour objet de définir les modalités et conditions 
              d'utilisation de la plateforme Place2.
            </p>

            <h2>2. Acceptation des conditions</h2>
            <p>
              L'utilisation de la plateforme implique l'acceptation pleine et entière des présentes 
              conditions générales d'utilisation.
            </p>

            <h2>3. Services proposés</h2>
            <p>
              Place2 propose une plateforme de mise en relation entre utilisateurs et coopératives 
              locales, permettant la découverte et l'achat de produits et services.
            </p>

            <h2>4. Responsabilités</h2>
            <p>
              L'utilisateur s'engage à utiliser la plateforme de manière responsable et conforme 
              aux lois en vigueur.
            </p>

            <h2>5. Protection des données</h2>
            <p>
              Vos données personnelles sont protégées conformément à notre politique de confidentialité 
              et au RGPD.
            </p>

            <h2>6. Modification des conditions</h2>
            <p>
              Place2 se réserve le droit de modifier les présentes conditions à tout moment. 
              Les utilisateurs seront informés de toute modification.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;

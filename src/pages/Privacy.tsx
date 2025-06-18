
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
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
          <Shield className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Politique de Confidentialité</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <h2>1. Collecte des données</h2>
            <p>
              Place2 collecte uniquement les données nécessaires au fonctionnement de la plateforme 
              et à l'amélioration de nos services.
            </p>

            <h2>2. Utilisation des données</h2>
            <p>
              Vos données personnelles sont utilisées pour :
            </p>
            <ul>
              <li>Fournir nos services</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Communiquer avec vous</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2>3. Partage des données</h2>
            <p>
              Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, 
              sauf dans les cas prévus par la loi.
            </p>

            <h2>4. Sécurité</h2>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles appropriées 
              pour protéger vos données contre tout accès non autorisé.
            </p>

            <h2>5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>

            <h2>6. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, 
              contactez-nous à privacy@place2.com.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;

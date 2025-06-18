
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, MessageSquare, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const HelpCenter = () => {
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
          <HelpCircle className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Centre d'aide</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comment pouvons-nous vous aider ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <MessageSquare className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Questions fréquentes</h3>
              <p className="text-gray-600 mb-4">Trouvez des réponses aux questions les plus courantes</p>
              <Link to="#" className="text-purple-600 hover:text-purple-700 font-medium">Voir les FAQ →</Link>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contactez-nous</h3>
              <p className="text-gray-600 mb-4">Envoyez-nous un message pour une assistance personnalisée</p>
              <Link to="#" className="text-purple-600 hover:text-purple-700 font-medium">Envoyer un message →</Link>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Autres moyens de nous contacter</h3>
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">+33 1 23 45 67 89</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;

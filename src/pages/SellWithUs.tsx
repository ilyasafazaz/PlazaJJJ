
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Store, Users, TrendingUp, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SellWithUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </Link>
          <Store className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Vendez avec nous</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rejoignez notre marketplace</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Place2 vous offre une plateforme moderne pour développer votre activité et atteindre de nouveaux clients. 
              Que vous soyez un restaurant, un spa, une salle de sport ou tout autre type d'entreprise locale, 
              nous vous aidons à vous démarquer.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Audience ciblée</h3>
                  <p className="text-gray-600">Accédez à des milliers de clients locaux recherchant vos services</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Croissance garantie</h3>
                  <p className="text-gray-600">Augmentez votre visibilité et développez votre chiffre d'affaires</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Support dédié</h3>
                  <p className="text-gray-600">Notre équipe vous accompagne dans votre réussite</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Candidature partenaire</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type d'activité</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Restaurant</option>
                  <option>Spa & Bien-être</option>
                  <option>Sport & Fitness</option>
                  <option>Culture & Loisirs</option>
                  <option>Commerce</option>
                  <option>Services</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description de votre activité</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Décrivez votre entreprise et vos services..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Envoyer ma candidature
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SellWithUs;

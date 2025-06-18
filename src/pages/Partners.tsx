
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Partners = () => {
  const partners = [
    {
      name: "Coopérative Artisanale du Maroc",
      description: "Spécialisée dans l'artisanat traditionnel marocain",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
      name: "Association Française du Tourisme",
      description: "Promotion du tourisme durable en France",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    },
    {
      name: "Italian Heritage Foundation",
      description: "Préservation du patrimoine culturel italien",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300&h=200&fit=crop"
    }
  ];

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
          <Handshake className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Nos Partenaires</h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Users className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Rejoignez notre réseau</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Place2 collabore avec des coopératives, des associations et des entreprises locales 
            pour offrir des expériences authentiques et soutenir les communautés locales.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Devenir partenaire
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={partner.image} 
                alt={partner.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Partners;

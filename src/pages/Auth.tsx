
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import AuthModal from '@/components/AuthModal';

const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'signin' | 'signup'>('signin');

  const openModal = (type: 'signin' | 'signup') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-primary">Connexion</span>
          </div>

          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>

          {/* Main content */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
                Rejoignez la communauté <span className="text-purple-600">Place2</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 font-playfair">
                Connectez-vous pour découvrir toutes les opportunités personnalisées selon votre profil
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto">
                <button
                  onClick={() => openModal('signin')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-playfair"
                >
                  Se connecter
                </button>
                
                <button
                  onClick={() => openModal('signup')}
                  className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-playfair"
                >
                  S'inscrire
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-playfair">
                  Pourquoi rejoindre Place2 ?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personnalisé</h3>
                    <p className="text-gray-600 text-sm">Des recommandations adaptées à votre profil</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🤝</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Communauté</h3>
                    <p className="text-gray-600 text-sm">Rejoignez une communauté active</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">⚡</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Opportunités</h3>
                    <p className="text-gray-600 text-sm">Découvrez de nouvelles possibilités</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        onSwitchType={(type) => setModalType(type)}
      />
    </div>
  );
};

export default Auth;

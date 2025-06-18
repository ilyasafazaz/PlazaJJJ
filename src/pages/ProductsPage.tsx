
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { useLanguage } from '../contexts/LanguageContext';

const ProductsPage = () => {
  const { category } = useParams();
  const { t } = useLanguage();

  const subcategories = [
    {
      id: 'equipement-musculation',
      title: 'Équipement de musculation',
      description: 'Machines et accessoires pour le renforcement musculaire',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop',
      count: 45
    },
    {
      id: 'chaussures-sport',
      title: 'Chaussures de sport',
      description: 'Chaussures spécialisées pour tous types d\'activités',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop',
      count: 28
    },
    {
      id: 'vetements-sport',
      title: 'Vêtements de sport',
      description: 'Tenues techniques et confortables pour l\'entraînement',
      image: 'https://images.unsplash.com/photo-1506629905057-f39a2cbe1570?w=300&h=200&fit=crop',
      count: 67
    }
  ];

  const getCategoryTitle = () => {
    switch (category) {
      case 'sports-fitness':
        return 'Sports & Fitness';
      case 'loisirs-divertissement':
        return 'Loisirs & Divertissement';
      case 'plein-air-nature':
        return 'Plein Air & Nature';
      case 'arts-culture':
        return 'Arts & Culture';
      case 'equipement-principal':
        return 'Équipement Principal';
      case 'technologie-electronique':
        return 'Technologie & Électronique';
      default:
        return 'Produits';
    }
  };

  return (
    <>
      <Navigation />
      <Breadcrumb />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </Link>
            <ShoppingBag className="w-6 h-6 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">{getCategoryTitle()}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((subcategory) => (
              <Link 
                key={subcategory.id}
                to={`/products/${category}/${subcategory.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {subcategory.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{subcategory.description}</p>
                  <p className="text-purple-600 font-medium text-sm">
                    {subcategory.count} produits disponibles
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ChatBot from '../components/ChatBot';
import { ArrowLeft, Star, MapPin, Users, Clock } from 'lucide-react';

const CategoryProductsPage = () => {
  const { category, subcategory } = useParams();

  // Sample data based on category type
  const getPageData = () => {
    const isProducts = location.pathname.includes('/products/');
    const isServices = location.pathname.includes('/services/');
    const isOffers = location.pathname.includes('/offers/');

    if (isProducts) {
      return {
        type: 'produits',
        backLink: '/products',
        items: [
          {
            id: 1,
            name: "Équipement de musculation professionnel",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
            description: "Équipement de haute qualité pour développer la force et la masse musculaire.",
            price: "€125.99",
            originalPrice: "€175.99",
            rating: 4.8,
            vendor: "SportMax Pro",
            inStock: true
          },
          {
            id: 2,
            name: "Chaussures de running premium",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
            description: "Chaussures techniques pour la course à pied avec amorti optimal.",
            price: "€89.99",
            originalPrice: "€129.99",
            rating: 4.6,
            vendor: "RunTech Elite",
            inStock: true
          },
          {
            id: 3,
            name: "Vêtements de sport techniques",
            image: "https://images.unsplash.com/photo-1506629905057-f39a2cbe1570?w=400&h=300&fit=crop",
            description: "Tenues respirantes et confortables pour tous types d'activités sportives.",
            price: "€45.99",
            originalPrice: "€65.99",
            rating: 4.7,
            vendor: "ProActive Gear",
            inStock: true
          }
        ]
      };
    } else if (isServices) {
      return {
        type: 'services',
        backLink: '/services',
        items: [
          {
            id: 1,
            name: "Location d'équipement de fitness",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            description: "Location de matériel professionnel pour l'entraînement à domicile.",
            price: "€25/jour",
            duration: "Flexible",
            rating: 4.9,
            provider: "FitRent Pro",
            location: "Paris"
          },
          {
            id: 2,
            name: "Coaching sportif personnalisé",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            description: "Séances individuelles avec coach certifié pour atteindre vos objectifs.",
            price: "€60/session",
            duration: "1h",
            rating: 4.8,
            provider: "Elite Coaching",
            location: "Lyon"
          },
          {
            id: 3,
            name: "Réservation de terrains de sport",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
            description: "Réservation en ligne de terrains pour vos activités sportives.",
            price: "€30/heure",
            duration: "Variable",
            rating: 4.5,
            provider: "SportBook",
            location: "Marseille"
          }
        ]
      };
    } else {
      return {
        type: 'offres',
        backLink: '/offers',
        items: [
          {
            id: 1,
            name: "Pack découverte fitness",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
            description: "Première séance offerte + réduction de 50% sur l'abonnement mensuel.",
            price: "€29.99",
            originalPrice: "€59.99",
            discount: "50%",
            rating: 4.9,
            validUntil: "2024-08-15",
            provider: "GymMax"
          },
          {
            id: 2,
            name: "Abonnement famille sport",
            image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
            description: "Accès illimité pour toute la famille aux activités sportives.",
            price: "€89.99/mois",
            originalPrice: "€129.99/mois",
            discount: "30%",
            rating: 4.7,
            validUntil: "2024-07-30",
            provider: "Family Sport"
          },
          {
            id: 3,
            name: "Stage vacances été",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
            description: "Stage intensif multi-sports pour enfants et adolescents.",
            price: "€199",
            originalPrice: "€299",
            discount: "33%",
            rating: 4.8,
            validUntil: "2024-06-30",
            provider: "Summer Camp Pro"
          }
        ]
      };
    }
  };

  const pageData = getPageData();
  const categoryTitle = subcategory?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Catégorie';

  return (
    <>
      <Navigation />
      <Breadcrumb />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center space-x-4 mb-4">
              <Link 
                to={pageData.backLink}
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour</span>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{categoryTitle}</h1>
            <p className="text-gray-600">
              Découvrez notre sélection de {pageData.type} dans cette catégorie
            </p>
          </div>
        </div>

        {/* Products/Services/Offers Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.items.map((item) => (
              <Link
                key={item.id}
                to={`/${pageData.type === 'produits' ? 'product' : pageData.type === 'services' ? 'service' : 'offer'}/${item.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-w-16 aspect-h-10 relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      -{item.discount}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-purple-600">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.vendor && <span>Vendu par: {item.vendor}</span>}
                      {item.provider && <span>Fourni par: {item.provider}</span>}
                    </div>
                    {item.location && (
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    {item.duration && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{item.duration}</span>
                      </div>
                    )}
                    {item.validUntil && (
                      <div className="text-sm text-red-600">
                        Valide jusqu'au {item.validUntil}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </>
  );
};

export default CategoryProductsPage;

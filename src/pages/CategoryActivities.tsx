
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ChatBot from '../components/ChatBot';

const CategoryActivities = () => {
  const { profile, category, activity } = useParams();

  // Sample data - in a real app, this would come from an API
  const mockActivities = [
    {
      id: 1,
      name: "Visite du Musée d'Art Moderne",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      description: "Découvrez les chefs-d'œuvre de l'art moderne dans un cadre exceptionnel.",
      location: "Centre-ville",
      duration: "2-3 heures",
      price: "15€"
    },
    {
      id: 2,
      name: "Galerie d'Art Contemporain",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Explorez les dernières tendances artistiques contemporaines.",
      location: "Quartier des Arts",
      duration: "1-2 heures",
      price: "12€"
    },
    {
      id: 3,
      name: "Atelier de Peinture",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      description: "Participez à un atelier créatif et développez vos talents artistiques.",
      location: "École des Beaux-Arts",
      duration: "3 heures",
      price: "45€"
    }
  ];

  const getActivityTitle = (activity: string) => {
    return activity?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Activité';
  };

  const getCategoryTitle = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'culture-art': 'Culture & Art',
      'nature-aventure': 'Nature & Aventure',
      'loisirs-detente': 'Loisirs & Détente',
      'bien-etre': 'Bien-être & Spiritualité',
      'gastronomie': 'Gastronomie & Goût',
      'sport': 'Sport & Activités physiques',
      'shopping': 'Shopping & Artisanat',
      'photo-creation': 'Photo & Création',
      'education': 'Éducation & Apprentissage',
      'affaires': 'Affaires & Réseautage',
      'social-romantique': 'Vie sociale & Romantique',
      'rituels': 'Rituels et Célébrations',
      'volontariat': 'Volontariat & Impact social',
      'evenements': 'Événements'
    };
    return categoryMap[category || ''] || category?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Catégorie';
  };

  return (
    <>
      <Navigation />
      <Breadcrumb />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {getActivityTitle(activity)}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez les meilleures activités de {getCategoryTitle(category)} pour votre profil
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockActivities.map((activityItem) => (
              <div key={activityItem.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={activityItem.image} 
                  alt={activityItem.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {activityItem.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {activityItem.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">Lieu:</span>
                      <span className="ml-2">{activityItem.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">Durée:</span>
                      <span className="ml-2">{activityItem.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">Prix:</span>
                      <span className="ml-2 text-purple-600 font-semibold">{activityItem.price}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Link 
                      to={`/activity/${activityItem.id}`}
                      className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center"
                    >
                      Voir détails
                    </Link>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </>
  );
};

export default CategoryActivities;

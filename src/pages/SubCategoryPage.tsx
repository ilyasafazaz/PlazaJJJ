
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ChatBot from '../components/ChatBot';
import { MapPin, Clock, Users, Star, Calendar, Phone, Mail, Globe } from 'lucide-react';

const SubCategoryPage = () => {
  const { categoryId, subCategoryId } = useParams();

  // Sample subcategory data
  const subCategoryData = {
    'visite-de-musee': {
      title: 'Visite de musée',
      description: 'Explorez les musées locaux et découvrez des collections exceptionnelles d\'art, d\'histoire et de culture.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=400&fit=crop',
      rating: 4.8,
      totalActivities: 15,
      contact: {
        phone: '+33 1 42 97 48 16',
        email: 'info@musees-paris.fr',
        website: 'www.musees-paris.fr'
      },
      activities: [
        {
          id: 1,
          name: "Musée du Louvre - Visite Guidée",
          image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
          description: "Découvrez les chefs-d'œuvre du plus grand musée du monde avec un guide expert.",
          location: "Paris 1er",
          duration: "3 heures",
          price: "25€",
          rating: 4.9,
          participants: 45
        },
        {
          id: 2,
          name: "Musée d'Orsay - Collections Impressionnistes",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          description: "Plongez dans l'univers des impressionnistes français.",
          location: "Paris 7ème",
          duration: "2 heures",
          price: "16€",
          rating: 4.7,
          participants: 30
        },
        {
          id: 3,
          name: "Centre Pompidou - Art Moderne",
          image: "https://images.unsplash.com/photo-1572521165088-7a0f4b9f266e?w=400&h=300&fit=crop",
          description: "Explorez l'art contemporain et moderne dans ce lieu emblématique.",
          location: "Paris 4ème",
          duration: "2.5 heures",
          price: "18€",
          rating: 4.6,
          participants: 25
        }
      ]
    }
  };

  const currentSubCategory = subCategoryData[subCategoryId as keyof typeof subCategoryData];

  if (!currentSubCategory) {
    return <div>Sous-catégorie non trouvée</div>;
  }

  return (
    <>
      <Navigation />
      <Breadcrumb />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={currentSubCategory.image}
            alt={currentSubCategory.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{currentSubCategory.title}</h1>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span>{currentSubCategory.rating}</span>
                </div>
                <span>•</span>
                <span>{currentSubCategory.totalActivities} activités</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentSubCategory.description}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-purple-600 mr-3" />
                    <span className="text-gray-600">{currentSubCategory.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-purple-600 mr-3" />
                    <span className="text-gray-600">{currentSubCategory.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 text-purple-600 mr-3" />
                    <span className="text-gray-600">{currentSubCategory.contact.website}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Activités disponibles ({currentSubCategory.activities.length})
            </h2>
            <p className="text-gray-600">
              Découvrez toutes les activités dans cette catégorie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentSubCategory.activities.map((activity) => (
              <div key={activity.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={activity.image} 
                  alt={activity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {activity.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{activity.participants} participants</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-gray-600">{activity.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold">
                      <span>À partir de {activity.price}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      to={`/activity/${activity.id}`}
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

export default SubCategoryPage;

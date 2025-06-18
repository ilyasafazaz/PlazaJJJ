import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users } from 'lucide-react';

const TrendingActivities = () => {
  const trendingActivities = [
    {
      id: 'chefchaouen',
      title: "Chefchaouen - The Blue Pearl",
      category: "Culture & Heritage",
      location: "Chefchaouen, Morocco",
      duration: "Full day",
      participants: "Open to all",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop",
      trending: true,
      isPlace: true,
      route: "/morocco/chefchaouen"
    },
    {
      id: 'trending-1',
      title: "Visite Guidée du Château de Versailles",
      category: "Culture & Art",
      location: "Versailles, France",
      duration: "3 heures",
      participants: 25,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop",
      trending: true
    },
    {
      id: 'trending-2',
      title: "Randonnée au Mont Blanc",
      category: "Nature & Aventure",
      location: "Chamonix, France",
      duration: "6 heures",
      participants: 15,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      trending: true
    },
    {
      id: 'trending-3',
      title: "Atelier de Cuisine Française",
      category: "Gastronomie & Goût",
      location: "Lyon, France",
      duration: "4 heures",
      participants: 12,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      trending: true
    },
    {
      id: 'trending-4',
      title: "Séance de Yoga au Coucher du Soleil",
      category: "Bien-être & Spiritualité",
      location: "Nice, France",
      duration: "2 heures",
      participants: 20,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
      trending: true
    },
    {
      id: 'trending-5',
      title: "Tournoi de Football Amateur",
      category: "Sport & Activités physiques",
      location: "Paris, France",
      duration: "5 heures",
      participants: 32,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      trending: true
    },
    {
      id: 'trending-6',
      title: "Exposition Photo Contemporaine",
      category: "Photo & Création",
      location: "Marseille, France",
      duration: "2 heures",
      participants: 18,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop",
      trending: true
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best <span className="text-purple-600">Attractions</span> this Weekend
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les activités les plus populaires de la semaine, choisies par notre communauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingActivities.map((activity) => (
            <Link
              key={activity.id}
              to={activity.route || `/activity/${activity.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-purple-600 text-sm mb-3 font-medium">
                  {activity.category}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{typeof activity.participants === 'number' ? `${activity.participants} participants` : activity.participants}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingActivities;

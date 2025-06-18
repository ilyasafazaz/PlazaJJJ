
import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Mountain, Coffee, Heart, Utensils, Dumbbell, ShoppingBag, Camera, BookOpen, Briefcase, Users, PartyPopper, HandHeart, Calendar } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      id: 'culture-art',
      title: "Culture & Art",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
      description: "Découvrez l'art, les musées et la culture locale"
    },
    {
      id: 'nature-aventure',
      title: "Nature & Aventure",
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      description: "Explorez la nature et vivez des aventures"
    },
    {
      id: 'loisirs-detente',
      title: "Loisirs & Détente",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      description: "Relaxez-vous et profitez de moments de détente"
    },
    {
      id: 'bien-etre',
      title: "Bien-être & Spiritualité",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=200&fit=crop",
      description: "Prenez soin de votre corps et votre esprit"
    },
    {
      id: 'gastronomie',
      title: "Gastronomie & Goût",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
      description: "Savourez les plaisirs culinaires"
    },
    {
      id: 'sport',
      title: "Sport & Activités physiques",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      description: "Bougez et restez en forme"
    },
    {
      id: 'shopping',
      title: "Shopping & Artisanat",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop",
      description: "Découvrez l'artisanat local et le shopping"
    },
    {
      id: 'photo-creation',
      title: "Photo & Création",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop",
      description: "Exprimez votre créativité"
    },
    {
      id: 'education',
      title: "Éducation & Apprentissage",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      description: "Apprenez et développez vos compétences"
    },
    {
      id: 'affaires',
      title: "Affaires & Réseautage",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      description: "Développez votre réseau professionnel"
    },
    {
      id: 'social-romantique',
      title: "Vie sociale & Romantique",
      icon: Users,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=200&fit=crop",
      description: "Rencontrez et socialisez"
    },
    {
      id: 'rituels',
      title: "Rituels et Célébrations",
      icon: PartyPopper,
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&h=200&fit=crop",
      description: "Célébrez les moments importants"
    },
    {
      id: 'volontariat',
      title: "Volontariat & Impact social",
      icon: HandHeart,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop",
      description: "Contribuez à votre communauté"
    },
    {
      id: 'evenements',
      title: "Événements",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=200&fit=crop",
      description: "Participez aux événements locaux"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explorez nos <span className="text-purple-600">Activités</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une variété d'activités adaptées à vos goûts et vos envies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity) => {
            const IconComponent = activity.icon;
            return (
              <Link
                key={activity.id}
                to={`/category/${activity.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2">
                    <IconComponent className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {activity.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;

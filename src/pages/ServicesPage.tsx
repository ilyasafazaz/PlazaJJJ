import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Utensils, ArrowLeft, Clock, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesPage = () => {
  const { category } = useParams();
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      name: getCategoryServiceName(category, 0),
      price: '€45/heure',
      image: getCategoryServiceImage(category, 0),
      description: 'Service professionnel avec experts qualifiés',
      rating: 4.8,
      duration: '2 heures',
      location: 'Centre-ville',
      provider: 'Pro Services'
    },
    {
      id: 2,
      name: getCategoryServiceName(category, 1),
      price: '€65/session',
      image: getCategoryServiceImage(category, 1),
      description: 'Service premium avec suivi personnalisé',
      rating: 4.9,
      duration: '1 heure',
      location: 'Divers lieux',
      provider: 'Expert Solutions'
    },
    {
      id: 3,
      name: getCategoryServiceName(category, 2),
      price: '€35/consultation',
      image: getCategoryServiceImage(category, 2),
      description: 'Accompagnement personnalisé et suivi régulier',
      rating: 4.7,
      duration: '45 minutes',
      location: 'En ligne/Présentiel',
      provider: 'Coach & Wellness'
    }
  ];

  function getCategoryServiceImage(categorySlug: string | undefined, index: number) {
    const serviceImages = {
      'location-equipement': [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', // sports equipment rental
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop', // technical equipment
        'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?w=300&h=200&fit=crop'  // event furniture
      ],
      'formation-coaching': [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', // personal training
        'https://images.unsplash.com/photo-1544620282-4c3cc3b6d3e5?w=300&h=200&fit=crop', // intensive training
        'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop'  // certification
      ],
      'reservation-planning': [
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop', // online booking
        'https://images.unsplash.com/photo-1506784693919-403b2b8058f6?w=300&h=200&fit=crop', // schedule management
        'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=300&h=200&fit=crop'  // personal planning
      ],
      'maintenance-entretien': [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop', // facility cleaning
        'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=300&h=200&fit=crop', // equipment repair
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop'  // preventive maintenance
      ],
      'accompagnement': [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop', // beginner guide
        'https://images.unsplash.com/photo-1544620282-4c3cc3b6d3e5?w=300&h=200&fit=crop', // personal coaching
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300&h=200&fit=crop'  // progress tracking
      ],
      'bien-etre-sante': [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop', // sports consultation
        'https://images.unsplash.com/photo-1544620282-4c3cc3b6d3e5?w=300&h=200&fit=crop', // massage therapy
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop'  // nutrition consulting
      ]
    };
    
    const defaultImages = [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1544620282-4c3cc3b6d3e5?w=300&h=200&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop'
    ];
    return serviceImages[categorySlug as keyof typeof serviceImages]?.[index] || defaultImages[index];
  }

  function getCategoryServiceName(categorySlug: string | undefined, index: number) {
    const serviceNames = {
      'location-equipement': ['Location matériel sportif', 'Location équipement technique', 'Location mobilier événementiel'],
      'formation-coaching': ['Cours particuliers', 'Stage intensif', 'Certification professionnelle'],
      'reservation-planning': ['Réservation en ligne', 'Gestion planning', 'Planning personnalisé'],
      'maintenance-entretien': ['Nettoyage installations', 'Réparation équipements', 'Maintenance préventive'],
      'accompagnement': ['Guide débutant', 'Coaching personnalisé', 'Suivi progression'],
      'bien-etre-sante': ['Consultation sportive', 'Massage récupération', 'Conseil nutrition']
    };
    
    const defaultNames = ['Service standard', 'Prestation premium', 'Accompagnement pro'];
    return serviceNames[categorySlug as keyof typeof serviceNames]?.[index] || defaultNames[index];
  }

  const getCategoryTitle = () => {
    switch (category) {
      case 'location-equipement':
        return 'Location d\'équipement';
      case 'formation-coaching':
        return 'Formation & Coaching';
      case 'reservation-planning':
        return 'Réservation & Planning';
      case 'maintenance-entretien':
        return 'Maintenance & Entretien';
      case 'accompagnement':
        return 'Accompagnement';
      case 'bien-etre-sante':
        return 'Bien-être & Santé';
      default:
        return 'Services';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </Link>
          <Utensils className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">{getCategoryTitle()}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id}
              to={`/service/${service.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="aspect-w-16 aspect-h-10">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-purple-600">{service.price}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600">{service.rating}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{service.location}</span>
                  </div>
                  <p className="text-sm text-gray-500">{service.provider}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;

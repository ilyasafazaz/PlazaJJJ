
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Gift, ArrowLeft, Calendar, Percent } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const OffersPage = () => {
  const { category } = useParams();
  const { t } = useLanguage();

  const offers = [
    {
      id: 1,
      title: getCategoryOfferName(category, 0),
      originalPrice: '€100',
      salePrice: '€50',
      discount: '50%',
      image: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=300&h=200&fit=crop',
      description: 'Offre limitée sur nos services et produits premium',
      validUntil: '2024-07-30',
      category: getCategoryBadge(category),
      badge: getCategoryBadgeValue(category)
    },
    {
      id: 2,
      title: getCategoryOfferName(category, 1),
      originalPrice: '€80',
      salePrice: '€56',
      discount: '30%',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      description: 'Promotion spéciale pour nouveaux clients',
      validUntil: '2024-08-15',
      category: getCategoryBadge(category),
      badge: '-30%'
    },
    {
      id: 3,
      title: getCategoryOfferName(category, 2),
      originalPrice: '€120',
      salePrice: '€90',
      discount: '25%',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop',
      description: 'Pack combiné avec avantages exclusifs',
      validUntil: '2024-08-01',
      category: getCategoryBadge(category),
      badge: 'SAVE'
    }
  ];

  function getCategoryOfferName(categorySlug: string | undefined, index: number) {
    const offerNames = {
      'offres-decouverte': ['Première séance offerte', 'Pack découverte -50%', 'Essai gratuit 3 sessions'],
      'abonnements': ['Carte mensuelle premium', 'Abonnement annuel', 'Forfait illimité'],
      'evenements-speciaux': ['Journée portes ouvertes', 'Stage vacances été', 'Compétition locale'],
      'pack-famille': ['Forfait famille 4 personnes', 'Anniversaire enfant', 'Activités parents-enfants'],
      'pack-entreprise': ['Team building sportif', 'Séminaire wellness', 'Event corporate'],
      'pack-etudiants': ['Tarif étudiant -40%', 'Horaires adaptés', 'Partenariat école']
    };
    
    const defaultNames = ['Offre spéciale', 'Promotion limitée', 'Deal exclusif'];
    return offerNames[categorySlug as keyof typeof offerNames]?.[index] || defaultNames[index];
  }

  function getCategoryBadge(categorySlug: string | undefined) {
    const badges = {
      'offres-decouverte': 'Découverte',
      'abonnements': 'Abonnement',
      'evenements-speciaux': 'Événement',
      'pack-famille': 'Famille',
      'pack-entreprise': 'Entreprise',
      'pack-etudiants': 'Étudiant'
    };
    return badges[categorySlug as keyof typeof badges] || 'Offre spéciale';
  }

  function getCategoryBadgeValue(categorySlug: string | undefined) {
    const badgeValues = {
      'offres-decouverte': '-50%',
      'abonnements': 'HOT',
      'evenements-speciaux': 'NEW',
      'pack-famille': 'FAMILLE',
      'pack-entreprise': 'PRO',
      'pack-etudiants': '-40%'
    };
    return badgeValues[categorySlug as keyof typeof badgeValues] || 'PROMO';
  }

  const getCategoryTitle = () => {
    switch (category) {
      case 'offres-decouverte':
        return 'Offres Découverte';
      case 'abonnements':
        return 'Abonnements';
      case 'evenements-speciaux':
        return 'Événements Spéciaux';
      case 'pack-famille':
        return 'Pack Famille';
      case 'pack-entreprise':
        return 'Pack Entreprise';
      case 'pack-etudiants':
        return 'Pack Étudiants';
      default:
        return 'Offres';
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
          <Gift className="w-6 h-6 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">{getCategoryTitle()}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Link 
              key={offer.id}
              to={`/offer/${offer.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group relative"
            >
              <div className="aspect-w-16 aspect-h-10 relative">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  {offer.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl font-bold text-purple-600">{offer.salePrice}</span>
                  <span className="text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                  <div className="flex items-center space-x-1 text-green-600">
                    <Percent className="w-4 h-4" />
                    <span className="text-sm font-semibold">{offer.discount}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Valide jusqu'au {offer.validUntil}</span>
                  </div>
                  <p className="text-sm text-purple-600 font-medium">{offer.category}</p>
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

export default OffersPage;

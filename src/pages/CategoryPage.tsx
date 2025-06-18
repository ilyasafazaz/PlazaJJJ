
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ChatBot from '../components/ChatBot';
import { Filter, MapPin, Clock, Users, Star } from 'lucide-react';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    priceRange: '',
    duration: '',
    difficulty: ''
  });

  // Sample category data with enhanced filtering data
  const categoryData = {
    'culture-art': {
      title: 'Culture & Art',
      description: 'Découvrez l\'art, les musées et la culture locale',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=400&fit=crop',
      subCategories: [
        {
          id: 'visite-de-musee',
          title: 'Visite de musée',
          image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop',
          description: 'Explorez les musées locaux et leurs collections',
          count: 15,
          location: 'Paris',
          priceRange: '20-50€',
          duration: '1-3h',
          difficulty: 'Débutant'
        },
        {
          id: 'galerie-art',
          title: 'Galerie d\'art',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
          description: 'Découvrez les galeries d\'art contemporain',
          count: 8,
          location: 'Lyon',
          priceRange: 'Gratuit',
          duration: '< 1h',
          difficulty: 'Débutant'
        },
        {
          id: 'spectacle-theatre',
          title: 'Spectacle de théâtre',
          image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=250&fit=crop',
          description: 'Assistez aux spectacles de théâtre locaux',
          count: 12,
          location: 'Marseille',
          priceRange: '50-100€',
          duration: '3-6h',
          difficulty: 'Intermédiaire'
        },
        {
          id: 'concert-opera',
          title: 'Concert / Opéra',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
          description: 'Profitez de concerts et opéras',
          count: 6,
          location: 'Toulouse',
          priceRange: '100€+',
          duration: '6h+',
          difficulty: 'Avancé'
        }
      ]
    },
    'nature-aventure': {
      title: 'Nature & Aventure',
      description: 'Explorez la nature et vivez des aventures',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
      subCategories: [
        {
          id: 'randonnee-pedestre',
          title: 'Randonnée pédestre',
          image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop',
          description: 'Parcourez les sentiers de randonnée',
          count: 25,
          location: 'Nice',
          priceRange: 'Gratuit',
          duration: '6h+',
          difficulty: 'Intermédiaire'
        },
        {
          id: 'escalade',
          title: 'Escalade',
          image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=400&h=250&fit=crop',
          description: 'Défiez les parois rocheuses',
          count: 10,
          location: 'Paris',
          priceRange: '20-50€',
          duration: 'Plusieurs jours',
          difficulty: 'Expert'
        }
      ]
    }
  };

  const currentCategory = categoryData[categoryId as keyof typeof categoryData];

  if (!currentCategory) {
    return <div>Catégorie non trouvée</div>;
  }

  const filterOptions = {
    location: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'],
    priceRange: ['Gratuit', '0-20€', '20-50€', '50-100€', '100€+'],
    duration: ['< 1h', '1-3h', '3-6h', '6h+', 'Plusieurs jours'],
    difficulty: ['Débutant', 'Intermédiaire', 'Avancé', 'Expert']
  };

  // Filter subcategories based on selected filters
  const filteredSubCategories = useMemo(() => {
    console.log('Applying filters:', selectedFilters);
    
    return currentCategory.subCategories.filter(subCategory => {
      // Location filter
      if (selectedFilters.location && subCategory.location !== selectedFilters.location) {
        return false;
      }
      
      // Price range filter
      if (selectedFilters.priceRange && subCategory.priceRange !== selectedFilters.priceRange) {
        return false;
      }
      
      // Duration filter
      if (selectedFilters.duration && subCategory.duration !== selectedFilters.duration) {
        return false;
      }
      
      // Difficulty filter
      if (selectedFilters.difficulty && subCategory.difficulty !== selectedFilters.difficulty) {
        return false;
      }
      
      return true;
    });
  }, [currentCategory.subCategories, selectedFilters]);

  const handleFilterChange = (filterType: string, value: string) => {
    console.log(`Filter changed: ${filterType} = ${value}`);
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <>
      <Navigation />
      <Breadcrumb />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={currentCategory.image}
            alt={currentCategory.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{currentCategory.title}</h1>
              <p className="text-lg max-w-2xl">{currentCategory.description}</p>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(filterOptions).map(([key, options]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                    {key === 'priceRange' ? 'Prix' : key === 'location' ? 'Lieu' : key === 'duration' ? 'Durée' : 'Difficulté'}
                  </label>
                  <select
                    value={selectedFilters[key as keyof typeof selectedFilters]}
                    onChange={(e) => handleFilterChange(key, e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Tous</option>
                    {options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            
            {/* Active filters display */}
            {Object.values(selectedFilters).some(filter => filter !== '') && (
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 mr-2">Filtres actifs:</span>
                {Object.entries(selectedFilters).map(([key, value]) => 
                  value && (
                    <span 
                      key={key}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                    >
                      {value}
                      <button 
                        onClick={() => handleFilterChange(key, '')}
                        className="ml-2 text-purple-600 hover:text-purple-800"
                      >
                        ×
                      </button>
                    </span>
                  )
                )}
                <button 
                  onClick={() => setSelectedFilters({ location: '', priceRange: '', duration: '', difficulty: '' })}
                  className="text-sm text-purple-600 hover:text-purple-800 underline"
                >
                  Effacer tous
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sub-categories Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Sous-catégories ({filteredSubCategories.length})
            </h2>
            <p className="text-gray-600">
              {filteredSubCategories.length === 0 ? 
                'Aucune activité ne correspond à vos critères. Essayez de modifier vos filtres.' :
                'Explorez les différentes activités dans cette catégorie'
              }
            </p>
          </div>

          {filteredSubCategories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun résultat trouvé</h3>
              <p className="text-gray-600 mb-4">Essayez de modifier vos filtres pour voir plus d'activités.</p>
              <button 
                onClick={() => setSelectedFilters({ location: '', priceRange: '', duration: '', difficulty: '' })}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSubCategories.map((subCategory) => (
                <Link
                  key={subCategory.id}
                  to={`/subcategory/${categoryId}/${subCategory.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={subCategory.image}
                      alt={subCategory.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {subCategory.count} activités
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {subCategory.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {subCategory.description}
                    </p>
                    
                    {/* Filter information display */}
                    <div className="space-y-1 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{subCategory.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{subCategory.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-600 font-medium">{subCategory.priceRange}</span>
                        <span className="text-gray-500">{subCategory.difficulty}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-medium">
                        Voir les activités
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
      <ChatBot />
    </>
  );
};

export default CategoryPage;

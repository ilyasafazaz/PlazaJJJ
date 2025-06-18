
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import FilterBar from '../components/FilterBar';
import ActeurCard from '../components/ActeurCard';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Acteurs = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    type: '',
    services: [],
    sortBy: 'popularite'
  });

  const categoryMap: { [key: string]: string } = {
    'shopping-achats': 'Shopping & Achats',
    'restauration-boissons': 'Restauration & Boissons',
    'bien-etre-sante': 'Bien-être & Santé',
    'culture-patrimoine': 'Culture & Patrimoine',
    'transport-voyage': 'Transport & Voyage',
    'services-professionnels': 'Services Professionnels'
  };

  const currentCategory = categoryParam ? categoryMap[categoryParam] || 'Restauration & Boissons' : 'Restauration & Boissons';

  const acteurs = [
    {
      id: 1,
      name: "La Table Locale",
      category: "Brasserie",
      description: "Une cuisine authentique avec des produits locaux dans une ambiance chaleureuse.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      location: "15ème arrondissement",
      rating: 4.8,
      reviews: 127,
      badges: ["Bio", "Local"]
    },
    {
      id: 2,
      name: "Café des Arts",
      category: "Café",
      description: "Le lieu idéal pour un café de qualité en admirant les œuvres d'artistes locaux.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      location: "6ème arrondissement",
      rating: 4.6,
      reviews: 89,
      badges: ["Artisanal"]
    },
    {
      id: 3,
      name: "Le Petit Bistrot",
      category: "Restaurant",
      description: "Cuisine française traditionnelle revisitée par notre chef étoilé.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      location: "1er arrondissement",
      rating: 4.9,
      reviews: 203,
      badges: ["Michelin", "Traditionnel"]
    },
    {
      id: 4,
      name: "Green Garden",
      category: "Restaurant Végétarien",
      description: "Une expérience culinaire 100% végétale et responsable.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      location: "11ème arrondissement",
      rating: 4.7,
      reviews: 156,
      badges: ["Vegan", "Bio"]
    },
    {
      id: 5,
      name: "Wine & Dine",
      category: "Bar à Vin",
      description: "Sélection de vins d'exception accompagnés de planches gourmandes.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
      location: "7ème arrondissement",
      rating: 4.5,
      reviews: 98,
      badges: ["Sommelier"]
    },
    {
      id: 6,
      name: "Street Food Paradise",
      category: "Food Truck",
      description: "Cuisine du monde rapide et savoureuse, 100% faite maison.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      location: "Itinérant",
      rating: 4.4,
      reviews: 74,
      badges: ["Mobile", "Fusion"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trouvez l'expérience parfaite en un clin d'œil !
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Professionnels dans la catégorie : 
              <span className="font-semibold text-yellow-600 ml-2">{currentCategory}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <FilterBar 
        selectedFilters={selectedFilters}
        onFiltersChange={setSelectedFilters}
      />

      {/* Acteurs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {acteurs.map((acteur) => (
            <ActeurCard key={acteur.id} acteur={acteur} />
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Acteurs;

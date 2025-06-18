import React, { useState } from 'react';
import { Menu, User, Heart, Users, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const profiles = [
    {
      id: 'individual',
      title: "Individu",
      icon: User,
      color: "text-orange-600"
    },
    {
      id: 'family',
      title: "Famille",
      icon: Users,
      color: "text-orange-600"
    },
    {
      id: 'couples',
      title: "Couple",
      icon: Heart,
      color: "text-orange-600"
    }
  ];

  const taxonomyCategories = [
    {
      id: 'culture-art',
      title: "Culture & Art",
      activities: [
        "Visite de musée",
        "Galerie d'art",
        "Spectacle de théâtre",
        "Concert / Opéra",
        "Festival culturel",
        "Projection de film / Cinéma",
        "Exposition artistique",
        "Atelier de peinture / sculpture",
        "Conférence / Séminaire culturel",
        "Lecture publique / Slam"
      ]
    },
    {
      id: 'nature-aventure',
      title: "Nature & Aventure",
      activities: [
        "Randonnée pédestre",
        "Escalade",
        "Bivouac / Camping",
        "Observation des oiseaux",
        "Safari / Observation d'animaux",
        "Kayak / Canoë",
        "Plongée sous-marine",
        "Parapente",
        "Spéléologie",
        "Volcanisme / Observation de cratères"
      ]
    },
    {
      id: 'loisirs-detente',
      title: "Loisirs & Détente",
      activities: [
        "Promenade",
        "Détente à la plage",
        "Pique-nique",
        "Parc d'attractions",
        "Parc aquatique",
        "Balade en bateau",
        "Croisière",
        "Observation des étoiles",
        "Feu de camp",
        "Bain thermal / Spa"
      ]
    },
    {
      id: 'bien-etre',
      title: "Bien-être & Spiritualité",
      activities: [
        "Yoga",
        "Méditation",
        "Massage",
        "Retraite spirituelle",
        "Pèlerinage",
        "Bain thermal",
        "Sauna / Hammam",
        "Détox / Jeûne",
        "Qi Gong / Tai Chi"
      ]
    },
    {
      id: 'gastronomie',
      title: "Gastronomie & Goût",
      activities: [
        "Dégustation de vin / bière",
        "Atelier de cuisine locale",
        "Découverte de street food",
        "Tour culinaire guidé",
        "Visite de marché local",
        "Dîner romantique",
        "Réservation dans un restaurant étoilé",
        "Cueillette (fruits, plantes)"
      ]
    },
    {
      id: 'sport',
      title: "Sport & Activités physiques",
      activities: [
        "Football / Basketball / Volleyball",
        "Surf / Kitesurf",
        "Natation",
        "Vélo / VTT",
        "Course à pied",
        "Fitness / Crossfit",
        "Escalade indoor",
        "Ski / Snowboard",
        "Patinage",
        "Plongée"
      ]
    },
    {
      id: 'shopping',
      title: "Shopping & Artisanat",
      activities: [
        "Marché local",
        "Souk / Bazar",
        "Centre commercial",
        "Shopping de luxe",
        "Artisanat local",
        "Achat de souvenirs",
        "Friperies",
        "Vente de produits bio"
      ]
    },
    {
      id: 'photo-creation',
      title: "Photo & Création",
      activities: [
        "Photographie de paysage",
        "Photo urbaine / Street photography",
        "Tournage de vlog",
        "Création de contenu",
        "Dessin sur le motif",
        "Capture de drone",
        "Écriture de voyage",
        "Podcast local"
      ]
    },
    {
      id: 'education',
      title: "Éducation & Apprentissage",
      activities: [
        "Visite guidée éducative",
        "Conférence / Talk",
        "Cours de langue",
        "Atelier créatif",
        "Université d'été",
        "Stage découverte",
        "Lecture publique"
      ]
    },
    {
      id: 'affaires',
      title: "Affaires & Réseautage",
      activities: [
        "Conférence professionnelle",
        "Séminaire",
        "Team building",
        "Coworking",
        "Networking",
        "Pitch / Démo",
        "Ateliers business",
        "Formation intensive"
      ]
    },
    {
      id: 'social-romantique',
      title: "Vie sociale & Romantique",
      activities: [
        "Rencontre locale",
        "Soirée dansante",
        "Dîner aux chandelles",
        "Demande en mariage",
        "Lune de miel",
        "Balade en calèche",
        "Fête d'anniversaire",
        "Baby shower",
        "Soirée entre amis"
      ]
    },
    {
      id: 'rituels',
      title: "Rituels et Célébrations",
      activities: [
        "Mariage",
        "Funérailles",
        "Baptême",
        "Fête religieuse",
        "Cérémonie traditionnelle",
        "Passage à l'âge adulte",
        "Fête nationale",
        "Carnaval"
      ]
    },
    {
      id: 'volontariat',
      title: "Volontariat & Impact social",
      activities: [
        "Volontariat environnemental",
        "Aide humanitaire",
        "Bénévolat culturel",
        "Projet éducatif",
        "Échange linguistique",
        "Action associative",
        "Reforestation",
        "Nettoyage de plage / ville"
      ]
    },
    {
      id: 'evenements',
      title: "Événements",
      activities: [
        "Festival",
        "Parade",
        "Marché saisonnier",
        "Compétition sportive",
        "Exposition internationale",
        "Nouvel An / Noël / Ramadan",
        "Lancement de produit"
      ]
    }
  ];

  const resetAndClose = () => {
    setIsOpen(false);
    setSelectedProfile(null);
    setSelectedCategory(null);
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    setSelectedCategory(null);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleActivityClick = (activity) => {
    if (selectedProfile && selectedCategory) {
      const activitySlug = activity.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      navigate(`/category/${selectedProfile.id}/${selectedCategory.id}/${activitySlug}`);
      resetAndClose();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors text-sm"
      >
        <Menu className="w-4 h-4" />
        <span>Catégories</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-[9998]" 
            onClick={resetAndClose}
          />
          
          {/* Mega Menu Container - Higher z-index to appear above main navigation */}
          <div className="absolute top-full left-0 mt-2 z-[9999]">
            <div className={`flex bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden ${
              selectedProfile && selectedCategory ? 'w-[1200px]' : 
              selectedProfile ? 'w-[800px]' : 'w-[320px]'
            } max-w-[95vw]`}>
              
              {/* Level 1: Profile Types - Left Sidebar */}
              <div className="w-80 bg-gray-50 border-r border-gray-200 flex-shrink-0">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800">Profils</h3>
                    <button 
                      onClick={resetAndClose}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
                
                <div className="p-2">
                  {profiles.map((profile) => {
                    const IconComponent = profile.icon;
                    const isActive = selectedProfile?.id === profile.id;
                    
                    return (
                      <button
                        key={profile.id}
                        onClick={() => handleProfileClick(profile)}
                        className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-200 group ${
                          isActive 
                            ? 'bg-orange-50 border-l-4 border-orange-500 text-orange-700' 
                            : 'hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        <IconComponent className={`w-5 h-5 mr-3 ${isActive ? 'text-orange-600' : 'text-gray-600'}`} />
                        <span className={`font-medium ${isActive ? 'text-orange-700' : 'text-gray-700'}`}>
                          {profile.title}
                        </span>
                        <ArrowRight className={`w-4 h-4 ml-auto transition-transform ${
                          isActive ? 'text-orange-500 rotate-90' : 'text-gray-400 group-hover:translate-x-1'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Level 2: Taxonomy Categories - Grid */}
              {selectedProfile && (
                <div className="w-96 bg-white flex-shrink-0 border-r border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">
                      Catégories pour {selectedProfile.title}
                    </h3>
                  </div>
                  
                  <div className="p-2 max-h-[500px] overflow-y-auto">
                    <div className="grid grid-cols-2 gap-2">
                      {taxonomyCategories.map((category) => {
                        const isActive = selectedCategory?.id === category.id;
                        
                        return (
                          <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category)}
                            className={`p-3 text-left rounded-lg transition-all duration-200 ${
                              isActive 
                                ? 'bg-orange-50 text-orange-700 border border-orange-200' 
                                : 'hover:bg-gray-50 hover:shadow-sm'
                            }`}
                          >
                            <span className={`text-sm font-medium ${
                              isActive ? 'text-orange-700' : 'text-gray-700'
                            }`}>
                              {category.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Level 3: Sub-activities - Right Panel */}
              {selectedProfile && selectedCategory && (
                <div className="w-96 bg-white flex-shrink-0">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {selectedCategory.title}
                    </h3>
                  </div>
                  
                  <div className="p-2 max-h-[500px] overflow-y-auto">
                    <div className="space-y-1">
                      {selectedCategory.activities.map((activity, index) => (
                        <button
                          key={index}
                          onClick={() => handleActivityClick(activity)}
                          className="w-full p-2 text-left rounded hover:bg-orange-50 hover:text-orange-700 transition-colors text-sm text-gray-600"
                        >
                          {activity}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoriesDropdown;

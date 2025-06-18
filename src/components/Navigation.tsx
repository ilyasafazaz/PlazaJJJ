import React, { useState } from 'react';
import { Search, User, Users, Heart, Menu, Phone, Download, Store, ShoppingBag, Utensils, Gift, Building2, MessageCircle, Dumbbell, Gamepad2, Mountain, Palette, Wrench, Smartphone, Home, Settings, User2, HeartHandshake, Calendar, Truck, BookOpen, Star, Calendar as CalendarIcon, Tag, Users2, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoriesDropdown from './CategoriesDropdown';
import CooperativesDropdown from './CooperativesDropdown';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const productCategories = [
    {
      title: 'Sports & Fitness',
      description: 'Équipement de musculation, vêtements de sport, chaussures spécialisées',
      icon: <Dumbbell className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-600",
      slug: "sports-fitness"
    },
    {
      title: 'Loisirs & Divertissement',
      description: 'Équipement gaming & VR, matériel bowling, jeux et jouets',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: "bg-green-50 text-green-600",
      slug: "loisirs-divertissement"
    },
    {
      title: 'Plein Air & Nature',
      description: 'Équipement randonnée, matériel camping, vêtements techniques',
      icon: <Mountain className="w-5 h-5" />,
      color: "bg-emerald-50 text-emerald-600",
      slug: "plein-air-nature"
    },
    {
      title: 'Arts & Culture',
      description: 'Matériel artistique, instruments de musique, équipement photo',
      icon: <Palette className="w-5 h-5" />,
      color: "bg-purple-50 text-purple-600",
      slug: "arts-culture"
    },
    {
      title: 'Équipement Principal',
      description: 'Matériel professionnel et équipements spécialisés',
      icon: <Wrench className="w-5 h-5" />,
      color: "bg-orange-50 text-orange-600",
      slug: "equipement-principal"
    },
    {
      title: 'Technologie & Électronique',
      description: 'Équipements électroniques, accessoires tech et gadgets',
      icon: <Smartphone className="w-5 h-5" />,
      color: "bg-indigo-50 text-indigo-600",
      slug: "technologie-electronique"
    }
  ];

  const serviceCategories = [
    {
      title: 'Location d\'équipement',
      description: 'Matériel sportif, équipement technique, mobilier événementiel',
      icon: <Home className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-600",
      slug: "location-equipement"
    },
    {
      title: 'Formation & Coaching',
      description: 'Cours particuliers, stages intensifs, certification professionnelle',
      icon: <BookOpen className="w-5 h-5" />,
      color: "bg-green-50 text-green-600",
      slug: "formation-coaching"
    },
    {
      title: 'Réservation & Planning',
      description: 'Réservation en ligne, gestion des créneaux, planning personnalisé',
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-purple-50 text-purple-600",
      slug: "reservation-planning"
    },
    {
      title: 'Maintenance & Entretien',
      description: 'Nettoyage des installations, réparation d\'équipements',
      icon: <Settings className="w-5 h-5" />,
      color: "bg-orange-50 text-orange-600",
      slug: "maintenance-entretien"
    },
    {
      title: 'Accompagnement',
      description: 'Guide débutant, coaching personnalisé, suivi de progression',
      icon: <User2 className="w-5 h-5" />,
      color: "bg-pink-50 text-pink-600",
      slug: "accompagnement"
    },
    {
      title: 'Bien-être & Santé',
      description: 'Consultations sportives, massage et récupération, nutrition',
      icon: <HeartHandshake className="w-5 h-5" />,
      color: "bg-emerald-50 text-emerald-600",
      slug: "bien-etre-sante"
    }
  ];

  const offerCategories = [
    {
      title: 'Offres Découverte',
      description: 'Première séance gratuite, tarif découverte -50%, pack d\'essai',
      icon: <Star className="w-5 h-5" />,
      color: "bg-red-50 text-red-600",
      slug: "offres-decouverte",
      badge: "-50%"
    },
    {
      title: 'Abonnements',
      description: 'Carte mensuelle, abonnement annuel, forfait illimité',
      icon: <CalendarIcon className="w-5 h-5" />,
      color: "bg-orange-50 text-orange-600",
      slug: "abonnements"
    },
    {
      title: 'Événements Spéciaux',
      description: 'Journées portes ouvertes, stages vacances, compétitions locales',
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-green-50 text-green-600",
      slug: "evenements-speciaux"
    },
    {
      title: 'Pack Famille',
      description: 'Activités parents-enfants, tarifs familiaux, anniversaires enfants',
      icon: <Users2 className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-600",
      slug: "pack-famille"
    },
    {
      title: 'Pack Entreprise',
      description: 'Team building, séminaires sportifs, events corporatifs',
      icon: <Briefcase className="w-5 h-5" />,
      color: "bg-purple-50 text-purple-600",
      slug: "pack-entreprise"
    },
    {
      title: 'Pack Étudiants',
      description: 'Tarifs préférentiels, horaires adaptés, partenariats écoles',
      icon: <GraduationCap className="w-5 h-5" />,
      color: "bg-indigo-50 text-indigo-600",
      slug: "pack-etudiants"
    }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm relative z-[9997]">
      {/* Unified top bar */}
      <div className="border-b border-gray-200/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left side - Categories */}
            <div className="flex items-center">
              <CategoriesDropdown />
            </div>

            {/* Center - Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Outer ring with modern geometric design */}
                  <circle cx="22" cy="22" r="20" fill="url(#logoGradient)" filter="url(#glow)" opacity="0.1"/>
                  <circle cx="22" cy="22" r="18" stroke="url(#logoGradient)" strokeWidth="2" fill="none"/>
                  
                  {/* Inner hexagon for Place */}
                  <path d="M22 8L32 14V30L22 36L12 30V14L22 8Z" fill="url(#logoGradient)" opacity="0.8"/>
                  
                  {/* Central circle for number 2 */}
                  <circle cx="22" cy="22" r="8" fill="white"/>
                  
                  {/* Stylized "2" */}
                  <path d="M18 19C18 17.3 19.3 16 21 16C22.7 16 24 17.3 24 19C24 20.2 23.3 21 22.2 21.8L18 25H24V27H16V24.5L21.5 20.5C22.2 20 22 19.5 22 19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19H18Z" fill="url(#logoGradient)"/>
                  
                  {/* Location pin accent */}
                  <circle cx="30" cy="14" r="3" fill="#EC4899" opacity="0.8"/>
                  <circle cx="30" cy="14" r="1.5" fill="white"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent">
                  Place2
                </span>
                <span className="text-xs text-gray-500 font-medium tracking-wide">
                  Find Your Place
                </span>
              </div>
            </Link>
            
            {/* Right side - Top navigation items */}
            <div className="flex items-center space-x-8 text-sm text-gray-600 relative z-[9998]">
              <Link 
                to="/partners"
                className="flex items-center space-x-2 hover:text-purple-600 transition-colors"
              >
                <Store className="w-4 h-4" />
                <span>{t('nav.sellWithUs')}</span>
              </Link>
              <Link 
                to="/contact"
                className="flex items-center space-x-2 hover:text-purple-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{t('nav.contactUs')}</span>
              </Link>
              <button className="flex items-center space-x-2 hover:text-purple-600 transition-colors">
                <Download className="w-4 h-4" />
                <span>{t('nav.downloadApp')}</span>
              </button>
              <LanguageSwitcher />
              <Link 
                to="/auth"
                className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
              >
                {t('nav.login')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Only for home page with lower z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[9996]">
        <div className="flex justify-center items-center py-4">
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-2">
                {/* Products Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors bg-transparent">
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t('nav.products')}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-xl rounded-lg z-[9996]">
                    <div className="w-[750px] p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Produits</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {productCategories.map((category, index) => (
                          <Link 
                            key={index} 
                            to={`/products/${category.slug}`}
                            className="group cursor-pointer"
                          >
                            <div className="bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                              <div className="p-4 flex items-center space-x-3">
                                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                                  {category.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                                    {category.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {category.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                          Voir tous les produits
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors bg-transparent">
                    <Utensils className="w-4 h-4" />
                    <span>{t('nav.services')}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-xl rounded-lg z-[9996]">
                    <div className="w-[750px] p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {serviceCategories.map((category, index) => (
                          <Link 
                            key={index} 
                            to={`/services/${category.slug}`}
                            className="group cursor-pointer"
                          >
                            <div className="bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                              <div className="p-4 flex items-center space-x-3">
                                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                                  {category.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                                    {category.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {category.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                          Voir tous les services
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Offers Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors bg-transparent">
                    <Gift className="w-4 h-4" />
                    <span>{t('nav.offers')}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-xl rounded-lg z-[9996]">
                    <div className="w-[750px] p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Offres</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {offerCategories.map((category, index) => (
                          <Link 
                            key={index} 
                            to={`/offers/${category.slug}`}
                            className="group cursor-pointer"
                          >
                            <div className="bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                              <div className="p-4 flex items-center space-x-3">
                                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center relative`}>
                                  {category.icon}
                                  {category.badge && (
                                    <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                                      {category.badge}
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                                    {category.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {category.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                          Voir toutes les offres
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Other navigation items */}
                <CooperativesDropdown />
                <div className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer ml-4">
                  <Building2 className="w-4 h-4" />
                  <span>{t('nav.eshop')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <Link 
                  to="/forum" 
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer ml-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('nav.forum')}</span>
                </Link>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions - Search and Mobile Menu */}
          <div className="flex items-center space-x-4 ml-8 md:ml-0">
            <Search className="w-5 h-5 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors" />
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-3 space-y-3">
              <div className="text-gray-700">{t('nav.products')}</div>
              <div className="text-gray-700">{t('nav.services')}</div>
              <div className="text-gray-700">{t('nav.offers')}</div>
              <div className="text-gray-700">{t('nav.cooperatives')}</div>
              <div className="text-gray-700">{t('nav.eshop')}</div>
              <div className="text-gray-700">{t('nav.forum')}</div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

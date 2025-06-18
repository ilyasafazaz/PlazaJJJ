
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.offers': 'Offers',
    'nav.cooperatives': 'Cooperatives',
    'nav.eshop': 'E-Shop',
    'nav.forum': 'Forum',
    'nav.login': 'Login',
    'nav.sellWithUs': 'Sell With Us',
    'nav.contactUs': 'Contact Us',
    'nav.downloadApp': 'Download App',
    'nav.categories': 'Categories',
    
    // Hero Section
    'hero.title.part1': 'Discover Your Perfect',
    'hero.title.part2': 'Place',
    'hero.subtitle': 'Find unique activities, local businesses, and special experiences in your area',
    'hero.searchPlaceholder': 'What are you looking for?',
    'hero.searchButton': 'Search',
    'hero.popularSearches': 'Popular searches:',
    'hero.restaurant': 'Restaurant',
    'hero.spa': 'Spa',
    'hero.sports': 'Sports',
    'hero.culture': 'Culture',
    
    // Trending Activities
    'trending.title': 'Trending',
    'trending.subtitle': 'Activities',
    'trending.week': 'this week',
    'trending.description': 'Discover the most popular activities of the week, chosen by our community',
    
    // Why Choose Us
    'whyChooseUs.title': 'Why Choose Us',
    'whyChooseUs.subtitle': 'Discover what makes Place2 the perfect platform for your needs',
    'whyChooseUs.recommendation.title': 'Personalized Recommendation Engine',
    'whyChooseUs.recommendation.desc': 'It uses filters like location, preferences, activity type, and user behavior to suggest the most relevant places and experiences tailored specifically to your interests.',
    'whyChooseUs.intelligence.title': 'Activity-Place Intelligence',
    'whyChooseUs.intelligence.desc': 'It links places to specific activities and use-cases, not just categories. This means you get contextual recommendations based on what you actually want to do.',
    'whyChooseUs.ai.title': 'AI-Powered Chatbots',
    'whyChooseUs.ai.desc': 'Our assistant guides users, refines queries, and provides context-aware suggestions to help you find exactly what you\'re looking for.',
    
    // Products
    'products.title': 'Discover Local Products',
    'products.artisan': 'Artisan & Handcrafted',
    'products.artisan.desc': 'Unique handmade local creations',
    'products.food': 'Food & Specialties',
    'products.food.desc': 'Local delicacies and gourmet products',
    'products.fashion': 'Fashion & Textiles',
    'products.fashion.desc': 'Traditional and modern local fashion',
    'products.home': 'Home & Decoration',
    'products.home.desc': 'Pottery, ceramics and home decor',
    'products.wellness': 'Wellness Products',
    'products.wellness.desc': 'Natural beauty and health products',
    'products.souvenirs': 'Souvenirs & Gifts',
    'products.souvenirs.desc': 'Perfect mementos of your visit',
    'products.viewAll': 'View All Products →',
    
    // Services
    'services.title': 'Book Local Services',
    'services.tourism': 'Tourism & Guides',
    'services.tourism.desc': 'Professional local tour experiences',
    'services.wellnessSpa': 'Wellness & Spa',
    'services.wellnessSpa.desc': 'Relaxation and health services',
    'services.transport': 'Transport & Rentals',
    'services.transport.desc': 'Vehicle rentals and transport',
    'services.foodDelivery': 'Food Delivery',
    'services.foodDelivery.desc': 'Local cuisine delivered to you',
    'services.professional': 'Professional Services',
    'services.professional.desc': 'Coworking and business support',
    'services.cultural': 'Cultural Experiences',
    'services.cultural.desc': 'Workshops and cultural activities',
    'services.viewAll': 'View All Services →',
    
    // Offers
    'offers.title': 'Exclusive Offers & Deals',
    'offers.flash': 'Flash Sales',
    'offers.flash.desc': 'Limited time incredible deals',
    'offers.seasonal': 'Seasonal Events',
    'offers.seasonal.desc': 'Special holiday and festival offers',
    'offers.bundle': 'Bundle Packages',
    'offers.bundle.desc': 'Combined deals for better value',
    'offers.student': 'Student Discounts',
    'offers.student.desc': 'Special rates for students',
    'offers.family': 'Family Deals',
    'offers.family.desc': 'Perfect offers for families',
    'offers.vouchers': 'Gift Vouchers',
    'offers.vouchers.desc': 'Perfect gifts for loved ones',
    'offers.viewAll': 'View All Offers →',
    
    // Cooperatives
    'cooperatives.title': 'Discover our cooperatives',
    'cooperatives.shopping': 'Shopping & Purchases',
    'cooperatives.shopping.desc': 'Shops, stores and shopping centers',
    'cooperatives.restaurant': 'Restaurants & Drinks',
    'cooperatives.restaurant.desc': 'Restaurants, cafes and bars',
    'cooperatives.wellness': 'Wellness & Health',
    'cooperatives.wellness.desc': 'Spas, gyms and health centers',
    'cooperatives.culture': 'Culture & Heritage',
    'cooperatives.culture.desc': 'Museums, theaters and historic sites',
    'cooperatives.transport': 'Transport & Travel',
    'cooperatives.transport.desc': 'Travel agencies and transport',
    'cooperatives.professional': 'Professional Services',
    'cooperatives.professional.desc': 'Consulting and business services',
    'cooperatives.viewAll': 'View all cooperatives →'
  },
  fr: {
    // Navigation
    'nav.products': 'Produits',
    'nav.services': 'Services',
    'nav.offers': 'Offres',
    'nav.cooperatives': 'Coopératives',
    'nav.eshop': 'E-Shop',
    'nav.forum': 'Forum',
    'nav.login': 'Connexion',
    'nav.sellWithUs': 'Vendez avec nous',
    'nav.contactUs': 'Contactez-nous',
    'nav.downloadApp': 'Télécharger l\'app',
    'nav.categories': 'Catégories',
    
    // Hero Section
    'hero.title.part1': 'Découvrez Votre',
    'hero.title.part2': 'Place',
    'hero.subtitle': 'Trouvez des activités uniques, des entreprises locales et des expériences spéciales dans votre région',
    'hero.searchPlaceholder': 'Que recherchez-vous ?',
    'hero.searchButton': 'Rechercher',
    'hero.popularSearches': 'Recherches populaires :',
    'hero.restaurant': 'Restaurant',
    'hero.spa': 'Spa',
    'hero.sports': 'Sports',
    'hero.culture': 'Culture',
    
    // Trending Activities
    'trending.title': 'Activités',
    'trending.subtitle': 'Tendances',
    'trending.week': 'cette semaine',
    'trending.description': 'Découvrez les activités les plus populaires de la semaine, choisies par notre communauté',
    
    // Why Choose Us
    'whyChooseUs.title': 'Pourquoi nous choisir',
    'whyChooseUs.subtitle': 'Découvrez ce qui fait de Place2 la plateforme parfaite pour vos besoins',
    'whyChooseUs.recommendation.title': 'Moteur de recommandation personnalisé',
    'whyChooseUs.recommendation.desc': 'Il utilise des filtres comme la localisation, les préférences, le type d\'activité et le comportement utilisateur pour suggérer les lieux et expériences les plus pertinents adaptés spécifiquement à vos intérêts.',
    'whyChooseUs.intelligence.title': 'Intelligence Activité-Lieu',
    'whyChooseUs.intelligence.desc': 'Il lie les lieux à des activités et cas d\'usage spécifiques, pas seulement des catégories. Cela signifie que vous obtenez des recommandations contextuelles basées sur ce que vous voulez réellement faire.',
    'whyChooseUs.ai.title': 'Chatbots alimentés par IA',
    'whyChooseUs.ai.desc': 'Notre assistant guide les utilisateurs, affine les requêtes et fournit des suggestions contextuelles pour vous aider à trouver exactement ce que vous cherchez.',
    
    // Products
    'products.title': 'Découvrez les produits locaux',
    'products.artisan': 'Artisanat & Fait main',
    'products.artisan.desc': 'Créations locales uniques faites à la main',
    'products.food': 'Alimentation & Spécialités',
    'products.food.desc': 'Délices locaux et produits gastronomiques',
    'products.fashion': 'Mode & Textiles',
    'products.fashion.desc': 'Mode locale traditionnelle et moderne',
    'products.home': 'Maison & Décoration',
    'products.home.desc': 'Poterie, céramique et décoration',
    'products.wellness': 'Produits bien-être',
    'products.wellness.desc': 'Produits naturels de beauté et santé',
    'products.souvenirs': 'Souvenirs & Cadeaux',
    'products.souvenirs.desc': 'Parfaits souvenirs de votre visite',
    'products.viewAll': 'Voir tous les produits →',
    
    // Services
    'services.title': 'Réservez des services locaux',
    'services.tourism': 'Tourisme & Guides',
    'services.tourism.desc': 'Expériences touristiques professionnelles',
    'services.wellnessSpa': 'Bien-être & Spa',
    'services.wellnessSpa.desc': 'Services de détente et de santé',
    'services.transport': 'Transport & Location',
    'services.transport.desc': 'Location de véhicules et transport',
    'services.foodDelivery': 'Livraison de repas',
    'services.foodDelivery.desc': 'Cuisine locale livrée chez vous',
    'services.professional': 'Services professionnels',
    'services.professional.desc': 'Coworking et support aux entreprises',
    'services.cultural': 'Expériences culturelles',
    'services.cultural.desc': 'Ateliers et activités culturelles',
    'services.viewAll': 'Voir tous les services →',
    
    // Offers
    'offers.title': 'Offres exclusives & Promotions',
    'offers.flash': 'Ventes flash',
    'offers.flash.desc': 'Offres incroyables à durée limitée',
    'offers.seasonal': 'Événements saisonniers',
    'offers.seasonal.desc': 'Offres spéciales fêtes et festivals',
    'offers.bundle': 'Packs groupés',
    'offers.bundle.desc': 'Offres combinées pour plus de valeur',
    'offers.student': 'Réductions étudiants',
    'offers.student.desc': 'Tarifs spéciaux pour étudiants',
    'offers.family': 'Offres familles',
    'offers.family.desc': 'Offres parfaites pour les familles',
    'offers.vouchers': 'Bons cadeaux',
    'offers.vouchers.desc': 'Cadeaux parfaits pour vos proches',
    'offers.viewAll': 'Voir toutes les offres →',
    
    // Cooperatives
    'cooperatives.title': 'Découvrez nos coopératives',
    'cooperatives.shopping': 'Shopping & Achats',
    'cooperatives.shopping.desc': 'Boutiques, magasins et centres commerciaux',
    'cooperatives.restaurant': 'Restauration & Boissons',
    'cooperatives.restaurant.desc': 'Restaurants, cafés et bars',
    'cooperatives.wellness': 'Bien-être & Santé',
    'cooperatives.wellness.desc': 'Spas, salles de sport et centres de santé',
    'cooperatives.culture': 'Culture & Patrimoine',
    'cooperatives.culture.desc': 'Musées, théâtres et sites historiques',
    'cooperatives.transport': 'Transport & Voyage',
    'cooperatives.transport.desc': 'Agences de voyage et transport',
    'cooperatives.professional': 'Services Professionnels',
    'cooperatives.professional.desc': 'Consultation et services aux entreprises',
    'cooperatives.viewAll': 'Voir toutes les coopératives →'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

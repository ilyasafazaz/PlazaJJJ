
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    '': 'Accueil',
    'cooperatives': 'Coopératives',
    'cooperative': 'Coopérative',
    'acteurs': 'Acteurs',
    'forum': 'Forum',
    'activity': 'Activité',
    'products': 'Produits',
    'services': 'Services',
    'offers': 'Offres',
    'product': 'Produit',
    'service': 'Service',
    'offer': 'Offre',
    'shopping-achats': 'Shopping & Achats',
    'artisanat': 'Artisanat',
    'category': 'Catégorie',
    'subcategory': 'Sous-catégorie',
    'individual': 'Individu',
    'family': 'Famille',
    'couples': 'Couple',
    'culture-art': 'Culture & Art',
    'nature-aventure': 'Nature & Aventure',
    'loisirs-detente': 'Loisirs & Détente',
    'bien-etre': 'Bien-être & Spiritualité',
    'sport': 'Sport & Activités physiques',
    'shopping': 'Shopping & Artisanat',
    'photo-creation': 'Photo & Création',
    'education': 'Éducation & Apprentissage',
    'affaires': 'Affaires & Réseautage',
    'social-romantique': 'Vie sociale & Romantique',
    'rituels': 'Rituels et Célébrations',
    'volontariat': 'Volontariat & Impact social',
    'evenements': 'Événements',
    'visite-de-musee': 'Visite de musée',
    'galerie-art': 'Galerie d\'art',
    'spectacle-theatre': 'Spectacle de théâtre',
    'concert-opera': 'Concert / Opéra',
    'randonnee-pedestre': 'Randonnée pédestre',
    'escalade': 'Escalade',
    'sports-fitness': 'Sports & Fitness',
    'loisirs-divertissement': 'Loisirs & Divertissement',
    'plein-air-nature': 'Plein Air & Nature',
    'arts-culture': 'Arts & Culture',
    'equipement-principal': 'Équipement Principal',
    'technologie-electronique': 'Technologie & Électronique',
    'location-equipement': 'Location d\'équipement',
    'formation-coaching': 'Formation & Coaching',
    'reservation-planning': 'Réservation & Planning',
    'maintenance-entretien': 'Maintenance & Entretien',
    'accompagnement': 'Accompagnement',
    'bien-etre-sante': 'Bien-être & Santé',
    'offres-decouverte': 'Offres Découverte',
    'abonnements': 'Abonnements',
    'evenements-speciaux': 'Événements Spéciaux',
    'pack-famille': 'Pack Famille',
    'pack-entreprise': 'Pack Entreprise',
    'pack-etudiants': 'Pack Étudiants',
    'partners': 'Vendre avec nous',
    'contact': 'Contact',
    'help-center': 'Centre d\'aide',
    'terms': 'Conditions d\'utilisation',
    'privacy': 'Politique de confidentialité',
    'auth': 'Authentification',
    'morocco': 'Maroc',
    'chefchaouen': 'Chefchaouen'
  };

  const formatActivityName = (activity: string) => {
    return activity.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Don't show breadcrumb on homepage or Chefchaouen page
  if (pathnames.length === 0 || location.pathname === '/morocco/chefchaouen') {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="flex items-center hover:text-purple-600 transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          {pathnames.length > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            let displayName = breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);
            
            // Special handling for activity names (last segment in category routes)
            if (pathnames[0] === 'category' && pathnames.length === 4 && index === pathnames.length - 1) {
              displayName = formatActivityName(name);
            }
            
            // Special handling for detail pages
            if ((pathnames[0] === 'activity' || pathnames[0] === 'product' || pathnames[0] === 'service' || pathnames[0] === 'offer') && index === pathnames.length - 1) {
              displayName = 'Détails';
            }

            // Special handling for subcategories in products, services, and offers
            if ((pathnames[0] === 'products' || pathnames[0] === 'services' || pathnames[0] === 'offers') && index === pathnames.length - 1 && pathnames.length > 2) {
              displayName = formatActivityName(name);
            }

            return (
              <React.Fragment key={name}>
                {isLast ? (
                  <span className="text-gray-900 font-medium">{displayName}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="hover:text-purple-600 transition-colors"
                  >
                    {displayName}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-4 h-4 text-gray-400" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;

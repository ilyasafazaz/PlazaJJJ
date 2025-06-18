
import React, { useState } from 'react';
import { ShoppingCart, Utensils, Heart, Palette, Car, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const CooperativesDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false);
    }, 300);
    setTimeoutId(id);
  };

  const categories = [
    {
      title: t('cooperatives.shopping'),
      description: t('cooperatives.shopping.desc'),
      icon: ShoppingCart,
      color: "bg-blue-50 text-blue-600",
      slug: "shopping-achats"
    },
    {
      title: t('cooperatives.restaurant'),
      description: t('cooperatives.restaurant.desc'),
      icon: Utensils,
      color: "bg-orange-50 text-orange-600",
      slug: "restauration-boissons"
    },
    {
      title: t('cooperatives.wellness'),
      description: t('cooperatives.wellness.desc'),
      icon: Heart,
      color: "bg-green-50 text-green-600",
      slug: "bien-etre"
    },
    {
      title: t('cooperatives.culture'),
      description: t('cooperatives.culture.desc'),
      icon: Palette,
      color: "bg-purple-50 text-purple-600",
      slug: "culture-patrimoine"
    },
    {
      title: t('cooperatives.transport'),
      description: t('cooperatives.transport.desc'),
      icon: Car,
      color: "bg-indigo-50 text-indigo-600",
      slug: "transport-voyage"
    },
    {
      title: t('cooperatives.professional'),
      description: t('cooperatives.professional.desc'),
      icon: Briefcase,
      color: "bg-gray-50 text-gray-600",
      slug: "services-professionnels"
    }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
        <Users className="w-4 h-4" />
        <span>{t('nav.cooperatives')}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isHovered && (
        <div className="absolute top-full left-0 mt-2 w-[750px] bg-white rounded-lg shadow-xl border border-gray-200 z-30 -translate-x-80 mr-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('cooperatives.title')}</h3>
            <div className="grid grid-cols-3 gap-4">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Link 
                    key={index} 
                    to={`/cooperatives/${category.slug}`}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="p-4 flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6" />
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
                );
              })}
            </div>
            <div className="mt-4 text-center">
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                {t('cooperatives.viewAll')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CooperativesDropdown;

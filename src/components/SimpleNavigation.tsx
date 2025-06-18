
import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Phone, Download } from 'lucide-react';
import CategoriesDropdown from './CategoriesDropdown';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const SimpleNavigation = () => {
  const { t } = useLanguage();

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm relative z-[9999]">
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
            <div className="flex items-center space-x-8 text-sm text-gray-600 relative z-[10000]">
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
    </nav>
  );
};

export default SimpleNavigation;

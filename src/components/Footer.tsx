
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Place2</h3>
            <p className="text-gray-300 mb-4">
              Découvrez un monde d'opportunités personnalisées selon votre profil et vos besoins.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/acteurs" className="text-gray-300 hover:text-white transition-colors">Coopératives</Link></li>
              <li><Link to="/products/artisan-handcrafted" className="text-gray-300 hover:text-white transition-colors">Produits</Link></li>
              <li><Link to="/services/guided-tours" className="text-gray-300 hover:text-white transition-colors">E-Shop</Link></li>
              <li><Link to="/offers/flash-sales" className="text-gray-300 hover:text-white transition-colors">Offres Spéciales</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-gray-300 hover:text-white transition-colors">Centre d'aide</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Partenaires</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sell With Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Restez informé de nos dernières offres</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Place2. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions Générales
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de Confidentialité
            </Link>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions Légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

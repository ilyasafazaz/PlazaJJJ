
import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface ActeurCardProps {
  acteur: {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    location: string;
    rating: number;
    reviews: number;
    badges: string[];
  };
}

const ActeurCard = ({ acteur }: ActeurCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative aspect-w-16 aspect-h-12">
        <img 
          src={acteur.image} 
          alt={acteur.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-yellow-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
            {acteur.category}
          </span>
        </div>
        {acteur.badges.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-2">
            {acteur.badges.slice(0, 2).map((badge, index) => (
              <span 
                key={index}
                className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {acteur.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
          {acteur.description}
        </p>

        {/* Location and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{acteur.location}</span>
          </div>
          
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="text-sm font-medium text-gray-900">{acteur.rating}</span>
            <span className="text-sm text-gray-500 ml-1">({acteur.reviews})</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
          Voir les détails
        </button>
      </div>
    </div>
  );
};

export default ActeurCard;

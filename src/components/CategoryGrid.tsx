
import React from 'react';

const CategoryGrid = () => {
  const categories = [
    {
      title: "Shopping & Achats",
      description: "Découvrez nos partenaires shopping",
      image: "/lovable-uploads/adef2a9e-4daa-4cca-b430-478d36977dd1.png"
    },
    {
      title: "Restauration & Boissons", 
      description: "Savourez nos offres culinaires",
      image: "/lovable-uploads/adef2a9e-4daa-4cca-b430-478d36977dd1.png"
    },
    {
      title: "Bien-être & Santé",
      description: "Prenez soin de vous",
      image: "/lovable-uploads/adef2a9e-4daa-4cca-b430-478d36977dd1.png"
    },
    {
      title: "Loisirs & Divertissement",
      description: "Amusez-vous avec nos activités",
      image: "/lovable-uploads/adef2a9e-4daa-4cca-b430-478d36977dd1.png"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">{category.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;

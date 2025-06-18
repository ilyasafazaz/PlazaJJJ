
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&h=600&fit=crop", // Morocco - mosque buildings
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=600&fit=crop", // France - gray concrete bridge and waterfalls
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&h=600&fit=crop", // Italy - river between mountains
    "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1200&h=600&fit=crop", // Turkey - mosque buildings
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Gallery Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-playfair drop-shadow-lg">
            Bienvenue sur <span className="text-purple-400">Place2</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl leading-relaxed font-playfair drop-shadow-md">
            Découvrez un monde d'opportunités personnalisées selon votre profil 
            et vos besoins
          </p>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-playfair">
            Commencer l'exploration
          </button>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-purple-600 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

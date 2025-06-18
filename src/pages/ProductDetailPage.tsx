
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProductDetailPage = () => {
  const { id } = useParams();

  const product = {
    id: parseInt(id || '1'),
    name: 'Équipement de musculation professionnel',
    price: '€125.99',
    originalPrice: '€175.99',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop', // gym equipment
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'  // fitness equipment
    ],
    description: 'Équipement de musculation professionnel conçu pour les salles de sport et l\'entraînement personnel. Fabriqué avec des matériaux de haute qualité pour assurer durabilité et sécurité. Idéal pour développer la force et la masse musculaire.',
    rating: 4.8,
    reviews: 24,
    vendor: 'SportMax Pro',
    category: 'Sports & Fitness',
    specifications: [
      { label: 'Matériau', value: 'Acier renforcé' },
      { label: 'Dimensions', value: '150cm x 80cm x 200cm' },
      { label: 'Poids', value: '45kg' },
      { label: 'Charge max', value: '200kg' }
    ],
    inStock: true,
    quantity: 15
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link 
            to="/products/sports-fitness" 
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour aux produits</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-purple-600 font-medium mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} avis)
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-purple-600">{product.price}</span>
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">Économie 28%</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Spécifications</h3>
              <div className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{spec.label}:</span>
                    <span className="text-gray-800 font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-gray-600">Vendu par:</span>
                <span className="text-purple-600 font-medium">{product.vendor}</span>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></span>
                <span className="text-sm text-gray-600">
                  {product.inStock ? `En stock (${product.quantity} disponibles)` : 'Rupture de stock'}
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Ajouter au panier</span>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;

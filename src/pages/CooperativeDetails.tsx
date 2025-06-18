import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FilterBar from '../components/FilterBar';
import Breadcrumb from '../components/Breadcrumb';
import ChatBot from '../components/ChatBot';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { 
  MapPin, 
  Star, 
  Users, 
  Clock, 
  Phone, 
  Mail, 
  Globe,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';

const CooperativeDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    services: [],
    sortBy: 'popularite'
  });

  // Mock data for cooperatives
  const allCooperatives = [
    {
      id: 1,
      name: "Coopérative Artisanale du Marché",
      category: "Artisanat Local",
      description: "Découvrez l'artisanat traditionnel dans notre coopérative de créateurs locaux.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      location: "1er arrondissement",
      rating: 4.7,
      reviews: 156,
      type: "Restaurant",
      services: ["Bio", "Wifi"]
    },
    {
      id: 2,
      name: "Coopérative des Saveurs",
      category: "Gastronomie",
      description: "Une sélection de produits gastronomiques locaux et biologiques.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      location: "6ème arrondissement",
      rating: 4.5,
      reviews: 89,
      type: "Café",
      services: ["Bio", "Terrasse"]
    },
    {
      id: 3,
      name: "Atelier des Créateurs",
      category: "Design",
      description: "Un espace collaboratif pour les créateurs et designers locaux.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      location: "7ème arrondissement",
      rating: 4.8,
      reviews: 201,
      type: "Bar à Vin",
      services: ["Wifi", "Parking"]
    },
    {
      id: 4,
      name: "Coopérative Verte",
      category: "Écologie",
      description: "Produits écologiques et durables pour un mode de vie responsable.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
      location: "11ème arrondissement",
      rating: 4.6,
      reviews: 134,
      type: "Restaurant",
      services: ["Vegan", "Bio", "Livraison"]
    }
  ];

  // Filter cooperatives based on selected filters
  const filteredCooperatives = allCooperatives.filter(coop => {
    const matchesLocation = !filters.location || coop.location === filters.location;
    const matchesType = !filters.type || coop.type === filters.type;
    const matchesServices = filters.services.length === 0 || 
      filters.services.every(service => coop.services.includes(service));
    
    return matchesLocation && matchesType && matchesServices;
  });

  const faqs = [
    {
      question: "Comment rejoindre une coopérative ?",
      answer: "Pour rejoindre une coopérative, vous pouvez contacter directement les responsables via les informations de contact fournies sur chaque fiche."
    },
    {
      question: "Quels sont les avantages d'une coopérative ?",
      answer: "Les coopératives offrent des produits de qualité, soutiennent l'économie locale et favorisent les pratiques durables."
    },
    {
      question: "Les coopératives proposent-elles des livraisons ?",
      answer: "Cela dépend de chaque coopérative. Vous pouvez voir dans les services si la livraison est disponible."
    },
    {
      question: "Comment soutenir les coopératives locales ?",
      answer: "Vous pouvez les soutenir en achetant leurs produits, en participant à leurs événements et en partageant leur contenu."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Navigation />
      <Breadcrumb />
      
      {/* Filter Bar */}
      <FilterBar 
        selectedFilters={filters}
        onFiltersChange={setFilters}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Coopératives
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre réseau de coopératives locales engagées dans le développement durable et l'économie solidaire.
          </p>
        </div>

        {/* Cooperatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCooperatives.map((cooperative) => (
            <Link key={cooperative.id} to={`/cooperative/${cooperative.id}`}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cooperative.image} 
                    alt={cooperative.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {cooperative.name}
                      </CardTitle>
                      <CardDescription className="text-orange-600 font-medium">
                        {cooperative.category}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{cooperative.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{cooperative.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{cooperative.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{cooperative.reviews} avis</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {cooperative.services.map((service, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default CooperativeDetails;

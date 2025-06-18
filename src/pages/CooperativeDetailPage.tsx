import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
  Share2,
  Eye,
  Map,
  CloudSun,
  Calendar,
  Lightbulb,
  HelpCircle
} from 'lucide-react';

const CooperativeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data for the cooperative
  const cooperative = {
    id: parseInt(id || '1'),
    name: "Coopérative Artisanale du Marché",
    category: "Artisanat Local",
    description: "Découvrez l'artisanat traditionnel dans notre coopérative de créateurs locaux. Nous proposons des produits uniques fabriqués par des artisans passionnés.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
    location: "Centre-ville, Rabat",
    rating: 4.7,
    reviews: 156,
    phone: "+212 537 123 456",
    email: "contact@cooperative-artisanale.ma",
    website: "www.cooperative-artisanale.ma",
    openingHours: "Lun-Sam: 9h-18h, Dim: 10h-17h",
    badges: ["Artisanal", "Local", "Écologique"]
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'map', label: 'Interactive Map', icon: Map },
    { id: 'weather', label: 'Weather', icon: CloudSun },
    { id: 'visit', label: 'Best Time to Visit', icon: Calendar },
    { id: 'highlights', label: 'Highlights', icon: Lightbulb },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'forum', label: 'Forum', icon: MessageCircle }
  ];

  const faqs = [
    {
      question: "Quels sont les horaires d'ouverture ?",
      answer: "Nous sommes ouverts du lundi au samedi de 9h à 18h, et le dimanche de 10h à 17h."
    },
    {
      question: "Proposez-vous des ateliers d'artisanat ?",
      answer: "Oui, nous organisons des ateliers d'initiation à l'artisanat traditionnel tous les weekends."
    },
    {
      question: "Livrez-vous vos produits ?",
      answer: "Nous proposons la livraison dans toute la région de Rabat-Salé-Kénitra."
    },
    {
      question: "Acceptez-vous les commandes personnalisées ?",
      answer: "Absolument ! Nos artisans peuvent créer des pièces sur mesure selon vos besoins."
    },
    {
      question: "Y a-t-il un parking disponible ?",
      answer: "Oui, nous disposons d'un parking gratuit pour nos visiteurs."
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Aperçu général</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{cooperative.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {cooperative.badges.map((badge, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{cooperative.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{cooperative.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{cooperative.website}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{cooperative.openingHours}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">✓ Parking gratuit disponible</p>
                    <p className="text-sm text-gray-600">✓ Accès PMR</p>
                    <p className="text-sm text-gray-600">✓ Ateliers tous les weekends</p>
                    <p className="text-sm text-gray-600">✓ Commandes personnalisées</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'map':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Plan interactif</h2>
            <Card>
              <CardContent className="p-6 text-center">
                <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Carte interactive</h3>
                <p className="text-gray-600">La carte interactive sera bientôt disponible pour vous aider à localiser la coopérative.</p>
              </CardContent>
            </Card>
          </div>
        );
      case 'weather':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Météo</h2>
            <Card>
              <CardContent className="p-6 text-center">
                <CloudSun className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Conditions météorologiques</h3>
                <p className="text-gray-600">Les informations météorologiques seront bientôt disponibles.</p>
              </CardContent>
            </Card>
          </div>
        );
      case 'visit':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Meilleur moment pour visiter</h2>
            <Card>
              <CardContent className="p-6">
                <Calendar className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recommandations de visite</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Matinée (9h-12h)</h4>
                    <p className="text-gray-600 text-sm">Idéal pour découvrir les nouveautés et profiter de l'ambiance calme.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Après-midi (14h-17h)</h4>
                    <p className="text-gray-600 text-sm">Parfait pour les ateliers et les démonstrations d'artisanat.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Weekend</h4>
                    <p className="text-gray-600 text-sm">Ateliers spéciaux et événements communautaires.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 'highlights':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Points forts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Lightbulb className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Artisanat authentique</h3>
                  <p className="text-gray-600 text-sm">Découvrez des créations uniques réalisées par des artisans locaux passionnés.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Communauté engagée</h3>
                  <p className="text-gray-600 text-sm">Rejoignez une communauté d'artisans et de passionnés d'art traditionnel.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Impact local</h3>
                  <p className="text-gray-600 text-sm">Contribuez au développement économique local et durable.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Qualité exceptionnelle</h3>
                  <p className="text-gray-600 text-sm">Produits de haute qualité certifiés par notre communauté.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'faq':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
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
        );
      case 'forum':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Forum de discussion</h2>
            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Forum communautaire</h3>
                <p className="text-gray-600">Échangez avec d'autres membres de la communauté et partagez vos expériences.</p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <Navigation />
      <Breadcrumb />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sidebarItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-colors text-left ${
                        activeSection === item.id
                          ? 'bg-orange-100 text-orange-700 border border-orange-200'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Cooperative Header */}
            <div className="mb-8">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img 
                  src={cooperative.image} 
                  alt={cooperative.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{cooperative.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{cooperative.category}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{cooperative.rating}</span>
                    <span className="ml-1 text-gray-500">({cooperative.reviews} avis)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{cooperative.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      <ChatBot />
      <Footer />
    </div>
  );
};

export default CooperativeDetailPage;

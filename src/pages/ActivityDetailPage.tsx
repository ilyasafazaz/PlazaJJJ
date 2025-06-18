
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
  HelpCircle,
  Euro,
  Camera
} from 'lucide-react';

const ActivityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data for the activity
  const activity = {
    id: parseInt(id || '1'),
    name: "Visite du Musée d'Art Moderne",
    category: "Culture & Art",
    description: "Découvrez les chefs-d'œuvre de l'art moderne dans un cadre exceptionnel. Une expérience culturelle immersive qui vous transportera à travers les différents mouvements artistiques du XXe siècle.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=400&fit=crop",
    location: "Centre-ville, Rabat",
    duration: "2-3 heures",
    price: "15€",
    rating: 4.8,
    reviews: 234,
    phone: "+212 537 654 321",
    email: "contact@musee-art-moderne.ma",
    website: "www.musee-art-moderne.ma",
    openingHours: "Mar-Dim: 9h-17h, Fermé le lundi",
    badges: ["Culturel", "Éducatif", "Accessible PMR"]
  };

  const sidebarItems = [
    { id: 'overview', label: 'Aperçu', icon: Eye },
    { id: 'map', label: 'Plan & Localisation', icon: Map },
    { id: 'weather', label: 'Météo', icon: CloudSun },
    { id: 'visit', label: 'Conseils de visite', icon: Calendar },
    { id: 'highlights', label: 'Points forts', icon: Lightbulb },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'forum', label: 'Avis & Forum', icon: MessageCircle }
  ];

  const faqs = [
    {
      question: "Y a-t-il des tarifs réduits ?",
      answer: "Oui, nous proposons des tarifs réduits pour les étudiants (-25%), les seniors (+65 ans) et les groupes de plus de 10 personnes."
    },
    {
      question: "La visite est-elle guidée ?",
      answer: "Nous proposons des visites guidées tous les jours à 10h, 14h et 16h. Des audioguides sont également disponibles en français, anglais et arabe."
    },
    {
      question: "Peut-on prendre des photos ?",
      answer: "Les photos sans flash sont autorisées dans la plupart des salles. Certaines œuvres temporaires peuvent avoir des restrictions spécifiques."
    },
    {
      question: "Y a-t-il un café ou restaurant sur place ?",
      answer: "Oui, notre café-restaurant est ouvert aux mêmes horaires que le musée et propose une cuisine locale et internationale."
    },
    {
      question: "Comment se rendre au musée ?",
      answer: "Le musée est accessible en tramway (station Centre-ville), en bus (lignes 12, 25, 34) et dispose d'un parking payant."
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">À propos de cette activité</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{activity.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activity.badges.map((badge, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Euro className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{activity.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{activity.openingHours}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact & Réservation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{activity.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{activity.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-3 text-gray-500" />
                    <span>{activity.website}</span>
                  </div>
                  <button className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    Réserver maintenant
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'map':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Localisation & Plan d'accès</h2>
            <Card>
              <CardContent className="p-6 text-center">
                <Map className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Plan interactif</h3>
                <p className="text-gray-600">La carte interactive et les itinéraires d'accès seront bientôt disponibles.</p>
              </CardContent>
            </Card>
          </div>
        );
      case 'weather':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Conditions météorologiques</h2>
            <Card>
              <CardContent className="p-6 text-center">
                <CloudSun className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Météo locale</h3>
                <p className="text-gray-600">Les informations météorologiques en temps réel seront bientôt disponibles.</p>
              </CardContent>
            </Card>
          </div>
        );
      case 'visit':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Conseils pour votre visite</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Clock className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Meilleur moment</h3>
                  <p className="text-gray-600 text-sm">Visitez en matinée (9h-11h) pour éviter les foules et profiter d'un éclairage optimal.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Camera className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Photos</h3>
                  <p className="text-gray-600 text-sm">Photos autorisées sans flash. Certaines expositions temporaires peuvent avoir des restrictions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Visites guidées</h3>
                  <p className="text-gray-600 text-sm">Disponibles tous les jours à 10h, 14h et 16h. Réservation recommandée.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Accès</h3>
                  <p className="text-gray-600 text-sm">Accessible en tramway, bus et voiture. Parking payant disponible.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      case 'highlights':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Points forts de la visite</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Lightbulb className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Collections permanentes</h3>
                  <p className="text-gray-600 text-sm">Découvrez les chefs-d'œuvre de l'art moderne marocain et international.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Star className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Expositions temporaires</h3>
                  <p className="text-gray-600 text-sm">Expositions rotatives mettant en avant des artistes contemporains.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ateliers créatifs</h3>
                  <p className="text-gray-600 text-sm">Participez à des ateliers d'art pour tous les âges et niveaux.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Architecture unique</h3>
                  <p className="text-gray-600 text-sm">Admirez l'architecture moderne du bâtiment, œuvre d'art en soi.</p>
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
            <h2 className="text-2xl font-bold text-gray-900">Avis et discussions</h2>
            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Forum communautaire</h3>
                <p className="text-gray-600">Partagez votre expérience et lisez les avis d'autres visiteurs.</p>
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
                          ? 'bg-purple-100 text-purple-700 border border-purple-200'
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
            {/* Activity Header */}
            <div className="mb-8">
              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img 
                  src={activity.image} 
                  alt={activity.name}
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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{activity.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{activity.category}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{activity.rating}</span>
                    <span className="ml-1 text-gray-500">({activity.reviews} avis)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <Euro className="w-4 h-4 mr-1" />
                    <span>{activity.price}</span>
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

export default ActivityDetailPage;

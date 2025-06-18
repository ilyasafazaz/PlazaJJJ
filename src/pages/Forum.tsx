
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ChevronDown, MessageSquare, Eye, Users, Calendar } from 'lucide-react';

const Forum = () => {
  const forumCategories = [
    {
      title: "Shopping & Achats",
      description: "Boutiques, magasins et centres commerciaux",
      icon: "🛍️",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop",
      color: "bg-blue-50 text-blue-600",
      topics: 362,
      messages: "7.8k",
      lastPost: {
        title: "New Events, Feedback",
        time: "12 min. ago",
        author: "StudioMaster"
      }
    },
    {
      title: "Restauration & Boissons",
      description: "Restaurants, cafés et bars",
      icon: "🍽️",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop",
      color: "bg-orange-50 text-orange-600",
      topics: 193,
      messages: "3.9k",
      lastPost: {
        title: "Discord activity program",
        time: "11 min. ago",
        author: "StudioMaster"
      }
    },
    {
      title: "Bien-être & Santé",
      description: "Spas, salles de sport et centres de santé",
      icon: "💚",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      color: "bg-green-50 text-green-600",
      topics: 159,
      messages: "7.6k",
      lastPost: {
        title: "NEW: Trial Arena",
        time: "5 min. ago",
        author: "StafPolyGames"
      }
    },
    {
      title: "Culture & Patrimoine",
      description: "Musées, théâtres et sites historiques",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
      color: "bg-purple-50 text-purple-600",
      topics: 91,
      messages: "52.2k",
      lastPost: {
        title: "Everything you need to kn...",
        time: "10 min. ago",
        author: "FrostMine"
      }
    },
    {
      title: "Transport & Voyage",
      description: "Agences de voyage et transport",
      icon: "🚗",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop",
      color: "bg-indigo-50 text-indigo-600",
      topics: 41,
      messages: "3.9k",
      lastPost: {
        title: "Client modification - addit...",
        time: "11 min. ago",
        author: "StudioMaster"
      }
    },
    {
      title: "Services Professionnels",
      description: "Consultation et services aux entreprises",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      color: "bg-gray-50 text-gray-600",
      topics: 542,
      messages: "51.2k",
      lastPost: {
        title: "Looking for Teacher",
        time: "5 min. ago",
        author: "CelestialSpacecer"
      }
    }
  ];

  const mainSections = [
    {
      title: "Discussions générales",
      icon: "💬",
      topics: 542,
      messages: "51.2k",
      lastPost: {
        title: "This is just the beginning",
        time: "15 min. ago",
        author: "DriftmoonFang"
      }
    },
    {
      title: "Idées et suggestions",
      icon: "💡",
      topics: 542,
      messages: "51.2k",
      lastPost: {
        title: "Game about players",
        time: "1 h. ago",
        author: "GrimFylower"
      }
    },
    {
      title: "Entraide communautaire",
      icon: "🤝",
      topics: 542,
      messages: "51.2k",
      lastPost: {
        title: "How do you take down a 4...",
        time: "16 min. ago",
        author: "LunarOracle"
      }
    }
  ];

  const onlineUsers = [
    { name: "EchoFlame", role: "Admin", avatar: "🔥" },
    { name: "StarNightSorcerer", role: "Admin", avatar: "⭐" },
    { name: "VoidWar...", role: "Head Moderator", avatar: "🌌" },
    { name: "AuroraBlaze", role: "Moderator", avatar: "🌅" },
    { name: "EmberPhoenix", role: "Moderator", avatar: "🔥" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Forum Place2
          </h1>
          <p className="text-xl text-gray-600">
            Rejoignez notre communauté et partagez vos expériences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Forum Content */}
          <div className="lg:col-span-3">
            {/* Main Category Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-purple-600 mb-6">Catégories principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {forumCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                    <div className="aspect-w-16 aspect-h-10 relative">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-20 object-cover"
                      />
                      <div className={`absolute top-2 left-2 w-8 h-8 rounded-full ${category.color} flex items-center justify-center`}>
                        <span className="text-lg">{category.icon}</span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1">
                        {category.title}
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{category.topics} sujets</span>
                        <span>{category.messages} messages</span>
                      </div>
                      <div className="text-xs text-purple-600 mt-1">
                        {category.lastPost.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Section */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">Discussions générales</h2>
              <div className="space-y-4">
                {mainSections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{section.icon}</span>
                        <div>
                          <h3 className="font-medium text-gray-900">{section.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>Sujets: {section.topics}</span>
                            <span>Messages: {section.messages}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <div className="font-medium">{section.lastPost.title}</div>
                        <div className="text-xs">{section.lastPost.time} • {section.lastPost.author}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Last Answers */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-600 mb-4">Dernières réponses</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="text-gray-900 font-medium">À propos des offres et promotions</div>
                  <div className="text-gray-600 text-xs">24 sec. ago • GrimWarrior</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-900 font-medium">Bot de nuit</div>
                  <div className="text-gray-600 text-xs">1 min. ago • LightDrops</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-900 font-medium">Que faire avec x1k?</div>
                  <div className="text-gray-600 text-xs">1 min. ago • MysticMage</div>
                </div>
                <div className="text-sm">
                  <div className="text-gray-900 font-medium">Le propriétaire a fait un mouvement...</div>
                  <div className="text-gray-600 text-xs">1 min. ago • Theomitaking</div>
                </div>
              </div>
            </div>

            {/* Users Online */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-600">Utilisateurs en ligne</h3>
                <span className="text-sm text-gray-600">1495</span>
              </div>
              <div className="space-y-3">
                {onlineUsers.map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{user.avatar}</span>
                    <div className="flex-1">
                      <div className="text-gray-900 text-sm font-medium">{user.name}</div>
                      <div className="text-xs text-purple-600">{user.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <button className="text-purple-600 hover:text-purple-700 text-sm transition-colors">
                  Tous les utilisateurs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Forum;

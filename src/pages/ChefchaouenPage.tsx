
import React, { useState, useEffect } from 'react';
import { MapPin, Utensils, Building2, Car, ShoppingBag, Hotel, Calendar, ChevronRight, Info, History, Sun, Cloud, Star, Coffee, Map, Clock, MessageSquare, ThumbsUp, MessageCircle, Share2, MoreHorizontal, Menu, Eye, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CategoriesDropdown from '../components/CategoriesDropdown';
import ChatBot from '../components/ChatBot';

const images = [
  'https://bluedoorcuisine.com/wp-content/uploads/2023/03/milad-alizadeh-JibMa0FbyHw-unsplash-scaled.jpg',
  'https://www.hachettebookgroup.com/wp-content/uploads/2019/01/Morocco_ChefchouenAerial_Zzvet-iStock-473937070.jpg',
  'https://traveladdicts.net/wp-content/uploads/2018/05/Chefchaouen-Morocco-shops-rugs.jpg.webp',
  'https://media.cntraveler.com/photos/55d63075c47ae13868aeb74f/master/pass/Chefchaouen-Lucy-Laucht-tout.jpg',
  'https://farm5.staticflickr.com/4802/25730133577_7f49b08505_b.jpg'
];

const placeCards = [
  {
    id: 'p1',
    name: 'Plaza Uta el-Hammam',
    description: 'The main square of Chefchaouen, surrounded by cafes and restaurants, featuring the Grand Mosque and kasbah.',
    image: 'https://images.mnstatic.com/d2/96/d2967567f7aa784a006de6ae3879bdb9.jpg',
    tags: ['Historical', 'Cultural', 'Central'],
    rating: 4.8,
    reviews: 520
  },
  {
    id: 'p2',
    name: 'Kasbah Museum',
    description: 'A 15th-century fortress and museum showcasing local artifacts and offering panoramic views of the city.',
    image: 'https://thumbs.dreamstime.com/b/le-kasbah-historique-de-chefchaouen-est-une-forteresse-mur%C3%A9e-avec-un-petit-jardin-mus%C3%A9e-ethnographique-et-petite-galerie-d-art-141902467.jpg',
    tags: ['Museum', 'Historical', 'Architecture'],
    rating: 4.6,
    reviews: 340
  },
  {
    id: 'p3',
    name: 'Ras el-Maa Waterfall',
    description: 'A peaceful waterfall at the edge of the medina where locals gather to socialize and do laundry.',
    image: 'https://media.safarway.com/content/1e9916eb-887f-478f-8dbe-451ae66b5879_sm.jpg',
    tags: ['Nature', 'Local Life', 'Scenic'],
    rating: 4.4,
    reviews: 280
  }
];

const hotelCards = [
  {
    id: 'h1',
    name: 'Riad Cherifa',
    description: 'Luxurious riad with traditional Moroccan decor, rooftop terrace, and mountain views.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    tags: ['Luxury', 'Traditional', 'Views'],
    price: '€150/night',
    rating: 4.9,
    reviews: 230
  },
  {
    id: 'h2',
    name: 'Casa Hassan',
    description: 'Charming hotel in the heart of the medina with authentic architecture and home-cooked meals.',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
    tags: ['Mid-range', 'Central', 'Restaurant'],
    price: '€80/night',
    rating: 4.7,
    reviews: 450
  },
  {
    id: 'h3',
    name: 'Dar Echchaouen',
    description: 'Beautiful guesthouse with garden, pool, and panoramic terrace overlooking the Rif Mountains.',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    tags: ['Boutique', 'Pool', 'Garden'],
    price: '€120/night',
    rating: 4.8,
    reviews: 320
  }
];

const productCards = [
  {
    id: 'pr1',
    name: 'Handwoven Carpet',
    description: 'Traditional Moroccan carpet handwoven by local artisans using natural wool and dyes.',
    image: 'https://images.pexels.com/photos/6192336/pexels-photo-6192336.jpeg',
    tags: ['Handicraft', 'Home Decor', 'Traditional'],
    price: '€200',
    artisan: 'Medina Artisan Collective'
  },
  {
    id: 'pr2',
    name: 'Leather Pouf',
    description: 'Handcrafted leather ottoman made using traditional Moroccan techniques.',
    image: 'https://images.pexels.com/photos/6186524/pexels-photo-6186524.jpeg',
    tags: ['Leather', 'Furniture', 'Handmade'],
    price: '€80',
    artisan: 'Hassan Leather Works'
  },
  {
    id: 'pr3',
    name: 'Blue Pottery Set',
    description: 'Hand-painted ceramic tea set in Chefchaouen\'s signature blue.',
    image: 'https://images.pexels.com/photos/6186654/pexels-photo-6186654.jpeg',
    tags: ['Ceramics', 'Kitchenware', 'Artisanal'],
    price: '€45',
    artisan: 'Blue City Ceramics'
  }
];

const restaurantCards = [
  {
    id: 'r1',
    name: 'Restaurant Beldi Bab Ssour',
    description: 'Traditional Moroccan cuisine with rooftop dining and mountain views.',
    image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg',
    tags: ['Moroccan', 'Rooftop', 'Views'],
    priceRange: '€€',
    rating: 4.7,
    reviews: 380
  },
  {
    id: 'r2',
    name: 'Casa Aladdin',
    description: 'Popular restaurant serving local specialties and Mediterranean dishes.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    tags: ['Local', 'Mediterranean', 'Casual'],
    priceRange: '€',
    rating: 4.5,
    reviews: 420
  },
  {
    id: 'r3',
    name: 'Café Clock',
    description: 'Modern café offering fusion cuisine and cultural events.',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    tags: ['Café', 'Fusion', 'Events'],
    priceRange: '€€',
    rating: 4.6,
    reviews: 290
  }
];

const transportCards = [
  {
    id: 't1',
    name: 'Chefchaouen - Tangier Transfer',
    description: 'Private transfer service between Chefchaouen and Tangier.',
    image: 'https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg',
    tags: ['Private', 'Comfortable', 'Direct'],
    price: '€60/person',
    duration: '2 hours'
  },
  {
    id: 't2',
    name: 'Local Taxi Service',
    description: 'Reliable taxi service for getting around Chefchaouen.',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    tags: ['Local', 'Flexible', 'Affordable'],
    price: 'From €5',
    duration: 'On demand'
  },
  {
    id: 't3',
    name: 'Mountain Tour Transport',
    description: '4x4 vehicle tours to explore the Rif Mountains.',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
    tags: ['Adventure', '4x4', 'Tours'],
    price: '€80/person',
    duration: '6-8 hours'
  }
];

const sidebarNavigation = [
  {
    id: 'overview',
    icon: <Eye size={20} />,
    title: 'Aperçu',
    content: `Chefchaouen, known as the "Blue Pearl of Morocco", is famous for its striking blue-painted buildings 
    and winding alleyways. Founded in 1471, this enchanting city nestled in the Rif Mountains has become 
    a must-visit destination for travelers seeking unique cultural experiences and stunning photography opportunities.`
  },
  {
    id: 'plan',
    icon: <Map size={20} />,
    title: 'Plan & Localisation',
    content: {
      type: 'map',
      center: { lat: 35.1715, lng: -5.2697 },
      zoom: 14,
      markers: [
        { lat: 35.1715, lng: -5.2697, title: 'Medina', description: 'Historic city center' },
        { lat: 35.1686, lng: -5.2638, title: 'Plaza Uta el-Hammam', description: 'Main square' },
        { lat: 35.1697, lng: -5.2614, title: 'Kasbah', description: 'Historic fortress' }
      ]
    }
  },
  {
    id: 'weather',
    icon: <Sun size={20} />,
    title: 'Météo',
    content: {
      type: 'weather',
      current: {
        temp: 22,
        condition: 'Sunny',
        humidity: 65,
        wind: 12
      },
      forecast: [
        { day: 'Monday', high: 24, low: 15, condition: 'Sunny' },
        { day: 'Tuesday', high: 23, low: 14, condition: 'Partly Cloudy' },
        { day: 'Wednesday', high: 22, low: 13, condition: 'Sunny' },
        { day: 'Thursday', high: 25, low: 16, condition: 'Clear' },
        { day: 'Friday', high: 23, low: 15, condition: 'Partly Cloudy' }
      ]
    }
  },
  {
    id: 'conseils',
    icon: <Clock size={20} />,
    title: 'Conseils de visite',
    content: {
      type: 'seasons',
      recommendations: [
        {
          season: 'Spring (March-May)',
          rating: 5,
          description: 'Perfect weather, moderate temperatures, beautiful blooms'
        },
        {
          season: 'Summer (June-August)',
          rating: 3,
          description: 'Hot temperatures, crowded but lively atmosphere'
        },
        {
          season: 'Autumn (September-November)',
          rating: 4,
          description: 'Pleasant weather, fewer crowds, great for photography'
        },
        {
          season: 'Winter (December-February)',
          rating: 2,
          description: 'Cool temperatures, occasional rain, quiet season'
        }
      ]
    }
  },
  {
    id: 'points-forts',
    icon: <Star size={20} />,
    title: 'Points forts',
    content: `
    • The Medina - A UNESCO World Heritage site with blue-washed buildings
    • Plaza Uta el-Hammam - The main square with restaurants and cafes
    • Grand Mosque - Historic mosque with unique octagonal minaret
    • Kasbah Museum - Former prison turned museum with city views
    • Ras el-Maa - Waterfall and gathering spot for locals`
  },
  {
    id: 'faq',
    icon: <HelpCircle size={20} />,
    title: 'FAQ',
    content: `Frequently asked questions about visiting Chefchaouen, practical information for travelers.`
  },
  {
    id: 'forum',
    icon: <MessageSquare size={20} />,
    title: 'Avis & Forum',
    content: {
      type: 'forum',
      topics: [
        {
          id: 1,
          title: 'Best photo spots in Chefchaouen?',
          author: {
            name: 'PhotoLover',
            credentials: 'Travel Photographer • 5K followers',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
          },
          content: 'I\'m planning a photography trip to Chefchaouen and would love to know the best spots for capturing the city\'s famous blue streets and architecture. Any recommendations from photographers who\'ve been there?',
          upvotes: 245,
          comments: 24,
          shares: 12,
          lastActive: '2h ago',
          answers: [
            {
              id: 1,
              author: {
                name: 'MarocExplorer',
                credentials: 'Local Guide • 10 years experience',
                avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
              },
              content: 'As a local guide, I recommend these prime spots:\n\n1. Plaza Uta el-Hammam early morning\n2. The rooftop of Lina Ryad for panoramic views\n3. The narrow alley near Ras el-Maa waterfall\n4. The Spanish Mosque hill for sunset shots\n\nPro tip: Visit during the "blue hour" just after sunrise for the best lighting.',
              upvotes: 156,
              comments: 8,
              timestamp: '1h ago'
            }
          ]
        },
        {
          id: 2,
          title: 'Where to stay in the Medina?',
          author: {
            name: 'Traveler123',
            credentials: 'Experienced Backpacker',
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
          },
          content: 'Looking for authentic riad recommendations in Chefchaouen\'s medina. Budget is around $100/night. Preferably with a rooftop terrace and traditional decor.',
          upvotes: 189,
          comments: 15,
          shares: 5,
          lastActive: '5h ago',
          answers: [
            {
              id: 2,
              author: {
                name: 'MoroccoInsider',
                credentials: 'Hotel Reviewer • Visited 100+ riads',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
              },
              content: 'I highly recommend Dar Zambra or Riad Cherifa. Both are within your budget and offer:\n\n• Stunning rooftop views\n• Traditional Moroccan decor\n• Central location in the medina\n• Excellent breakfast included\n\nBook at least 2 months in advance as they fill up quickly!',
              upvotes: 92,
              comments: 4,
              timestamp: '3h ago'
            }
          ]
        }
      ]
    }
  }
];

const navigationItems = [
  { type: 'places', icon: <MapPin size={20} />, label: 'Places' },
  { type: 'activities', icon: <Calendar size={20} />, label: 'Activities' },
  { type: 'events', icon: <Calendar size={20} />, label: 'Events' },
  { type: 'hotels', icon: <Hotel size={20} />, label: 'Hotels' },
  { type: 'products', icon: <ShoppingBag size={20} />, label: 'Products' },
  { type: 'restaurants', icon: <Utensils size={20} />, label: 'Restaurants' },
  { type: 'transport', icon: <Car size={20} />, label: 'Transport' }
];

const ChefchaouenPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedContent, setSelectedContent] = useState<'slideshow' | 'places' | 'activities' | 'events' | 'hotels' | 'products' | 'restaurants' | 'transport'>('slideshow');
  const [selectedSidebarItem, setSelectedSidebarItem] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderSidebarContent = () => {
    const item = sidebarNavigation.find(s => s.id === selectedSidebarItem);
    if (!item) return null;

    if (typeof item.content === 'string') {
      return (
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-medium text-slate-800 mb-2">{item.title}</h3>
          <p className="text-sm text-slate-600 whitespace-pre-line">{item.content}</p>
        </div>
      );
    }

    switch (item.content.type) {
      case 'weather':
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="mb-6">
              <h3 className="font-medium text-slate-800 mb-4">Current Weather</h3>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-slate-700">{item.content.current.temp}°C</div>
                <div className="text-slate-600">{item.content.current.condition}</div>
              </div>
              <div className="mt-2 text-sm text-slate-500">
                <div>Humidity: {item.content.current.humidity}%</div>
                <div>Wind: {item.content.current.wind} km/h</div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 mb-2">5-Day Forecast</h4>
              <div className="space-y-2">
                {item.content.forecast.map(day => (
                  <div key={day.day} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{day.day}</span>
                    <span className="text-slate-700">{day.high}° / {day.low}°</span>
                    <span className="text-slate-600">{day.condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'seasons':
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium text-slate-800 mb-4">When to Visit Chefchaouen</h3>
            <div className="space-y-4">
              {item.content.recommendations.map(season => (
                <div key={season.season} className="border-b border-slate-200 pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-700">{season.season}</h4>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < season.rating ? 'text-yellow-400' : 'text-slate-300'}
                          fill={i < season.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">{season.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'forum':
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="mb-6 flex justify-between items-center">
              <h3 className="font-medium text-slate-800">Recent Questions</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Ask Question
              </button>
            </div>
            <div className="space-y-6">
              {item.content.topics.map(topic => (
                <div key={topic.id} className="border-b border-slate-200 pb-6 last:border-0">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={topic.author.avatar} 
                      alt={topic.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-slate-900">{topic.author.name}</h4>
                      <p className="text-xs text-slate-500">{topic.author.credentials}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{topic.title}</h3>
                  <p className="text-slate-600 mb-4">{topic.content}</p>
                  <div className="flex items-center gap-6 mb-6">
                    <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
                      <ThumbsUp size={18} />
                      <span>{topic.upvotes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
                      <MessageCircle size={18} />
                      <span>{topic.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
                      <Share2 size={18} />
                      <span>{topic.shares}</span>
                    </button>
                    <button className="ml-auto text-slate-400 hover:text-slate-600">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  
                  {topic.answers.map(answer => (
                    <div key={answer.id} className="bg-slate-50 rounded-lg p-4 ml-6">
                      <div className="flex items-start gap-3 mb-3">
                        <img 
                          src={answer.author.avatar} 
                          alt={answer.author.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-medium text-slate-900">{answer.author.name}</h5>
                          <p className="text-xs text-slate-500">{answer.author.credentials}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 whitespace-pre-line">{answer.content}</p>
                      <div className="flex items-center gap-6 mt-4">
                        <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
                          <ThumbsUp size={16} />
                          <span>{answer.upvotes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
                          <MessageCircle size={16} />
                          <span>{answer.comments}</span>
                        </button>
                        <span className="text-sm text-slate-400">{answer.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );

      case 'map':
        return (
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-medium text-slate-800 mb-4">Interactive Map</h3>
            <div className="bg-slate-100 h-[400px] rounded-lg flex items-center justify-center">
              <p className="text-slate-600">Map integration will be implemented here</p>
            </div>
            <div className="mt-4 space-y-2">
              {item.content.markers.map(marker => (
                <div key={marker.title} className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="font-medium text-slate-700">{marker.title}</span>
                  <span className="text-slate-500">- {marker.description}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderContent = () => {
    if (selectedContent === 'slideshow') {
      return (
        <div className="p-6">
          {renderSidebarContent()}
        </div>
      );
    }

    let cards;
    switch (selectedContent) {
      case 'places':
        cards = placeCards;
        break;
      case 'hotels':
        cards = hotelCards;
        break;
      case 'products':
        cards = productCards;
        break;
      case 'restaurants':
        cards = restaurantCards;
        break;
      case 'transport':
        cards = transportCards;
        break;
      default:
        cards = [];
    }

    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{card.name}</h3>
                  {'rating' in card && (
                    <div className="flex items-center text-white/90">
                      <Star size={16} className="fill-current text-yellow-400" />
                      <span className="ml-1">{card.rating}</span>
                      <span className="mx-1">·</span>
                      <span>{card.reviews} reviews</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <p className="text-slate-600 text-sm mb-3">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {card.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  {'price' in card && (
                    <span className="text-slate-700 font-medium">{card.price}</span>
                  )}
                  {'priceRange' in card && (
                    <span className="text-slate-700 font-medium">{card.priceRange}</span>
                  )}
                  {'duration' in card && (
                    <span className="text-slate-600">{card.duration}</span>
                  )}
                  {'artisan' in card && (
                    <span className="text-slate-600 text-xs">{card.artisan}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Categories Button - Top Left */}
            <div className="flex items-center">
              <CategoriesDropdown />
            </div>

            {/* Logo - Center */}
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
                  <circle cx="22" cy="22" r="20" fill="url(#logoGradient)" filter="url(#glow)" opacity="0.1"/>
                  <circle cx="22" cy="22" r="18" stroke="url(#logoGradient)" strokeWidth="2" fill="none"/>
                  <path d="M22 8L32 14V30L22 36L12 30V14L22 8Z" fill="url(#logoGradient)" opacity="0.8"/>
                  <circle cx="22" cy="22" r="8" fill="white"/>
                  <path d="M18 19C18 17.3 19.3 16 21 16C22.7 16 24 17.3 24 19C24 20.2 23.3 21 22.2 21.8L18 25H24V27H16V24.5L21.5 20.5C22.2 20 22 19.5 22 19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19H18Z" fill="url(#logoGradient)"/>
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

            {/* Top Right Actions */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Link 
                to="/auth"
                className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar Navigation */}
        <div className="w-80 bg-white border-r border-slate-200 overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-800 mb-1">Chefchaouen</h1>
            <p className="text-slate-500 text-sm mb-6">Culture & Heritage</p>
            
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">Navigation</h2>
              {sidebarNavigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedSidebarItem(item.id);
                    setSelectedContent('slideshow');
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center ${
                    selectedSidebarItem === item.id && selectedContent === 'slideshow'
                      ? 'bg-purple-50 text-purple-700'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Slideshow - Always visible */}
          <div className="relative h-[300px] overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt="Chefchaouen"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
              </div>
            ))}
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-4' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation - Under slideshow */}
          <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
            <div className="container mx-auto px-4">
              <nav className="flex justify-center">
                {navigationItems.map(({ type, icon, label }) => (
                  <button
                    key={type}
                    onClick={() => setSelectedContent(type as typeof selectedContent)}
                    className={`px-6 py-4 flex items-center gap-2 transition-colors ${
                      selectedContent === type
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {icon}
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </div>
      </div>

      {/* Chatbot Widget */}
      <ChatBot />
    </div>
  );
};

export default ChefchaouenPage;


import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, MapPin, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUsSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('whyChooseUs.recommendation.title'),
      description: t('whyChooseUs.recommendation.desc')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('whyChooseUs.intelligence.title'),
      description: t('whyChooseUs.intelligence.desc')
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: t('whyChooseUs.ai.title'),
      description: t('whyChooseUs.ai.desc')
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-purple-600">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-gray-900">{feature.title}</span>
                </div>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed ml-10">
                    {feature.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

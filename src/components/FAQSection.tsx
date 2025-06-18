
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Comment contacter un acteur ?",
      answer: "Vous pouvez contacter directement un acteur en cliquant sur sa fiche et en utilisant les informations de contact fournies. Vous pouvez également utiliser notre système de messagerie intégré pour communiquer en toute sécurité."
    },
    {
      question: "Puis-je laisser un avis ?",
      answer: "Absolument ! Après avoir visité un établissement ou utilisé un service, vous pouvez laisser un avis et une note. Cela aide la communauté à faire de meilleurs choix et permet aux acteurs d'améliorer leurs services."
    },
    {
      question: "Comment proposer mon activité ?",
      answer: "Si vous êtes un professionnel, vous pouvez rejoindre notre plateforme en cliquant sur 'Sell With Us' dans le menu principal. Notre équipe vous guidera dans le processus d'inscription et de mise en ligne de votre activité."
    },
    {
      question: "Les réservations sont-elles gratuites ?",
      answer: "La navigation et la recherche sur Place2 sont entièrement gratuites. Certains services peuvent avoir des frais de réservation, qui seront clairement indiqués avant la confirmation de votre réservation."
    },
    {
      question: "Que faire en cas de problème avec une réservation ?",
      answer: "Notre service client est disponible 24h/7j pour vous aider. Vous pouvez nous contacter via le chat en ligne, par email ou par téléphone. Nous nous engageons à résoudre rapidement tout problème."
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
            Questions Fréquentes
          </h2>
          <p className="text-lg text-gray-600">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
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

export default FAQSection;

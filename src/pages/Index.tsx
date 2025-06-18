
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import TrendingActivities from '../components/TrendingActivities';
import ActivitiesSection from '../components/ActivitiesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      <HeroSection />
      <TrendingActivities />
      <ActivitiesSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
};

export default Index;

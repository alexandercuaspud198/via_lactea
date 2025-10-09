import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import ExperienceTimeline from '../components/ExperienceTimeline';
import DairyProcessors from '../components/DairyProcessors';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-page">
      <Header />
      <HeroSection />
      <ValueProposition />
      <ExperienceTimeline />
      <DairyProcessors />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
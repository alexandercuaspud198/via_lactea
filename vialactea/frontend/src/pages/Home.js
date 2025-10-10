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
      <div id="hero">
        <HeroSection />
      </div>
      <ValueProposition />
      <div id="experiencia">
        <ExperienceTimeline />
      </div>
      <div id="aliados">
        <DairyProcessors />
      </div>
      <div id="eventos">
        <Events />
      </div>
      <div id="testimonios">
        <Testimonials />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
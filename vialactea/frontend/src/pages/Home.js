import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import ExperienceTimeline from '../components/ExperienceTimeline';
import DairyProcessors from '../components/DairyProcessors';
import Gallery from '../components/Gallery';
import Astroturismo from '../components/Astroturismo';
import Gastronomia from '../components/Gastronomia';
import Testimonials from '../components/Testimonials';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-page">
      <Helmet>
        <title>Vía Láctea Guachucal | Turismo Agroecológico en Nariño, Colombia</title>
        <meta name="description" content="Descubre la auténtica experiencia del municipio lechero en el corazón de los Andes nariñenses. Tours de ordeño, astroturismo, gastronomía y paisajes únicos en Guachucal, Nariño, Colombia." />
        <meta property="og:title" content="Vía Láctea Guachucal | Turismo Agroecológico en Nariño" />
        <meta property="og:description" content="Descubre la auténtica experiencia del municipio lechero en el corazón de los Andes nariñenses. Tours de ordeño, astroturismo, gastronomía y paisajes únicos." />
        <meta property="og:url" content="https://www.vialacteaguachucal.com" />
        <meta property="og:image" content="https://www.vialacteaguachucal.com/img/herobaner6.jpeg" />
      </Helmet>
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <ValueProposition />
      <div id="experiencia">
        <ExperienceTimeline />
      </div>
      <div id="galeria">
        <Gallery />
      </div>
      <div id="astroturismo">
        <Astroturismo />
      </div>
      <div id="gastronomia">
        <Gastronomia />
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

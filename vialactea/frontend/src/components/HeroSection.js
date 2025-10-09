import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { heroData } from '../mock/data';
import { Play, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [currentLiters, setCurrentLiters] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Animación del contador
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLiters(prev => {
        if (prev < heroData.dailyLitersProcessed ) {
          return prev + Math.floor(heroData.dailyLitersProcessed / 100);
        }
        return heroData.dailyLitersProcessed;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppReservation = () => {
    const message = encodeURIComponent("Hola! Me interesa hacer una reserva para la experiencia turística en Guachucal.");
    window.open(`https://wa.me/${heroData.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="hero"     
    
      aria-label="Sección principal de bienvenida"
      className="relative flex flex-col items-center justify-center py-20 bg-cover bg-center bg-gray-200"
      style={{ backgroundImage: "url('/img/herobaner6.jpeg')" }}

    >

      {/* Fondo con video o imagen */}
      <div className="absolute inset-0 w-full h-full"></div>


        {/* Overlay con opacidad */}
      <div className="absolute inset-0 bg-white/45"></div>



      {/* Contenido principal */}
      <div className="relative z-10 hero-content text-center">
        
        <h1 className="hero-title mb-6 !text-[#1B1634]">
          {heroData.title}
        </h1>

        <p className="text-center text-white text-lg font-medium px-4 py-2 rounded-lg bg-black/50 backdrop-blur-smg">
          {heroData.subtitle}
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">

          <Button 
            className="bg-[#F7A219] text-[#1B1634] hover:bg-yellow-500 text-lg px-8 py-4 min-h-14 shadow-lg rounded-2xl"
          >
            Ver Experiencias
          </Button>
        </div>

        {/* Contador en vivo */}
        <div className="bg-[#F7A219]/5 backdrop-blur-md rounded-lg p-2 max-w-md mx-auto border border-[#F7A219]/10">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2 text-[#1B1634]">
              {currentLiters.toLocaleString()}
            </div>
            <div className="text-sm opacity-90">
              Metros más cerca a las estrellas
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

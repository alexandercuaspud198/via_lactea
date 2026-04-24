import React, { useState, useEffect, useRef, useMemo } from 'react';
import { heroData } from '../mock/data';

const heroImages = [
  'img/herobaner.png',
  'img/herobaner2.png',
  'img/herobaner3.webp',
  'img/herobaner4.jpg',
  'img/herobaner5.jpg',
  'img/herobaner6.jpeg',
];

// Burbujas generadas una sola vez (no se regeneran en cada render)
const useMilkParticles = () =>
  useMemo(() => {
    const bubbles = Array.from({ length: 24 }, (_, i) => ({
      id: `b${i}`,
      left: `${4 + Math.random() * 92}%`,
      bottom: `${Math.random() * 18}%`,
      size: Math.random() * 14 + 4,        // 4 – 18 px
      delay: `${(Math.random() * 10).toFixed(2)}s`,
      duration: `${(4 + Math.random() * 7).toFixed(2)}s`,
    }));

    const drops = Array.from({ length: 6 }, (_, i) => ({
      id: `d${i}`,
      left: `${8 + Math.random() * 84}%`,
      width: Math.random() * 8 + 5,        // 5 – 13 px
      height: Math.random() * 12 + 8,      // 8 – 20 px
      delay: `${(Math.random() * 12).toFixed(2)}s`,
      duration: `${(6 + Math.random() * 8).toFixed(2)}s`,
    }));

    const ripples = [
      { id: 'r0', left: '30%',  top: '68%', size: 120, delay: '0s',   duration: '5s' },
      { id: 'r1', left: '65%',  top: '75%', size: 90,  delay: '1.8s', duration: '5s' },
      { id: 'r2', left: '50%',  top: '82%', size: 160, delay: '3.5s', duration: '5s' },
    ];

    return { bubbles, drops, ripples };
  }, []);

// Camino SVG de la ola (dos períodos completos = 200% de ancho → loop perfecto)
const WAVE_PATH =
  'M0,42 C90,0 180,84 360,42 C540,0 630,84 720,42 C810,0 900,84 1080,42 C1260,0 1350,84 1440,42 ' +
  'C1530,0 1620,84 1800,42 C1980,0 2070,84 2160,42 C2250,0 2340,84 2520,42 C2700,0 2790,84 2880,42 ' +
  'L2880,80 L0,80 Z';

const WAVE_PATH_2 =
  'M0,55 C180,20 360,80 720,55 C900,30 1080,80 1440,55 ' +
  'C1620,30 1800,80 2160,55 C2340,30 2520,80 2880,55 ' +
  'L2880,80 L0,80 Z';

const HeroSection = () => {
  const [currentLiters, setCurrentLiters] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const parallaxRef = useRef(null);
  const { bubbles, drops, ripples } = useMilkParticles();

  // Contador con easing ease-out
  useEffect(() => {
    const target = heroData.dailyLitersProcessed;
    let current = 0;
    const timer = setInterval(() => {
      const step = Math.ceil((target - current) / 18);
      current = Math.min(current + step, target);
      setCurrentLiters(current);
      if (current >= target) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // Crossfade cada 4 segundos
  useEffect(() => {
    const id = setInterval(() => setCurrentImage(p => (p + 1) % heroImages.length), 4000);
    return () => clearInterval(id);
  }, []);

  // Parallax en scroll
  useEffect(() => {
    const handle = () => {
      if (!parallaxRef.current) return;
      const frac = Math.min(window.scrollY / window.innerHeight, 1);
      parallaxRef.current.style.transform = `translateY(${frac * 25}%)`;
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola! Me interesa hacer una reserva para la experiencia turística en Guachucal.');
    window.open(`https://wa.me/${heroData.whatsappNumber}?text=${msg}`, '_blank');
  };

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      aria-label="Sección principal de bienvenida"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      {/* ── Imágenes con parallax ── */}
      <div
        ref={parallaxRef}
        aria-hidden="true"
        style={{ position: 'absolute', top: '-15%', left: 0, right: 0, bottom: '-15%', willChange: 'transform' }}
      >
        {heroImages.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${img}')`,
              opacity: i === currentImage ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              zIndex: i === currentImage ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* ── Overlay oscuro ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(13,11,43,0.88) 0%, rgba(13,11,43,0.45) 45%, rgba(13,11,43,0.22) 100%)',
          zIndex: 2,
        }}
      />

      {/* ── BURBUJAS DE LECHE ── */}
      {bubbles.map(b => (
        <span
          key={b.id}
          aria-hidden="true"
          className="milk-bubble"
          style={{
            left: b.left,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}

      {/* ── GOTAS CAYENDO ── */}
      {drops.map(d => (
        <span
          key={d.id}
          aria-hidden="true"
          className="milk-drop"
          style={{
            left: d.left,
            top: '-20px',
            width: d.width,
            height: d.height,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}

      {/* ── RIPPLES DE SALPICADURA ── */}
      {ripples.map(r => (
        <span
          key={r.id}
          aria-hidden="true"
          className="milk-ripple"
          style={{
            left: r.left,
            top: r.top,
            width: r.size,
            height: r.size,
            animationDelay: r.delay,
            animationDuration: r.duration,
          }}
        />
      ))}

      {/* ── BRILLO SUAVE EN LA PARTE BAJA ── */}
      <div aria-hidden="true" className="milk-sheen" style={{ zIndex: 3 }} />

      {/* ── Contenido ── */}
      <div className="relative text-center px-6 max-w-3xl mx-auto" style={{ zIndex: 5 }}>
        <h1 className="hero-title mb-5">{heroData.title}</h1>

        <p className="hero-subtitle mb-10 max-w-xl mx-auto">{heroData.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={handleWhatsApp}
            style={{
              backgroundColor: '#E8A833', color: '#0D0B2B',
              fontFamily: 'Satoshi, sans-serif', fontWeight: 700, fontSize: '1.05rem',
              padding: '14px 32px', borderRadius: '14px', border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(232,168,51,0.35)', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#D4942A'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#E8A833'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Reservar Experiencia
          </button>

          <button
            onClick={() => scrollTo('#experiencia')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.12)', color: '#F5F0E8',
              fontFamily: 'Satoshi, sans-serif', fontWeight: 600, fontSize: '1.05rem',
              padding: '14px 32px', borderRadius: '14px', border: '1.5px solid rgba(245,240,232,0.35)',
              cursor: 'pointer', backdropFilter: 'blur(8px)', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; }}
          >
            Ver Experiencias
          </button>
        </div>

        <div
          className="rounded-2xl p-5 max-w-xs mx-auto mb-8"
          style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(232,168,51,0.25)' }}
        >
          <div className="text-5xl font-bold mb-1" style={{ color: '#E8A833', fontFamily: 'Cormorant Garamond, serif' }}>
            {currentLiters.toLocaleString('es-CO')}
          </div>
          <div className="text-sm" style={{ color: 'rgba(245,240,232,0.75)' }}>
            Metros más cerca a las estrellas
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              aria-label={`Imagen ${i + 1}`}
              style={{
                width: i === currentImage ? '24px' : '8px', height: '8px',
                borderRadius: '4px', border: 'none', cursor: 'pointer', padding: 0,
                backgroundColor: i === currentImage ? '#E8A833' : 'rgba(245,240,232,0.35)',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── OLA DE LECHE (transición al fondo del hero) ── */}
      <div aria-hidden="true" className="milk-wave-wrap">
        <svg
          className="milk-wave-svg"
          viewBox="0 0 2880 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={WAVE_PATH} fill="#F5F0E8" />
        </svg>
        <svg
          className="milk-wave-svg-2"
          viewBox="0 0 2880 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={WAVE_PATH_2} fill="rgba(245,240,232,0.6)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

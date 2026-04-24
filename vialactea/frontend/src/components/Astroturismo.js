import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { weatherData } from '../mock/data';

const constellations = [
  {
    name: 'Orión',
    symbol: '⭐',
    months: 'Nov – Feb',
    featured: true,
    description: 'La constelación más reconocible del cielo ecuatorial. Sus tres estrellas del cinturón son perfectamente visibles desde Guachucal.',
  },
  {
    name: 'Cruz del Sur',
    symbol: '✦',
    months: 'Mar – Jul',
    featured: true,
    description: 'El icono del hemisferio sur. Desde el altiplano nariñense se ve completa a baja altura sobre el horizonte sur.',
  },
  {
    name: 'Sagitario',
    symbol: '🏹',
    months: 'Jun – Oct',
    featured: true,
    description: 'Apunta al centro de la Vía Láctea. En agosto, la franja láctea es densa y espectacular desde esta latitud ecuatorial.',
  },
  {
    name: 'Escorpión',
    symbol: '🦂',
    months: 'May – Sep',
    featured: false,
    description: 'Con Antares, su supergigante roja, como corazón. Perfectamente visible a media altura en el cielo austral.',
  },
  {
    name: 'Centauro',
    symbol: '🌟',
    months: 'Mar – Jul',
    featured: false,
    description: 'Contiene Alfa Centauri, el sistema estelar más cercano al Sol a 4,37 años luz de distancia.',
  },
  {
    name: 'Piscis Austrinus',
    symbol: '✨',
    months: 'Sep – Nov',
    featured: false,
    description: 'Incluye Fomalhaut, una de las estrellas más brillantes del cielo austral, visible en otoño boreal.',
  },
];

const moonPhaseMap = {
  'Luna Nueva':       { emoji: '🌑', stars: 5, label: 'Condiciones Perfectas',    tip: 'Sin luna — el cielo más oscuro del mes. La Vía Láctea se ve a simple vista.' },
  'Cuarto creciente': { emoji: '🌓', stars: 4, label: 'Muy Buenas Condiciones',   tip: 'La Luna se pone a medianoche. Madrugada ideal para la observación profunda.' },
  'Luna Llena':       { emoji: '🌕', stars: 2, label: 'Luminosidad Alta',         tip: 'Perfecta para fotografiar el paisaje lunar andino y las nevadas del Cumbal.' },
  'Cuarto menguante': { emoji: '🌗', stars: 4, label: 'Buenas Condiciones',       tip: 'La Luna sale tarde. Primera mitad de la noche oscura, ideal para observar.' },
};

const stats = [
  { value: '3.000', unit: 'msnm', label: 'altitud del altiplano' },
  { value: '300+', unit: 'noches', label: 'despejadas por año' },
  { value: '7.000+', unit: 'estrellas', label: 'visibles a ojo desnudo' },
  { value: '~0', unit: 'lux', label: 'contaminación lumínica' },
];

const STAR_COUNT = 250;

const Astroturismo = () => {
  const starsRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const moonKey = weatherData.moonPhase;
  const moon = moonPhaseMap[moonKey] || moonPhaseMap['Cuarto creciente'];

  useEffect(() => {
    const g = starsRef.current;
    if (!g) return;
    const items = Array.from({ length: STAR_COUNT }, () => {
      const x = (Math.random() * 100).toFixed(2);
      const y = (Math.random() * 100).toFixed(2);
      const r = (Math.random() * 1.6 + 0.2).toFixed(2);
      const op = (Math.random() * 0.65 + 0.25).toFixed(2);
      const dur = (Math.random() * 3 + 2).toFixed(1);
      const delay = (Math.random() * 5).toFixed(1);
      return `<circle cx="${x}%" cy="${y}%" r="${r}" fill="white" opacity="${op}">
        <animate attributeName="opacity" values="${op};${(+op * 0.35).toFixed(2)};${op}" dur="${dur}s" begin="${delay}s" repeatCount="indefinite"/>
      </circle>`;
    });
    g.innerHTML = items.join('');
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="astroturismo" className="astro-section py-24" ref={sectionRef}>
      {isVisible && (
        <Helmet>
          <title>Astroturismo en Guachucal | Cielos Andinos sin Contaminación Lumínica | Vía Láctea</title>
          <meta name="description" content="Observa más de 7.000 estrellas a 3.000 msnm en Guachucal, Nariño. Astroturismo único en los Andes colombianos con 300+ noches despejadas al año. Reserva tu experiencia estelar." />
        </Helmet>
      )}
      {/* Nebula blobs */}
      <div className="astro-nebula astro-nebula-1" />
      <div className="astro-nebula astro-nebula-2" />
      <div className="astro-milky-way" />

      {/* Animated star field */}
      <svg
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}
        preserveAspectRatio="xMidYMid slice"
      >
        <g ref={starsRef} />
      </svg>

      {/* Shooting stars */}
      {[
        { top: '10%', left: '15%', width: 90,  delay: '1s',   dur: '7s'  },
        { top: '28%', left: '58%', width: 130, delay: '4.2s', dur: '9.5s'},
        { top: '60%', left: '5%',  width: 70,  delay: '7s',   dur: '8s'  },
        { top: '42%', left: '75%', width: 55,  delay: '11s',  dur: '6s'  },
      ].map((s, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{ top: s.top, left: s.left, width: s.width, animationDelay: s.delay, animationDuration: s.dur }}
        />
      ))}

      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>

        {/* Title */}
        <div className="text-center mb-14">
          <div className="text-5xl mb-4" aria-hidden>🔭</div>
          <h2 className="heading-2 text-white mb-4 reveal-up">Astroturismo en Guachucal</h2>
          <p className="body-large max-w-2xl mx-auto reveal-up stagger-1"
            style={{ color: 'rgba(245,240,232,0.75)' }}>
            A 3.000 msnm, lejos de la contaminación lumínica, el cielo del altiplano nariñense
            es uno de los espectáculos naturales más impresionantes de Colombia.
          </p>
        </div>

        {/* Moon phase + stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="moon-phase-card md:col-span-1 reveal-scale">
            <div className="text-6xl mb-3">{moon.emoji}</div>
            <div className="text-white font-bold text-xl mb-1">{moonKey}</div>
            <div className="text-sm font-medium mb-3" style={{ color: 'var(--brand-primary)' }}>
              {'⭐'.repeat(moon.stars)}{'☆'.repeat(5 - moon.stars)} · {moon.label}
            </div>
            <p style={{ color: 'rgba(245,240,232,0.62)', fontSize: 13, lineHeight: 1.55 }}>{moon.tip}</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4 content-center">
            {stats.map((s, i) => (
              <div key={i} className={`text-center constellation-card reveal-scale stagger-${i + 1}`}>
                <div className="text-3xl font-bold" style={{ color: 'var(--brand-primary)' }}>{s.value}</div>
                <div className="text-white text-sm font-medium">{s.unit}</div>
                <div style={{ color: 'rgba(245,240,232,0.5)', fontSize: 11, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Constellations grid */}
        <h3 className="heading-3 text-center text-white mb-8 reveal-up">
          Constelaciones Visibles desde Guachucal
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {constellations.map((c, i) => (
            <div
              key={c.name}
              className={`constellation-card${c.featured ? ' featured' : ''} reveal-up stagger-${(i % 3) + 1}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl" aria-hidden>{c.symbol}</span>
                <div>
                  <h4 className="text-white font-semibold text-base leading-tight">{c.name}</h4>
                  <span className="text-xs font-medium" style={{ color: 'var(--brand-primary)' }}>
                    Mejor época: {c.months}
                  </span>
                </div>
                {c.featured && (
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(232,168,51,0.15)', color: 'var(--brand-primary)', border: '1px solid rgba(232,168,51,0.25)' }}>
                    Destacada
                  </span>
                )}
              </div>
              <p style={{ color: 'rgba(245,240,232,0.68)', fontSize: 13, lineHeight: 1.55 }}>{c.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal-up">
          <a
            href={`https://wa.me/573215654899?text=${encodeURIComponent('Hola! Me interesa reservar una noche de Astroturismo en Guachucal.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', gap: 8 }}
          >
            <span>🔭</span> Reservar Noche de Estrellas
          </a>
        </div>

      </div>
    </section>
  );
};

export default Astroturismo;

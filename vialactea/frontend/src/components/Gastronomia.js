import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

const dishes = [
  {
    name: 'Quesillo Artesanal',
    emoji: '🧀',
    image: 'img/quesillo.jpg',
    tag: 'Insignia Regional',
    tagColor: '#E8A833',
    description: 'El tesoro lácteo de Guachucal. Elaborado a mano desde las 4 AM con leche recién ordeñada — hilos elásticos, nata perfecta y sabor inigualable.',
    origin: 'Tradición familiar de más de 100 años',
  },
  {
    name: 'Cuy al Carbón',
    emoji: '🍖',
    image: 'img/cuy.jpg',
    tag: 'Patrimonio Cultural',
    tagColor: '#2C4A3E',
    description: 'Preparado con papas criollas, maíz tostado y ají nariñense. El sabor más auténtico de las celebraciones andinas y fiestas patronales.',
    origin: 'Herencia culinaria precolombina',
  },
  {
    name: 'Papas Criollas',
    emoji: '🥔',
    image: 'img/papas.jpg',
    tag: 'Producto Estrella',
    tagColor: '#3D1C02',
    description: 'Las mejores papas de Colombia crecen a 3.000 msnm en el altiplano nariñense. Con hogao casero, crema de leche o simplemente sancochadas.',
    origin: 'Altiplano 2.800 – 3.200 msnm',
  },
  {
    name: 'Chicha de Maíz',
    emoji: '🫙',
    image: 'img/chicha.jpg',
    tag: 'Bebida Ancestral',
    tagColor: '#5C3D1E',
    description: 'Bebida fermentada elaborada con maíz morado del Cumbal. Dulce, refrescante y cargada de la historia de los Pastos precolombinos.',
    origin: 'Receta de los Pastos precolombinos',
  },
];

const quesilloSteps = [
  { num: 1, title: 'Ordeño', desc: '5:00 AM — Leche fresca, 4 °C al instante en tanques de frío' },
  { num: 2, title: 'Cuajado', desc: 'Cuajo natural. 30 min de reposo en pailas de cobre artesanales' },
  { num: 3, title: 'Desuerado', desc: 'Corte y prensado manual. El suero se extrae en espiral' },
  { num: 4, title: 'Hilado en Agua Caliente', desc: 'A 80 °C la cuajada se vuelve elástica, brillante y moldeable' },
  { num: 5, title: 'Moldeado', desc: 'Bola perfecta formada a mano. Baño final en salmuera artesanal' },
  { num: 6, title: 'Del ordeño a tu mesa', desc: 'En 4 horas: fresco, suave y listo para degustar con hogao' },
];

const markets = [
  { name: 'Mercado Campesino', desc: 'Domingos — Plaza Central de Guachucal. Frutas, verduras y lácteos frescos' },
  { name: 'Mantequilla Andina', desc: 'Elaborada con crema de leche fresca, sal' },
  { name: 'Miel de Abejas', desc: 'Producción apícola local de los jardines del altiplano nariñense' },
];

const Gastronomia = () => {
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="gastronomia" className="py-24 bg-section" ref={sectionRef}>
      {isVisible && (
        <Helmet>
          <title>Quesillo Artesanal y Gastronomía Nariñense | Vía Láctea Guachucal</title>
          <meta name="description" content="Descubre el auténtico quesillo artesanal de Guachucal elaborado desde las 4 AM con leche recién ordeñada. Cuy al carbón, papas criollas y chicha de maíz en el corazón de Nariño." />
        </Helmet>
      )}
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-primary reveal-up">Gastronomía Nariñense</h2>
          <p className="body-large text-secondary max-w-2xl mx-auto reveal-up stagger-1">
            Sabores únicos forjados a 3.000 metros: leche fresca, quesillo artesanal,
            papas criollas y la hospitalidad incondicional del pueblo de Guachucal
          </p>
        </div>

        {/* Platos principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {dishes.map((dish, i) => (
            <div key={dish.name} className={`food-card reveal-up stagger-${(i % 4) + 1}`}>
              {dish.image ? (
                <div className="food-card-img-wrap">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                </div>
              ) : (
                <div className="food-card-emoji">{dish.emoji}</div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-base text-primary leading-tight">{dish.name}</h3>
                  <span
                    className="text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap flex-shrink-0"
                    style={{
                      backgroundColor: dish.tagColor + '18',
                      color: dish.tagColor,
                      border: `1px solid ${dish.tagColor}30`,
                    }}
                  >
                    {dish.tag}
                  </span>
                </div>
                <p className="text-sm text-secondary mb-3 leading-relaxed">{dish.description}</p>
                <p className="text-xs text-muted italic">{dish.origin}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Proceso artesanal quesillo + Productos del mercado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">

          {/* Proceso artesanal */}
          <div className="reveal-left">
            <h3 className="heading-3 text-primary mb-6">
              Proceso del Quesillo
            </h3>
            <div className="service-card process-steps-line">
              <div className="space-y-5">
                {quesilloSteps.map((step) => (
                  <button
                    key={step.num}
                    className="flex items-start gap-4 w-full text-left group"
                    onClick={() => setActiveStep(activeStep === step.num ? null : step.num)}
                  >
                    <div
                      className="process-step-num transition-transform duration-200"
                      style={activeStep === step.num ? { transform: 'scale(1.12)' } : {}}
                    >
                      {step.num}
                    </div>
                    <div className="pt-1.5 flex-1">
                      <h4 className="font-semibold text-sm text-primary group-hover:text-brand-primary transition-colors">
                        {step.title}
                      </h4>
                      <p
                        className="text-sm text-secondary mt-0.5 overflow-hidden transition-all duration-300"
                        style={{ maxHeight: activeStep === step.num ? 80 : 0, opacity: activeStep === step.num ? 1 : 0 }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted mt-4 text-center">Toca cada paso para ver el detalle</p>
            </div>
          </div>

          {/* Productos del mercado */}
          <div className="reveal-right">
            <h3 className="heading-3 text-primary mb-6">
              Productos Artesanales
            </h3>
            <div className="space-y-4">
              {markets.map((m, i) => (
                <div key={i} className="service-card flex items-start gap-4 py-4 px-5">
                  <span className="text-3xl flex-shrink-0">{m.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">{m.name}</h4>
                    <p className="text-sm text-secondary leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center reveal-up">
          <a
            href={`https://wa.me/573215654899?text=${encodeURIComponent('Hola! Me interesa el tour gastronómico en Guachucal.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', gap: 8 }}
          >
            <span>🍽️</span> Reservar Experiencia Gastronómica
          </a>
        </div>

      </div>
    </section>
  );
};

export default Gastronomia;

import React from 'react';

const routesPasto = [
  {
    emoji: '🚌',
    mode: 'Bus Directo',
    time: '90 min',
    cost: '$20.000',
    freq: 'Cada 30 min',
    detail: 'Terminal de Transportes de Pasto → Guachucal. Empresa Cootranar o Cootransnar.',
  },
  {
    emoji: '🚗',
    mode: 'Vehículo Propio',
    time: '75 min',
    cost: '~$25.000 gasolina',
    freq: 'Sin horario',
    detail: 'Vía Panamericana Norte hasta Túquerres, luego desvío a Guachucal.',
  },

];

const routesIpiales = [
  {
    emoji: '🚕',
    mode: 'Taxi',
    time: '40 min',
    cost: '$10.000',
    freq: 'A demanda',
    detail: 'Desde el centro de Ipiales o desde el paso fronterizo Rumichaca.',
  },
  {
    emoji: '🚗',
    mode: 'Vehículo Propio',
    time: '40 min',
    cost: '~$15.000 gasolina',
    freq: 'Sin horario',
    detail: 'Desde el centro de Ipiales o desde el paso fronterizo Rumichaca',
  },
];

const tips = [
  'Lleva ropa abrigada — las madrugadas llegan a 6 °C',
  'No olvides protector solar y gorra para el día',
  'Zapatos cómodos o botas de campo para caminatas',
  'Cámara lista para los paisajes y el amanecer',
  'El mercado campesino es los sábados en la plaza central',
  'Reserva con 48 h de anticipación en temporada alta',
];

const RouteCards = ({ routes }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {routes.map((r) => (
      <div key={r.mode} className="transport-card">
        <div className="transport-emoji">{r.emoji}</div>
        <div className="font-semibold text-sm text-primary mb-3">{r.mode}</div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="transport-stat">
            <div className="transport-stat-label">Tiempo</div>
            <div className="transport-stat-value" style={{ color: 'var(--paramo)' }}>{r.time}</div>
          </div>
          <div className="transport-stat">
            <div className="transport-stat-label">Costo</div>
            <div className="transport-stat-value" style={{ color: 'var(--brand-primary)' }}>{r.cost}</div>
          </div>
          <div className="transport-stat col-span-2">
            <div className="transport-stat-label">Frecuencia</div>
            <div className="transport-stat-value" style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{r.freq}</div>
          </div>
        </div>
        <p className="text-xs text-muted leading-relaxed text-left">{r.detail}</p>
      </div>
    ))}
  </div>
);

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-page">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 text-primary reveal-up">Contáctanos</h2>
          <p className="body-large text-secondary max-w-2xl mx-auto reveal-up stagger-1">
            Planifica tu visita. Juntos descubramos el universo lácteo en Guachucal
          </p>
        </div>

        {/* Tips + Contacto */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

            <div className="reveal-left">
              <div className="service-card">
                <h3 className="service-card-title mb-4">Tips para tu Visita</h3>
                <ul className="space-y-2 text-sm">
                  {tips.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-brand-primary flex-shrink-0">•</span>
                      <span className="text-secondary">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal-right">
              <div className="service-card">
                <h3 className="service-card-title mb-4">Información de Contacto</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    ['📞', '+57 321 565 4899'],
                    ['✉️', 'guachucalrutaagroturistica@gmail.com'],
                    ['📌', 'Guachucal, Nariño, Colombia'],
                    ['📷', '@Via_lactea_guachucal'],
                    ['⏰', 'Atención: Lun – Dom, 7:00 AM – 7:00 PM'],
                  ].map(([icon, text]) => (
                    <li key={text} className="flex items-start space-x-2">
                      <span className="flex-shrink-0">{icon}</span>
                      <span className="text-secondary">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="https://wa.me/573215654899?text=Hola!%20Me%20interesa%20reservar%20una%20experiencia%20en%20Guachucal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                    style={{ display: 'flex', gap: 8 }}
                  >
                    <span>💬</span> Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── RUTA VISUAL PASTO → GUACHUCAL ── */}
          <div className="mb-16">
            <h3 className="heading-3 text-center text-primary mb-10 reveal-up">
              Cómo Llegar a Guachucal
            </h3>

            {/* Desde Pasto */}
            <div className="route-block mb-8 reveal-up stagger-1">
              <div className="route-header">
                <div className="route-city-node">
                  <div className="route-city-icon" style={{ borderColor: 'var(--paramo)', background: 'rgba(44,74,62,0.08)' }}>
                    🏙️
                  </div>
                  <div>
                    <div className="route-city-name">Pasto</div>
                    <div className="route-city-sub">Capital de Nariño · 2.527 msnm</div>
                  </div>
                </div>
                <div className="route-line" />
                <div className="route-arrow">→</div>
                <div className="route-city-node">
                  <div className="route-city-icon" style={{ borderColor: 'var(--brand-primary)', background: 'rgba(232,168,51,0.08)' }}>
                    🌾
                  </div>
                  <div>
                    <div className="route-city-name">Guachucal</div>
                    <div className="route-city-sub">Municipio Lechero · 3.050 msnm</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                    style={{ background: 'rgba(44,74,62,0.1)', color: 'var(--paramo)' }}>
                    ~70 km · 75–90 min
                  </span>
                </div>
              </div>
              <RouteCards routes={routesPasto} />
            </div>

            {/* Desde Ipiales */}
            <div className="route-block reveal-up stagger-2">
              <div className="route-header">
                <div className="route-city-node">
                  <div className="route-city-icon" style={{ borderColor: '#5C3D1E', background: 'rgba(92,61,30,0.08)' }}>
                    🌎
                  </div>
                  <div>
                    <div className="route-city-name">Ipiales</div>
                    <div className="route-city-sub">Frontera Ecuador-Colombia · 2.898 msnm</div>
                  </div>
                </div>
                <div className="route-line" />
                <div className="route-arrow">→</div>
                <div className="route-city-node">
                  <div className="route-city-icon" style={{ borderColor: 'var(--brand-primary)', background: 'rgba(232,168,51,0.08)' }}>
                    🌾
                  </div>
                  <div>
                    <div className="route-city-name">Guachucal</div>
                    <div className="route-city-sub">Municipio Lechero · 3.050 msnm</div>
                  </div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-3 py-1.5 rounded-full font-semibold"
                    style={{ background: 'rgba(92,61,30,0.1)', color: 'var(--text-secondary)' }}>
                    ~30 km · 35–45 min
                  </span>
                </div>
              </div>
              <RouteCards routes={routesIpiales} />
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-4">
            <h3 className="heading-3 text-center mb-8 text-primary reveal-up">
              Ubicación en el Mapa
            </h3>
            <div className="max-w-4xl mx-auto service-card reveal-up stagger-1 p-0 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123!2d-77.6167!3d1.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed4c5c5c5c5c5%3A0x1234567890abcdef!2sGuachucal%2C%20Nari%C3%B1o!5e0!3m2!1ses!2sco!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mapa de Guachucal"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

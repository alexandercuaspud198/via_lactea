import React, { useState, useEffect } from 'react';
import { events } from '../mock/data';
import { Button } from './ui/button';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const Events = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calcular el próximo sábado 11 de octubre automáticamente
  const getNextEventDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11
    
    // Octubre es el mes 9 (0-indexed)
    let eventDate = new Date(currentYear, 9, 11); // 11 de octubre del año actual
    
    // Si ya pasó la fecha este año, usar el próximo año
    if (now > eventDate) {
      eventDate = new Date(currentYear + 1, 9, 11);
    }
    
    return eventDate;
  };

  const nextEvent = events.find(event => event.countdown);
  const nextEventDate = getNextEventDate();

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const difference = nextEventDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calcular inmediatamente
    calculateCountdown();

    // Actualizar cada segundo
    const interval = setInterval(calculateCountdown, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [nextEventDate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="eventos" className="py-24 bg-page">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 text-primary">
            Eventos y Festivales
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Celebra con nosotros las tradiciones y la cultura de Guachucal
          </p>
        </div>

        {/* Countdown Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="service-card bg-gradient-to-r from-orange-50 to-yellow-50 text-center">
            <h3 className="service-card-title mb-4">
              Próximo Evento: {nextEvent ? nextEvent.name : 'Próximo Sábado 11 de Octubre'}
            </h3>
            <p className="service-card-description mb-6">
              {nextEvent ? nextEvent.description : 'Celebración especial en Guachucal'}
            </p>
            
            <div className="text-sm text-secondary mb-4">
              Fecha: {formatDate(nextEventDate)}
            </div>
              
              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-4 mb-6 max-w-md mx-auto">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-brand-primary">
                    {countdown.days}
                  </div>
                  <div className="text-sm text-secondary">Días</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-brand-primary">
                    {countdown.hours}
                  </div>
                  <div className="text-sm text-secondary">Horas</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-brand-primary">
                    {countdown.minutes}
                  </div>
                  <div className="text-sm text-secondary">Min</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-brand-primary">
                    {countdown.seconds}
                  </div>
                  <div className="text-sm text-secondary">Seg</div>
                </div>
              </div>
            </div>
          </div>
       

        {/* Events Grid */}
        <div className="company-grid">
          {events.map((event, index) => (
            <div key={index} className="service-card group">
              <div className="space-y-4">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar size={16} className="text-brand-primary" />
                    <span className="text-sm font-medium text-brand-primary">
                      {formatDate(event.date)}
                    </span>
                  </div>
                  
                  <h3 className="service-card-title mb-2">
                    {event.name}
                  </h3>
                  <p className="service-card-description mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-secondary">
                      <MapPin size={14} />
                      <span>Plaza Central de Guachucal</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary">
                      <Users size={14} />
                      <span>Evento familiar - Entrada libre</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-secondary">
                      <Clock size={14} />
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
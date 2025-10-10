import React from 'react';
import { dairyProcessors, iotData } from '../mock/data';
import { Badge } from './ui/badge';
import { Thermometer, FlaskConical, Clock, TrendingUp } from 'lucide-react';

const DairyProcessors = () => {
  const formatLastUpdate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('es-CO', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <section id="aliados" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 text-primary">
            Empresas Aliadas
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Conoce las empresas aliadas de la via lactea
          </p>
        </div>



        {/* Processors Grid */}
        <div className="company-grid">
          {dairyProcessors.map((processor, index) => (
            <div key={index} className="service-card group">
              <div className="space-y-4">
                <img
                  src={processor.image}
                  alt={processor.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                
                <div>
                  <h3 className="service-card-title mb-2">
                    {processor.name}
                  </h3>
                  <p className="service-card-description mb-4">
                    {processor.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp size={16} className="text-brand-primary" />
                      <span className="font-semibold text-brand-primary">
                        {processor.stats}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">Certificaciones:</p>
                    <div className="flex flex-wrap gap-2">
                      {processor.certifications.map((cert, certIndex) => (
                        <Badge 
                          key={certIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Del Establo a la Mesa Gallery */}
        <div className="mt-16">
          <h3 className="heading-3 text-center mb-8 text-primary">
            Del Establo a la Mesa
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Ordeño", image: "img/ordeño2.jpg" },
              { title: "Recolección", image: "/via_lactea//img/recoleccion.jpg" },
              { title: "Procesamiento", image: "/via_lactea//img/procesamiento.jpg" },
              { title: "Producto Final", image: "/via_lactea//img/producto.jpg" }
            ].map((step, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DairyProcessors;
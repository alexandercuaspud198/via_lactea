import React from 'react';
import { valueProps } from '../mock/data';

const ValueProposition = () => {
  return (
    <section className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <h2 className="heading-2 text-center mb-16 text-primary reveal-up">
          ¿Por qué elegir Guachucal?
        </h2>

        <div className="company-grid max-w-4xl mx-auto">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className={`service-card group cursor-pointer reveal-scale stagger-${index + 1}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-80 h-45 bg-section rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={prop.icon}
                    alt={prop.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="service-card-title">
                  {prop.title}
                </h3>
                <p className="service-card-description">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

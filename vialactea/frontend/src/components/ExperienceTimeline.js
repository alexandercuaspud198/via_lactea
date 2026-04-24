import React, { useState } from 'react';
import { experienceTimeline } from '../mock/data';
import { Clock, Camera, Info } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";

const ExperienceTimeline = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="experiencia" className="py-24 bg-page">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 text-primary reveal-up">
            La Experiencia Completa
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto reveal-up stagger-1">
            Un viaje de 2 días y 1 noche que te conectará con la tradición lechera
            y la belleza natural de los Andes nariñenses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-primary/30 hidden md:block" />

            <div className="space-y-12">
              {experienceTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 reveal-left stagger-${(index % 3) + 1}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-brand-primary rounded-full border-4 border-white shadow-lg relative z-10">
                    <Clock size={24} className="text-white" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1">
                    <div className="service-card group">
                      <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                        {/* Image */}
                        <div className="lg:w-1/3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 lg:h-32 object-cover rounded-lg"
                          />
                        </div>

                        {/* Content */}
                        <div className="lg:w-2/3">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="px-3 py-1 bg-brand-primary text-white rounded-full text-sm font-medium">
                              {item.time}
                            </span>
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <button className="text-brand-primary hover:scale-110 transition-transform">
                                  <Info size={20} />
                                </button>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80">
                                <div className="flex items-start space-x-3">
                                  <Camera size={16} className="text-brand-primary mt-1" />
                                  <div>
                                    <h4 className="font-semibold mb-1">Tip del guía:</h4>
                                    <p className="text-sm text-secondary">{item.tip}</p>
                                  </div>
                                </div>
                              </HoverCardContent>
                            </HoverCard>
                          </div>

                          <h3 className="service-card-title mb-2">
                            {item.title}
                          </h3>
                          <p className="service-card-description">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { contactInfo, weatherData } from '../mock/data';
import { Phone, Mail, MapPin, MessageCircle, Cloud, Moon, Send, Calendar } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
 
  return (
    <section id="contacto" className="py-24 bg-page">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 text-primary">
            Contactanos
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Planifica tu visita. Juntos descubramos el universo lacteo en Guachucal
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


            {/* Contact Info & Weather */}
            <div className="space-y-6">

              {/* contact */}
              <div className="service-card">
                <h3 className="service-card-title mb-4">
                  
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>📞 +57 321 565 4899</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>✉️ guachucalrutaagroturistica@gmail.com</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>📌 Guachucal, Nariño, Colombia</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>📷 @Via_lactea_guachucal</span>
                  </li>
                </ul>
              </div>


              {/* Quick Tips */}
              <div className="service-card">
                <h3 className="service-card-title mb-4">
                  Tips para tu Visita
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>Lleva ropa abrigada, las madrugadas son frías</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>No olvides protector solar y gorra</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>Zapatos cómodos para caminatas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-brand-primary">•</span>
                    <span>Cámara para capturar los paisajes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16">
          <h3 className="heading-3 text-center mb-8 text-primary">
            Cómo Llegar a Guachucal
          </h3>
          <div className="max-w-4xl mx-auto service-card">
            <div className="aspect-video bg-gray-200 rounded-lg mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123!2d-77.6167!3d1.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed4c5c5c5c5c5%3A0x1234567890abcdef!2sGuachucal%2C%20Nari%C3%B1o!5e0!3m2!1ses!2sco!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mapa de Guachucal"
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Desde Pasto:</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Bus directo: 90 minutos ($20,000)</li>
                
                  <li>• Vehículo propio: Vía Panamericana Norte</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Desde Ipiales:</h4>
                <ul className="space-y-2 text-sm text-secondary">
                  <li>• Taxi: 35 minutos ($10,000)</li>
                  <li>• Conexión desde frontera Ecuador</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
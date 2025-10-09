import React from 'react';
import { contactInfo } from '../mock/data';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Experiencias', href: '#experiencia' },
    { name: 'Procesadoras', href: '#procesadoras' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    'Tours de Ordeño',
    'Talleres de Quesillo',
    'Astroturismo',
    'Senderismo Ecológico',
    'Turismo Rural',
    'Experiencias Gastronómicas'
  ];

  const certifications = [
    { name: 'RNT', number: '12345' },
    { name: 'Negocio Verde', number: 'NG-67890' },
    { name: 'Turismo Sostenible', number: 'TS-11223' }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">VL</span>
              </div>
              <span className="font-satoshi font-semibold text-xl">
                Vía Láctea Guachucal
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Descubre la auténtica experiencia del municipio lechero en el corazón 
              de los Andes nariñenses. Turismo comunitario, sostenible y memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-brand-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Nuestros Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-brand-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-300">{contactInfo.phone}</p>
                  <p className="text-xs text-gray-400">Lun - Dom 7:00 AM - 7:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-brand-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-300">{contactInfo.email}</p>
                  <p className="text-xs text-gray-400">Respuesta en 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MessageCircle size={16} className="text-brand-primary mt-1" />
                <div>
                  <p className="text-sm text-gray-300">WhatsApp</p>
                  <p className="text-xs text-gray-400">{contactInfo.whatsapp}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-brand-primary mt-1" />
                <p className="text-sm text-gray-300">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="font-medium mb-3">Certificaciones y Alianzas</h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-xs text-gray-400">
                    <span className="font-medium">{cert.name}:</span> {cert.number}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <a href="#" className="hover:text-brand-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-brand-primary transition-colors">
                Sostenibilidad
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Vía Láctea Guachucal. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <span>🌱 Turismo Sostenible</span>
              <span>♻️ Cero Plástico</span>
              <span>🤝 Comercio Justo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Hola! Me interesa información sobre las experiencias turísticas en Guachucal.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
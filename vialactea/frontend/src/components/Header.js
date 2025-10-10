import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: 'hero' },
    { name: 'Experiencia', href: 'experiencia' },
    { name: 'Aliados', href: 'aliados' },
    { name: 'Eventos', href: 'eventos' },
    { name: 'Testimonios', href: 'testimonios' },
    { name: 'Contacto', href: 'contacto' }
  ];

  // Función para manejar el scroll sin que React Router interfiera
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation();
    
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
      
      // Actualizar hash
      window.location.hash = sectionId;
    }
    
    // Cerrar menú móvil si está abierto
    setIsMenuOpen(false);
    
    return false;
  };

  return (
    <header className="fixed top-0 w-full bg-azul shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* Imagen con enlace al inicio */}
            <a 
              href="#hero" 
              onClick={(e) => handleClick(e, 'hero')}
              className="block"
            >
              <img
                src="img/vialactea.png"
                alt="Logo Vía Láctea Guachucal"
                className="h-20 w-auto cursor-pointer hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => handleClick(e, item.href)}
                className="text-white hover:text-amarillo transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amarillo/30">
            <nav className="flex flex-col space-y-4 mt-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-white hover:text-amarillo transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
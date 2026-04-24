import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: 'hero' },
    { name: 'Experiencia', href: 'experiencia' },
    { name: 'Galería', href: 'galeria' },
    { name: 'Astroturismo', href: 'astroturismo' },
    { name: 'Gastronomía', href: 'gastronomia' },
    { name: 'Aliados', href: 'aliados' },
    { name: 'Eventos', href: 'eventos' },
    { name: 'Contacto', href: 'contacto' }
  ];

  useEffect(() => {
    const sectionIds = navigation.map(n => n.href);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollY > 80);
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      const mid = scrollY + window.innerHeight * 0.4;
      let current = 'hero';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      }
      setActiveSection(current);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setDrawerOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.location.hash = sectionId;
    }
    setDrawerOpen(false);
  };

  return (
    <>
      {/* FASE 3: Barra de progreso de scroll */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* FASE 3: Header scroll-aware con blur */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'header-scrolled' : 'bg-azul shadow-md'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* FASE 3: Nav desktop con indicador de sección activa */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`font-medium text-sm transition-colors ${
                    activeSection === item.href
                      ? 'nav-active'
                      : 'text-white hover:text-amarillo'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* FASE 3: Botón hamburguesa */}
            <button
              className="md:hidden p-2 text-white hover:text-amarillo transition-colors rounded-lg hover:bg-white/10"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* FASE 3: Overlay del drawer */}
      <div
        className={`drawer-overlay${drawerOpen ? ' open' : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* FASE 3: Drawer lateral móvil */}
      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="drawer-header">
          <img
            src="img/vialactea.png"
            alt="Logo Vía Láctea"
            className="h-10 w-auto"
          />
          <button
            className="drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Cerrar menú"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={(e) => handleClick(e, item.href)}
              className={`drawer-nav-item${activeSection === item.href ? ' active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="drawer-whatsapp">
          <p className="mb-1 font-semibold text-white text-sm">¿Listo para reservar?</p>
          <a
            href="https://wa.me/573215654899?text=Hola!%20Me%20interesa%20reservar%20una%20experiencia%20en%20Guachucal."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: +57 321 565 4899
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

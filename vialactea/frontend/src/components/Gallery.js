import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Dialog, DialogContent } from './ui/dialog';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: 'img/ordeño.jpg',        title: 'Ordeño al Amanecer',       category: 'Ganadería' },
  { src: 'img/ordeño2.jpg',       title: 'Proceso de Ordeño',        category: 'Ganadería' },
  { src: 'img/lechefresca1.jpg',  title: 'Leche Fresca del Páramo',  category: 'Ganadería' },
  { src: 'img/procesamiento.jpg', title: 'Planta Procesadora',        category: 'Ganadería' },
  { src: 'img/recoleccion.jpg',   title: 'Recolección',              category: 'Ganadería' },
  { src: 'img/producto.jpg',      title: 'Productos Artesanales',    category: 'Ganadería' },
  { src: 'img/paisajeandino.jpg', title: 'Altiplano Nariñense',      category: 'Paisaje'   },
  { src: 'img/paisajeandino1.jpg',title: 'Cordillera de los Andes',  category: 'Paisaje'   },
  { src: 'img/mirador.jpg',       title: 'Mirador a los Volcanes',   category: 'Paisaje'   },
  { src: 'img/reinado.jpg',       title: 'Reina del Queso',          category: 'Eventos'   },
  { src: 'img/stands.jpg',        title: 'Exposición Láctea',        category: 'Eventos'   },
  { src: 'img/marabu.jpg',        title: 'Presentación Musical',     category: 'Eventos'   },
  { src: 'img/realeza.jpg',       title: 'Lácteos La Realeza',       category: 'Eventos'   },
  { src: 'img/quesillo.jpg',      title: 'Taller de Quesillo',       category: 'Gastronomía' },
  { src: 'img/fogata.jpg',        title: 'Cena Fogatera',            category: 'Gastronomía' },
];

const CATEGORIES = ['Todos', 'Ganadería', 'Paisaje', 'Eventos', 'Gastronomía'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedIdx, setSelectedIdx] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const filtered = activeCategory === 'Todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (idx) => setSelectedIdx(idx);
  const closeModal = () => setSelectedIdx(null);

  const prev = () => setSelectedIdx(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setSelectedIdx(i => (i + 1) % filtered.length);

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'Escape') closeModal();
  };

  const current = selectedIdx !== null ? filtered[selectedIdx] : null;

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
    <section id="galeria" className="py-24 bg-page" ref={sectionRef}>
      {isVisible && (
        <Helmet>
          <title>Galería | Paisajes y Tradiciones de Guachucal Nariño | Vía Láctea</title>
          <meta name="description" content="Imágenes auténticas de la ganadería, paisajes andinos, gastronomía y eventos culturales de Guachucal, Nariño. Descubre la belleza de los páramos colombianos." />
        </Helmet>
      )}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4 text-primary reveal-up">Galería</h2>
          <p className="body-large text-secondary max-w-2xl mx-auto reveal-up stagger-1">
            Imágenes auténticas de Guachucal: ganadería, paisajes andinos, eventos y sabores únicos
          </p>
        </div>

        <div className="gallery-filter-bar reveal-up stagger-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {filtered.map((img, i) => (
            <div
              key={img.src}
              className="masonry-item"
              onClick={() => openModal(i)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openModal(i)}
              aria-label={`Ver ${img.title}`}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-image-title">{img.title}</span>
                <ZoomIn size={18} color="white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedIdx !== null} onOpenChange={closeModal}>
        <DialogContent
          className="max-w-4xl w-full p-0 overflow-hidden bg-black/95 border-none"
          onKeyDown={handleKey}
        >
          {current && (
            <div className="relative flex flex-col items-center">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-20 bg-white/10 rounded-full p-1.5 text-white hover:bg-white/20 transition-colors"
                aria-label="Cerrar"
              >
                <X size={18} />
              </button>

              {filtered.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}

              <img
                src={current.src}
                alt={current.title}
                className="w-full max-h-[80vh] object-contain"
              />

              <div className="w-full px-6 py-4 bg-black/60">
                <p className="text-white font-semibold">{current.title}</p>
                <p className="text-white/60 text-sm">{current.category} · {selectedIdx + 1} / {filtered.length}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

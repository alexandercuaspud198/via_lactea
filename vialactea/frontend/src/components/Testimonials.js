import React, { useState, useEffect } from 'react';
import { testimonials } from '../mock/data';
import { Button } from './ui/button';
import { Star, Play, ThumbsUp, Share2, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  const handleVideoPlay = (index) => {
    setPlayingVideo(index);
  };

  return (
    <section id="testimonios" className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6 text-primary">
            Lo que dicen nuestros visitantes
          </h2>
          <p className="body-large text-secondary max-w-2xl mx-auto">
            Experiencias reales de personas que han vivido la magia de Guachucal
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Video Section */}
              <div className="lg:w-1/2">
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  {playingVideo === currentSlide ? (
                    <iframe
                      src={testimonials[currentSlide].video + "?autoplay=1"}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={`Testimonio de ${testimonials[currentSlide].name}`}
                    />
                  ) : (
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <img 
                        src="/api/placeholder/400/250" 
                        alt="Video testimonial"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleVideoPlay(currentSlide)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                      >
                        <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play size={24} className="text-primary ml-1" />
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonials[currentSlide].avatar} />
                    <AvatarFallback>
                      {testimonials[currentSlide].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg text-primary">
                      {testimonials[currentSlide].name}
                    </h3>
                    <p className="text-secondary text-sm">
                      {testimonials[currentSlide].location}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>

                <blockquote className="text-lg text-primary mb-6 italic">
                  "{testimonials[currentSlide].comment}"
                </blockquote>

                {/* Social Actions */}
                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <button className="flex items-center space-x-2 text-secondary hover:text-brand-primary transition-colors">
                    <ThumbsUp size={16} />
                    <span className="text-sm">127</span>
                  </button>
                  <button className="flex items-center space-x-2 text-secondary hover:text-brand-primary transition-colors">
                    <Share2 size={16} />
                    <span className="text-sm">Compartir</span>
                  </button>
                  <button className="flex items-center space-x-2 text-secondary hover:text-brand-primary transition-colors">
                    <MessageSquare size={16} />
                    <span className="text-sm">Comentar</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-brand-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="company-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="service-card">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-secondary">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <p className="service-card-description mb-4">
                "{testimonial.comment}"
              </p>

              <button
                onClick={() => handleVideoPlay(index)}
                className="flex items-center space-x-2 text-brand-primary hover:underline"
              >
                <Play size={16} />
                <span className="text-sm">Ver video completo</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
            <h3 className="heading-3 mb-4 text-primary">
              ¿Ya viviste la experiencia?
            </h3>
            <p className="body-medium text-secondary mb-6">
              Comparte tu testimonio y ayuda a otros viajeros a descubrir Guachucal
            </p>
            <Button className="btn-primary">
              Deja tu Opinión
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
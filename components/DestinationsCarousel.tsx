import { useEffect, useMemo, useState } from 'react';
import type { Destination } from '../types/content';

interface DestinationsCarouselProps {
  destinations: Destination[];
}

export default function DestinationsCarousel({ destinations }: DestinationsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const slides = useMemo(() => destinations, [destinations]);
  const totalSlides = slides.length;

  useEffect(() => {
    if (isPaused || totalSlides === 0) {
      return undefined;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  return (
    <section className="section section--dark" id="destinos">
      <div className="container">
        <h2 className="section__title section__title--light">Explora nuestros destinos</h2>
        <p className="section__lead section__lead--light">
          Inspirados en postales icónicas del planeta, cada paquete combina hospedajes boutique,
          experiencias inmersivas y guías locales para crear recuerdos inolvidables.
        </p>
        <div
          className="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="carousel__viewport">
            {slides.map((destination, index) => (
              <article
                key={destination.name}
                className={`carousel__slide ${index === currentIndex ? 'is-active' : ''}`}
                aria-hidden={index !== currentIndex}
              >
                <div className="carousel__media">
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                </div>
                <div className="carousel__caption">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="carousel__controls">
            <button
              type="button"
              className="carousel__control"
              onClick={() => goToSlide(currentIndex - 1)}
              aria-label="Ver destino anterior"
            >
              ◀
            </button>
            <div className="carousel__dots" role="tablist" aria-label="Destinos destacados">
              {slides.map((destination, index) => (
                <button
                  key={destination.name}
                  type="button"
                  className={`carousel__dot ${index === currentIndex ? 'is-active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ver ${destination.name}`}
                  role="tab"
                  aria-selected={index === currentIndex}
                >
                  <span className="sr-only">{destination.name}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="carousel__control"
              onClick={() => goToSlide(currentIndex + 1)}
              aria-label="Ver siguiente destino"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

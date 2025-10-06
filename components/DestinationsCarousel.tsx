import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, A11y, Autoplay } from 'swiper/modules';
import type { Destination } from '../types/content';

interface DestinationsCarouselProps {
  destinations: Destination[];
}

export default function DestinationsCarousel({ destinations }: DestinationsCarouselProps) {
  return (
    <section className="section" id="destinos">
      <div className="container">
        <h2 className="section__title">Explora nuestros destinos</h2>
        <p className="section__lead">
          Inspirados en postales icónicas del planeta, cada paquete combina hospedajes boutique,
          experiencias inmersivas y guías locales para crear recuerdos inolvidables.
        </p>
      </div>
      <Swiper
        className="destinations-swiper"
        modules={[Navigation, Keyboard, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={destinations.length > 3}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 28 },
          900: { slidesPerView: 2, spaceBetween: 32 },
          1200: { slidesPerView: 3, spaceBetween: 36 },
        }}
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.name}>
            <article
              className="destination-card"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="destination-card__overlay">
                <h3 className="destination-card__title">{destination.name}</h3>
                <p className="destination-card__description">{destination.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

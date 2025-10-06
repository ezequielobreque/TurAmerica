import type { AboutContent } from '../types/content';

interface AboutSectionProps {
  about: AboutContent;
}

export default function AboutSection({ about }: AboutSectionProps) {
  const { intro, philosophy, highlights, location } = about;

  return (
    <section className="section section--light" id="nosotros">
      <div className="container">
        <h2 className="section__title">Quiénes somos</h2>
        <p className="section__lead">{intro}</p>
        <div className="grid grid--two">
          <div>
            <h3 className="section__subtitle">Nuestra filosofía</h3>
            <p>{philosophy}</p>
          </div>
          <div>
            <h3 className="section__subtitle">Lo que nos hace únicos</h3>
            <ul className="list">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid--two">
          <div>
            <h3 className="section__subtitle">Visítanos en nuestro lounge</h3>
            <p className="section__lead">{location.name}</p>
            <p>{location.address}</p>
            <a
              href={location.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer reseñas en Google
            </a>
          </div>
          <div>
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${location.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
}

export default function HeroSection({ headline, subheadline, ctaText }: HeroSectionProps) {
  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <p className="hero__eyebrow">Viajes diseñados a tu medida</p>
        <h1 className="hero__headline">{headline}</h1>
        <p className="hero__subheadline">{subheadline}</p>
        <a className="hero__cta" href="#destinos">
          {ctaText}
        </a>
      </div>
      <div className="hero__background" aria-hidden>
        <div className="hero__overlay" />
      </div>
    </section>
  );
}

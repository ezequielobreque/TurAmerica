export default function AboutSection({ about }) {
  return (
    <section className="section section--light" id="nosotros">
      <div className="container">
        <h2 className="section__title">Quiénes somos</h2>
        <p className="section__lead">{about.intro}</p>
        <div className="grid grid--two">
          <div>
            <h3 className="section__subtitle">Nuestra filosofía</h3>
            <p>{about.philosophy}</p>
          </div>
          <div>
            <h3 className="section__subtitle">Lo que nos hace únicos</h3>
            <ul className="list">
              {about.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

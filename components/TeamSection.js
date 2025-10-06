export default function TeamSection({ team }) {
  return (
    <section className="section" id="equipo">
      <div className="container">
        <h2 className="section__title">Nuestro equipo</h2>
        <p className="section__lead">
          Una red global de expertos en viajes, diseñadores de experiencias y anfitriones
          locales apasionados por compartir su cultura.
        </p>
        <div className="grid grid--three">
          {team.map((member) => (
            <article key={member.name} className="card">
              <div className="card__image">
                <img src={member.image} alt={`Retrato de ${member.name}`} loading="lazy" />
              </div>
              <div className="card__content">
                <h3>{member.name}</h3>
                <p className="card__role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

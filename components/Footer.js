export default function Footer({ partners }) {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <div>
          <p className="footer__logo">TurAmerica</p>
          <p className="footer__tagline">
            Diseñamos viajes sostenibles y auténticos para exploradores contemporáneos.
          </p>
        </div>
        <div>
          <h4>Alianzas estratégicas</h4>
          <ul className="list list--inline">
            {partners.map((partner) => (
              <li key={partner}>{partner}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="footer__legal">© {new Date().getFullYear()} TurAmerica. Todos los derechos reservados.</p>
    </footer>
  );
}

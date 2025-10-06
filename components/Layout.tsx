import Head from 'next/head';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'TurAmerica' }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="TurAmerica ofrece paquetes turísticos inmersivos a los destinos más icónicos del mundo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="layout">
        <header className={`navbar ${isScrolled ? 'navbar--fixed' : 'navbar--transparent'}`}>
          <div className="navbar__container">
            <a className="navbar__brand" href="#inicio">
              TurAmerica
            </a>
            <nav aria-label="Secciones principales">
              <ul className="navbar__links">
                <li className="navbar__item">
                  <a className="navbar__link" href="#inicio">
                    Inicio
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="#nosotros">
                    Quiénes somos
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="#equipo">
                    Equipo
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="#destinos">
                    Destinos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
}

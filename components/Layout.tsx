import Head from 'next/head';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'TurAmerica' }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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
        <header
          className={`navbar ${isScrolled ? 'navbar--fixed' : 'navbar--transparent'} ${
            isMenuOpen ? 'is-open' : ''
          }`}
        >
          <div className="navbar__container">
            <a className="navbar__brand" href="#inicio">
              TurAmerica
            </a>
            <button
              type="button"
              className="navbar__toggle"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="navbar__icon"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  aria-hidden
                  focusable="false"
                >
                  <path
                    d="M18.3 5.71a1 1 0 0 0-1.41-1.41L12 9.18 7.11 4.3A1 1 0 0 0 5.7 5.7l4.88 4.89-4.89 4.88a1 1 0 1 0 1.41 1.41L12 11.59l4.88 4.89a1 1 0 0 0 1.41-1.41l-4.89-4.88Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  className="navbar__icon"
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  aria-hidden
                  focusable="false"
                >
                  <path
                    d="M4 6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2Zm16 5H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Zm0 7H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              <span className={`sr-only ${isMenuOpen ? '' : 'sr-only--hidden'}`}>
                {isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              </span>
            </button>
            <nav aria-label="Secciones principales" className={'navbar__nav'}>
              <ul
                id="primary-navigation"
                className={`navbar__links ${isMenuOpen ? 'is-open' : ''}`}
              >
                <li className="navbar__item">
                  <a className="navbar__link" href="#inicio" onClick={handleLinkClick}>
                    Inicio
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="#nosotros" onClick={handleLinkClick}>
                    Quiénes somos
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="#equipo" onClick={handleLinkClick}>
                    Equipo
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__link" href="#destinos" onClick={handleLinkClick}>
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

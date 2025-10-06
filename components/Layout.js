import Head from 'next/head';

export default function Layout({ children, title = 'TurAmerica' }) {
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  );
}

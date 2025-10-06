import type { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import DestinationsCarousel from '../components/DestinationsCarousel';
import Footer from '../components/Footer';
import type {
  AboutContent,
  Destination,
  HeroContent,
  TeamMember,
} from '../types/content';

export interface HomeProps {
  hero: HeroContent;
  about: AboutContent;
  team: TeamMember[];
  destinations: Destination[];
  partners: string[];
}

const Home: NextPage<HomeProps> = ({ hero, about, team, destinations, partners }) => (
  <Layout title="TurAmerica | Paquetes turísticos hechos a medida">
    <HeroSection
      headline={hero.headline}
      subheadline={hero.subheadline}
      ctaText={hero.ctaText}
    />
    <DestinationsCarousel destinations={destinations} />
    <AboutSection about={about} />
    <TeamSection team={team} />
    <Footer partners={partners} />
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const hero: HeroContent = {
    headline: 'Itinerarios responsables para viajes memorables',
    subheadline:
      'Paquetes artesanales que conectan viajeros y anfitriones locales en más de 40 destinos.',
    ctaText: 'Explorar destinos',
  };

  const about: AboutContent = {
    intro:
      'TurAmerica es una empresa latinoamericana especializada en viajes de autor que combinan lujo relajado, sostenibilidad y autenticidad cultural.',
    philosophy:
      'Creemos que viajar es la forma más poderosa de inspirar empatía. Por eso, cada itinerario se diseña junto a embajadores locales, se equilibra con prácticas responsables y se adapta al ritmo de cada viajero.',
    highlights: [
      'Curaduría realizada por especialistas en cada región',
      'Alojamientos boutique comprometidos con el entorno',
      'Experiencias inmersivas con impacto positivo en comunidades',
    ],
    location: {
      name: 'TurAmerica Travel Lounge',
      address: 'Av. Santa Fe 2920, Palermo, Buenos Aires, Argentina',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.9989463751894!2d-58.39522382454521!3d-34.5868255579138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaa1fe5773b7%3A0x6274957332b26738!2sAv.%20Santa%20Fe%202920%2C%20C1425BGN%20CABA%2C%20Argentina!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar',
      googleReviewsUrl:
        'https://www.google.com/maps/place/Av.+Santa+Fe+2920,+C1425BGN+CABA,+Argentina/@-34.5868256,-58.3977988,17z/data=!4m7!3m6!1s0x95bccaa1fe5773b7:0x6274957332b26738!8m2!3d-34.5868256!4d-58.3952249!9m1!1b1',
    },
  };

  const team: TeamMember[] = [
    {
      name: 'Mariana Ríos',
      role: 'Directora de Experiencias',
      bio: 'Arquitecta de viajes con 12 años diseñando rutas únicas por América y Europa.',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Luciano Torres',
      role: 'Embajador de Hospitalidad',
      bio: 'Ex gerente de hotelería boutique, experto en crear estancias que abrazan la cultura local.',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Amelia Fernández',
      role: 'Curadora de Bienestar',
      bio: 'Guía certificada de bienestar, diseña experiencias mindful en destinos naturales.',
      image:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const destinations: Destination[] = [
    {
      name: 'Islas Lofoten, Noruega',
      description:
        'Auroras boreales, cabañas rojas junto al fiordo y excursiones con pescadores artesanales.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      alt: 'Pueblo costero con montañas nevadas y auroras en Noruega',
    },
    {
      name: 'Marrakech, Marruecos',
      description:
        'Medina histórica, talleres con artesanos y degustaciones en riads de diseño contemporáneo.',
      image:
        'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80',
      alt: 'Vista aérea de los tejados de Marrakech al atardecer',
    },
    {
      name: 'Patagonia, Argentina',
      description:
        'Glaciares majestuosos, navegación por lagos turquesa y caminatas guiadas por expertos locales.',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Paisaje de montañas nevadas y lago en Patagonia',
    },
    {
      name: 'Kyoto, Japón',
      description:
        'Ceremonias del té privadas, templos milenarios y jardines zen en plena floración.',
      image:
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Bosque de bambú de Arashiyama iluminado por la luz natural en Kyoto',
    },
  ];

  const partners: string[] = ['LATAM Airlines', 'Relais & Châteaux', 'National Geographic Journeys'];

  return {
    props: {
      hero,
      about,
      team,
      destinations,
      partners,
    },
  };
};

export default Home;

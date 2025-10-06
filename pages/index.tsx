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
    <AboutSection about={about} />
    <TeamSection team={team} />
    <DestinationsCarousel destinations={destinations} />
    <Footer partners={partners} />
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const hero: HeroContent = {
    headline: 'Descubre el mundo con itinerarios responsables y memorables',
    subheadline:
      'Paquetes artesanales que conectan a viajeros con comunidades anfitrionas y experiencias transformadoras en más de 40 países.',
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
        'https://images.unsplash.com/photo-1504788368824-9f67ea0c77a7?auto=format&fit=crop&w=1200&q=80',
      alt: 'Templo japonés rodeado de árboles con hojas rojas en otoño',
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

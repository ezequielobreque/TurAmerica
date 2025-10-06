import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

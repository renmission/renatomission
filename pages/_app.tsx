import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Archivo, IBM_Plex_Sans } from 'next/font/google';

const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-display', display: 'swap' });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${display.variable} ${body.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}

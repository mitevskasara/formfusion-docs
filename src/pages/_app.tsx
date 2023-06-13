import { Nunito } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '../../public/assets/fonts/style.css';

const font = Nunito({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: any) {
    return (
        <main className={font.className}>
            <Component {...pageProps} />
            {process.env.MODE === 'PROD' && <Analytics />}
        </main>
    );
}

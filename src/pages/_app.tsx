import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ThemeProvider from '@corelabui/classic/ThemeProvider';
import {
    defaultTheme,
    darkTheme,
    winterTheme,
    springTheme,
    summerTheme,
    fallTheme
} from '@corelabui/classic/Theme';
import '../../public/assets/fonts/style.css';
import '../styles/globals.css';
import '../styles/prism.css';
import { useEffect, useState } from 'react';

const font = Montserrat({ subsets: ['latin'] });

const customTheme = {
    ...winterTheme,
    fontFamily: 'inherit',
    body1: '0.9em'
};

const THEMES = {
    custom: customTheme,
    standard: defaultTheme,
    dark: darkTheme,
    winter: winterTheme,
    spring: springTheme,
    summer: summerTheme,
    fall: fallTheme
} as any;

export default function MyApp({ Component, pageProps }: any) {
    const [custom, setTheme] = useState<string>('custom');
    return (
        <ThemeProvider
            theme={{
                ...THEMES[custom],
                fontFamily: 'inherit',
                body1: '0.9em'
            }}>
            <main className={font.className}>
                <Component {...pageProps} theme={custom} setTheme={setTheme} />
                {process.env.MODE === 'PROD' && <Analytics />}
            </main>
        </ThemeProvider>
    );
}

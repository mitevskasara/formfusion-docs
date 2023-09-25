import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ThemeProvider from 'corelabui/ThemeProvider';
import {
    defaultTheme,
    darkTheme,
    winterTheme,
    springTheme,
    summerTheme,
    fallTheme
} from 'corelabui/Theme';

import '../public/assets/fonts/style.css';
import '../src/core/styles/globals.css';
import '../src/core/styles/prism.css';
import { useState } from 'react';

const font = Montserrat({ subsets: ['latin'] });

const customTheme = {
    ...winterTheme,
    fontFamily: 'inherit',
    body1: '1em'
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
    const [custom, setTheme] = useState<string>('winter');
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

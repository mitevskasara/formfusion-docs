import { useState } from 'react';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ThemeProvider from 'corelabui/ThemeProvider';

import THEMES from '@/core/theme';
import Storage from '@/utils/storage';

import '../../public/assets/fonts/style.css';
import '../core/styles/globals.css';
import '../core/styles/prism.css';
import 'formfusion/style.css';

const font = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin']
});

const defaultTheme = Storage.get('CUI_theme') || 'standard';

export default function MyApp({ Component, pageProps }: any) {
    const [custom, setTheme] = useState<string>(defaultTheme);

    const applyTheme = (theme: string) => {
        // if (!Storage.get('CUI_theme') || Storage.get('CUI_theme') !== theme) {
        //     Storage.set('CUI_theme', theme);
        // }
        setTheme(theme);
    };

    return (
        <ThemeProvider theme={THEMES[custom]}>
            <main className={font.className}>
                <Component
                    {...pageProps}
                    theme={custom}
                    setTheme={applyTheme}
                />
                {process.env.MODE === 'PROD' && <Analytics />}
            </main>
        </ThemeProvider>
    );
}

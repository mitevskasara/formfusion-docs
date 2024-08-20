import { useState } from 'react';
import { Albert_Sans } from 'next/font/google';
import ThemeProvider from 'corelabui/ThemeProvider';

import THEMES from '@/core/theme';
import Storage from '@/utils/storage';

import '../../public/assets/fonts/style.css';
import '../core/styles/globals.css';
import '../core/styles/prism.css';
import 'formfusion/style.css';

const font = Albert_Sans({
    weight: ['300', '400', '500', '700'],
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
            </main>
        </ThemeProvider>
    );
}

import { useEffect, useState } from 'react';
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

export default function MyApp({ Component, pageProps }: any) {
    const [custom, setTheme] = useState<string>('standard');

    useEffect(() => {
        const storedTheme = Storage.get('CUI_theme');
        if (storedTheme && THEMES[storedTheme]) {
            setTheme(storedTheme);
        }
    }, []);

    const applyTheme = (theme: string) => {
        Storage.set('CUI_theme', theme);
        setTheme(theme);
    };

    return (
        <ThemeProvider theme={THEMES[custom] ?? THEMES.standard}>
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

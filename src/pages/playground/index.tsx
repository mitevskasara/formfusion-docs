import { useEffect, useState } from 'react';
import Head from 'next/head';

import META_DATA from '@/constants/metaData';
import Header from '@/components/Header';
import LPFooter from '@/components/LPFooter';

import classes from './playground.module.scss';

const Playground = ({ theme, setTheme }: any) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <Head>
                <title>FormFusion: The right way to build forms in React</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    property="title"
                    content="FormFusion: The right way to build forms in React"
                />
                <meta name="description" content={META_DATA.description} />
                <meta property="image" content={META_DATA.image} />

                <meta property="og:url" content="https://www.formfusion.dev" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="FormFusion: The right way to build forms in React"
                />
                <meta
                    property="og:description"
                    content={META_DATA.description}
                />
                <meta property="og:image" content={META_DATA.image} />
                <meta name="keywords" content={META_DATA.keywords}></meta>
            </Head>
            <Header
                open={isOpen}
                toggle={setIsOpen}
                theme={theme}
                setTheme={setTheme}
            />
            <iframe
                src="https://stackblitz.com/edit/vitejs-vite-2kwujk?embed=1&file=src%2Fpages%2FContactUs%2Findex.tsx&theme=light"
                className={classes.container}></iframe>
            <div className={classes.section__footer}>
                <LPFooter />
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default Playground;

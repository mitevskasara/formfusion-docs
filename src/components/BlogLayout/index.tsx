import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState
} from 'react';
import Head from 'next/head';

import Header from '@/components/Header';

import classes from './blogLayout.module.scss';
import LPFooter from '../LPFooter';

type Props = {
    children?: ReactNode;
    title?: string;
    description?: string;
    image?: string;
    keywords?: string;
    url?: string;
    canonical?: string;
    theme: string;
    sidebar?: boolean;
    setTheme: Dispatch<SetStateAction<string>>;
};

const MainLayout = ({
    children,
    url,
    title,
    image = '',
    description,
    keywords,
    canonical,
    theme,
    sidebar = true,
    setTheme
}: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta property="title" content={title} />
                <meta name="description" content={description} />
                <meta property="image" content={image} />

                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta name="keywords" content={keywords}></meta>
                <link rel="canonical" href={canonical} />
            </Head>
            <div className={classes.header}>
                <Header
                    open={isOpen}
                    toggle={setIsOpen}
                    theme={theme}
                    setTheme={setTheme}
                    showMenu={false}
                />
            </div>

            <div className={classes.container}>
                <main className={classes.main}>{children}</main>
            </div>
            <div className={classes.footer}>
                <LPFooter />
            </div>
        </div>
    );
};

export default MainLayout;

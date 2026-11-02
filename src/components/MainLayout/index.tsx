import React, {
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useState
} from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import Footer from '@/components/LPFooter';
import VersionSwitcher from '@/components/VersionSwitcher';
import Link from '@/components/Link';

import classes from './main.module.scss';
import Breadcrumbs from '../Breadcrumbs';

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
    version?: 'v1' | 'v2';
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
    version = 'v2',
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
            </Head>
            <Header
                open={isOpen}
                toggle={setIsOpen}
                theme={theme}
                setTheme={setTheme}
            />
            <Breadcrumbs
                right={<VersionSwitcher version={version} />}
            />
            <div className={classes.container}>
                {sidebar && (
                    <LeftSidebar
                        open={isOpen}
                        toggle={setIsOpen}
                        theme={theme}
                        setTheme={setTheme}
                        version={version}
                    />
                )}
                <main className={classes.main}>
                    {version === 'v1' && (
                        <div className={classes.legacyNotice}>
                            You&apos;re viewing legacy <strong>v1</strong>{' '}
                            docs for formfusion 1.x.{' '}
                            <Link href="/docs">Switch to the latest docs</Link>{' '}
                            for
                            formfusion 2.0. Interactive examples on this page
                            run against the latest installed package, so they
                            may not perfectly reflect 1.x behavior.
                        </div>
                    )}
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;

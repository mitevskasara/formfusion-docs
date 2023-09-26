import React, { ReactNode, useState } from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';

import classes from './main.module.scss';

type Props = {
    children?: ReactNode;
    title?: string;
    description?: string;
    image?: string;
    keywords?: string;
    url?: string;
    canonical?: string;
};

const MainLayout = ({
    children,
    url,
    title,
    image = '',
    description,
    keywords,
    canonical = 'https://www.corelabui.com/forms'
}: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
            <Header open={isOpen} toggle={setIsOpen} />
            <div className={classes.container}>
                <LeftSidebar open={isOpen} toggle={setIsOpen} />
                <main className={classes.main}>{children}</main>
            </div>
        </div>
    );
};

export default MainLayout;

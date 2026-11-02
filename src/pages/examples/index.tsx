import Head from 'next/head';
import Typography from 'corelabui/Typography';

import LPHeader from '@/components/LPHeader';
import LPFooter from '@/components/LPFooter';
import ShowcaseCard from '@/components/ShowcaseCard';

import EXAMPLES from '@/data/showcaseExamples';
import META_DATA, { SITE_URL } from '@/constants/metaData';

import classes from './examples.module.scss';

const ExamplesGallery = () => {
    return (
        <>
            <Head>
                <title>FormFusion examples: ready-to-use forms built in React</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    property="title"
                    content="FormFusion examples: ready-to-use forms built in React"
                />
                <meta name="description" content={META_DATA.description} />
                <meta property="image" content={META_DATA.image} />
                <meta property="og:url" content={`${SITE_URL}/examples`} />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="FormFusion examples: ready-to-use forms built in React"
                />
                <meta
                    property="og:description"
                    content={META_DATA.description}
                />
                <meta property="og:image" content={META_DATA.image} />
                <meta name="keywords" content={META_DATA.keywords}></meta>
            </Head>
            <LPHeader />
            <div className={classes.container}>
                <div className={classes.header}>
                    <Typography variant="heading3" htmlElement="h1">
                        Examples
                    </Typography>
                    <Typography variant="body1">
                        A gallery of common forms built with FormFusion.
                        Open any card for the full, interactive version, or
                        download the isolated source to drop straight into
                        your own project.
                    </Typography>
                </div>
                <div className={classes.grid}>
                    {EXAMPLES.map((example) => (
                        <ShowcaseCard key={example.slug} {...example} />
                    ))}
                </div>
            </div>
            <LPFooter />
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default ExamplesGallery;

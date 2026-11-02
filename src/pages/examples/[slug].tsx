import Head from 'next/head';
import Typography from 'corelabui/Typography';

import LPHeader from '@/components/LPHeader';
import LPFooter from '@/components/LPFooter';
import Link from '@/components/Link';
import ShowcaseExample from '@/components/ShowcaseExample';

import EXAMPLES, { getExampleBySlug } from '@/data/showcaseExamples';
import META_DATA, { SITE_URL } from '@/constants/metaData';
import { download } from '@/utils/general';

import classes from './example.module.scss';

interface IExampleProps {
    slug: string;
}

const ExamplePage = ({ slug }: IExampleProps) => {
    const example = getExampleBySlug(slug);

    if (!example) return null;

    const { title, description, Component, code, fileName } = example;

    return (
        <>
            <Head>
                <title>{`${title} example | FormFusion`}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta property="title" content={`${title} | FormFusion`} />
                <meta name="description" content={description} />
                <meta property="image" content={META_DATA.image} />
                <meta
                    property="og:url"
                    content={`${SITE_URL}/examples/${slug}`}
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${title} | FormFusion`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={META_DATA.image} />
            </Head>
            <LPHeader />
            <div className={classes.container}>
                <Link href="/examples" className={classes.back}>
                    &larr; Back to all examples
                </Link>
                <div className={classes.header}>
                    <Typography variant="heading3" htmlElement="h1">
                        {title}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                    <button
                        type="button"
                        className={classes.download}
                        onClick={() => download(code, fileName)}>
                        Download source
                    </button>
                </div>
                <ShowcaseExample code={code}>
                    <Component />
                </ShowcaseExample>
            </div>
            <LPFooter />
        </>
    );
};

export async function getStaticPaths() {
    return {
        paths: EXAMPLES.map((example) => ({ params: { slug: example.slug } })),
        fallback: false
    };
}

export async function getStaticProps({ params }: any) {
    const example = getExampleBySlug(params.slug);

    if (!example) {
        return { notFound: true };
    }

    return {
        props: { slug: params.slug }
    };
}

export default ExamplePage;

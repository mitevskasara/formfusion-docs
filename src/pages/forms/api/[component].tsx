import React, { useRef } from 'react';
import Typography from 'corelabui/Typography';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import Playground from '@/components/Playground';
import PropsTable from '@/components/PropsTable';
import HTMLText from '@/components/HTMLText';

import META_DATA from '@/constants/metaData';
import { capitalize } from '@/utils/general';
import useIsInViewport from '@/hook/useIsInViewport';

import { Component } from './interfaces';

const Forms = ({ data }: { data: Component }) => {
    const exampleRef = useRef<HTMLElement | null>(null);
    const isInViewport = useIsInViewport(exampleRef);

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | ${capitalize(data?.key)}`,
                canonical: `https://www.corelabui.com/forms/api/${data?.key}`
            }}>
            <Section title={data?.title} margin={false}>
                <Typography variant="body1">
                    <HTMLText text={data?.description} />
                </Typography>
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    {data?.title} properties
                </Typography>
                <Typography variant="body1">
                    Props of the
                    <Link
                        href={data?.url ?? ''}
                        target="_blank"
                        internal={false}>
                        &nbsp;native component&nbsp;
                    </Link>
                    are also available.
                </Typography>
                <PropsTable data={data} />
            </Section>
            <Section id="example" subtitle="Example" ref={exampleRef}>
                <br />
                {isInViewport && (
                    <Playground
                        src={data?.exampleUrl}
                        title={data?.exampleTitle}
                    />
                )}
            </Section>
            <FooterNavigation
                url={data?.nextUrl ?? ''}
                title={data?.nextUrlTitle}
            />
        </MainLayout>
    );
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { component: 'form' } },
            { params: { component: 'input' } },
            { params: { component: 'textarea' } }
        ],
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    try {
        const data = await require(`@/data/${params.component}.json`);
        return {
            props: {
                data
            }
        };
    } catch (err) {
        console.log(
            `Error fetching data for component page ${params.component}`,
            err
        );

        return {
            notFound: true
        };
    }
}

export default Forms;

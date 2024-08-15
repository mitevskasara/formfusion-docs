import React, { Dispatch, SetStateAction, useRef } from 'react';
import Typography from 'corelabui/Typography';
import Flex from 'corelabui/Flex';
import Button from 'corelabui/Button';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import PropsTable from '@/components/PropsTable';
import HTMLText from '@/components/HTMLText';

import META_DATA from '@/constants/metaData';
import { capitalize } from '@/utils/general';

import { Component } from './interfaces';
import Code from '@/components/Code';
import { COMPONENTS } from '@/constants/examples';
import ROUTES from '@/constants/routes';

interface IApiProps {
    data: Component;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const API = ({ data, theme, setTheme }: IApiProps) => {
    const exampleRef = useRef<HTMLElement | null>(null);

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | ${capitalize(data?.key)}`,
                description: data?.metaDesc,
                url: `https://www.corelabui.com/${ROUTES.home}/api/${data?.key}`,
                canonical: `https://www.corelabui.com/${ROUTES.home}/api/${data?.key}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title={data?.title} margin={false} titleVariant="p">
                <h1 className="hidden">
                    {data?.title} - Optimised and fully customisable React
                    component
                </h1>
                <h2 className="hidden">{data?.subtitle}</h2>
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
            <Section id="example" ref={exampleRef}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    margin="3em 0 2em 0">
                    <Typography
                        variant="heading5"
                        htmlElement="h3"
                        margin={false}>
                        Example
                    </Typography>
                    <Button>
                        <Link
                            href={data?.exampleUrl}
                            target="_blank"
                            icon="stackblitz"
                            internal={false}
                            color={'var(--light)'}>
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Code language="javascript">{COMPONENTS[data?.key]}</Code>
                <br />
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

export default API;

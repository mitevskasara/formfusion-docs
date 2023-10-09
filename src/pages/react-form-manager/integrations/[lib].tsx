import React, { Dispatch, SetStateAction, useRef } from 'react';
import Typography from 'corelabui/Typography';
import Flex from 'corelabui/Flex';
import Button from 'corelabui/Button';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import HTMLText from '@/components/HTMLText';

import META_DATA from '@/constants/metaData';
import { capitalize } from '@/utils/general';

import { Component } from './interfaces';
import Code from '@/components/Code';
import { COMPONENTS, INTEGRATIONS } from '@/constants/examples';
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
                canonical: `https://www.corelabui.com/${ROUTES.integrations}/${data?.key}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title={`Integration with ${data?.title}`} margin={false}>
                <Typography variant="body1">
                    <HTMLText text={data?.description} />
                </Typography>
                <br />
                <Typography variant="body1">
                    To integrate <b>React Form Manager</b> with {data?.title}{' '}
                    you can use the
                    <Link href={`/${ROUTES.connect}`}>&nbsp;connect</Link>{' '}
                    method along with
                    <Link href={`/${ROUTES.useform}`}>&nbsp;UseForm</Link> hook
                    to initialize the form configuration.
                </Typography>
                <br />
                <Typography variant="body1">
                    In order to use the{' '}
                    <Link href={`/${ROUTES.connect}`}>connect</Link> method, you
                    need to have access to the form configuration object,
                    declare and set refs for your input fields and choose the{' '}
                    <Link href={`/${ROUTES.types}`}>input type</Link> or
                    <Link href={`/${ROUTES.patterns}`}>
                        &nbsp;validation pattern
                    </Link>{' '}
                    you want to use.
                </Typography>
                <br />
                <Typography variant="body1">
                    Note: to successfully use the{' '}
                    <Link href={`/${ROUTES.connect}`}>connect</Link> method you
                    must call it on the low level input that is rendered by{' '}
                    {data.title}.
                </Typography>
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
                            icon="codesandbox"
                            internal={false}
                            color={'var(--light)'}>
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Code language="javascript">{INTEGRATIONS[data?.key]}</Code>
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
            { params: { lib: 'mui' } },
            { params: { lib: 'antdesign' } },
            { params: { lib: 'chakraui' } },
            { params: { lib: 'reactstrap' } }
        ],
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    try {
        const data = await require(`@/data/integrations/${params.lib}.json`);
        return {
            props: {
                data
            }
        };
    } catch (err) {
        console.log(`Error fetching data for lib page ${params.lib}`, err);

        return {
            notFound: true
        };
    }
}

export default API;

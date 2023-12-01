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
                    Integrating <b>React Form Manager</b> with {data?.title}
                    &nbsp; is a straightforward process. To accomplish this, you
                    can use the{' '}
                    <Link href={`/${ROUTES.connect}`}>connect&nbsp;</Link>
                    method along with the{' '}
                    <Link href={`/${ROUTES.useform}`}>UseForm</Link> hook to
                    initialize your form&apos;s configuration.
                </Typography>
                <br />
                <Typography variant="body1">
                    For a successful implementation of the connect method,
                    you&apos;ll need access to the form configuration object and
                    to select the
                    <Link href={`/${ROUTES.types}`}>&nbsp;input type</Link> or
                    <Link href={`/${ROUTES.patterns}`}>
                        &nbsp;validation pattern&nbsp;
                    </Link>
                    that aligns with your requirements.
                </Typography>
                <br />
                <Typography variant="body1">
                    Important Note: To leverage the potential of the connect
                    method, it&apos;s important to call it on the lower-level
                    input component rendered by {data?.title}. This ensures the
                    synchronization of React Form Manager with the {data?.title}{' '}
                    framework.
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

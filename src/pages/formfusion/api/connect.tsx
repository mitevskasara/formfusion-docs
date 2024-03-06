import React, { Dispatch, SetStateAction } from 'react';
import Typography from 'corelabui/Typography';
import Button from 'corelabui/Button';
import Flex from 'corelabui/Flex';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import PropsTable from '@/components/PropsTable';
import Code from '@/components/Code';

import META_DATA from '@/constants/metaData';
import { CONNECT_USAGE } from '@/constants/examples';
import ROUTES from '@/constants/routes';
const params = require(`@/data/connect.json`);

interface IConnectProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const Connect = ({ theme, setTheme }: IConnectProps) => {
    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Connect`,
                canonical: `https://www.corelabui.com/${ROUTES.connect}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="Connect" margin={false}>
                <Typography variant="body1">
                    The connect method provides you with the flexibility to
                    integrate <strong>FormFusion </strong>
                    into your custom Field component, offering a alternative to
                    FormFusion&apos;s default
                    <Link href={`/${ROUTES.input}`}>&nbsp;Input</Link> or
                    <Link href={`/${ROUTES.textarea}`}>
                        &nbsp;Textarea
                    </Link>{' '}
                    elements.
                    <br />
                    <br />
                    Connect is not limited to just custom Field components; it
                    also plays a crutial role in integrating{' '}
                    <strong>FormFusion </strong> with various UI libraries,
                    amplifying the potential of your web applications. For a
                    step-by-step guide on these integrations, refer to the
                    instructions provided in the{' '}
                    <Link href={`${ROUTES.integrations}`}>Integrations</Link>{' '}
                    section.
                    <br />
                    <br />
                    It&apos;s worth highlighting that the connect method works
                    in synergy with the
                    <Link href={`${ROUTES.useform}`}>&nbsp;UseForm</Link> hook,
                    ensuring a harmonious and efficient form management process.
                </Typography>
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    Available parameters
                </Typography>
                <PropsTable data={params} />
                <br />
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
                            href="https://stackblitz.com/edit/vitejs-vite-iuykvw?file=src%2FApp.tsx"
                            target="_blank"
                            icon="stackblitz"
                            internal={false}
                            color={'var(--light)'}>
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Code language="javascript" canCopy={false}>
                    {CONNECT_USAGE}
                </Code>
            </Section>
            <FooterNavigation url={`/${ROUTES.types}`} title="Input types" />
        </MainLayout>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default Connect;

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

import META_DATA, { SITE_URL } from '@/constants/metaData';
import { USECONNECT_USAGE } from '@/constants/examples';
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
                description:
                    'useConnect is a custom hook that allows integrating Form component and all of its features with any UI library such as Material UI, AntDesign, Reactstrap and more',
                title: 'useConnect: a custom hook for integrating Form with any UI library.',
                url: `${SITE_URL}/${ROUTES.connect}`,
                canonical: `${SITE_URL}/${ROUTES.connect}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="useConnect" margin={false}>
                <Typography variant="body1">
                    The useConnect hook provides you with the flexibility to
                    integrate <strong>FormFusion </strong>
                    into your custom Field component, offering an alternative
                    to FormFusion&apos;s default
                    <Link href={`/${ROUTES.input}`}>&nbsp;Input</Link> or
                    <Link href={`/${ROUTES.textarea}`}>
                        &nbsp;Textarea
                    </Link>{' '}
                    elements.
                    <br />
                    <br />
                    useConnect is not limited to just custom Field
                    components; it also plays a crucial role in integrating{' '}
                    <strong>FormFusion </strong> with various UI libraries,
                    amplifying the potential of your web applications. For a
                    step-by-step guide on these integrations, refer to the
                    instructions provided in the{' '}
                    <Link href={`/${ROUTES.mui}`}>Integrations</Link> section.
                    <br />
                    <br />
                    It&apos;s worth highlighting that useConnect works in
                    synergy with the
                    <Link href={`/${ROUTES.useform}`}>&nbsp;UseForm</Link>{' '}
                    hook, ensuring a harmonious and efficient form management
                    process. Unlike the removed <code>connect</code> function
                    it replaces, useConnect requires a fourth argument
                    naming the field&apos;s <code>name</code> (e.g.{' '}
                    <code>{`{ name: 'email' }`}</code>) and throws if it is
                    missing.
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
                            rel="nofollow"
                            target="_blank"
                            icon="stackblitz"
                            internal={false}
                            color={'var(--light)'}>
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Code language="javascript" canCopy={false}>
                    {USECONNECT_USAGE}
                </Code>
            </Section>
            <FooterNavigation
                url={`/${ROUTES.validation}`}
                title="Validation"
            />
        </MainLayout>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default Connect;

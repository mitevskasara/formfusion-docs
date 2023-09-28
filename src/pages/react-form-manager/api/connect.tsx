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
                    The connect method allows you to integrate{' '}
                    <b>React Form Manager </b>
                    with your own Field component instead of the{' '}
                    <b>RFM&apos;s&nbsp;</b>
                    <Link href={`/${ROUTES.input}`}> Input </Link> or
                    <Link href={`/${ROUTES.textarea}`}>&nbsp;Textarea </Link>.
                    Connect is also used for integration with UI Libraries. See
                    <Link href={`${ROUTES.integrations}`}>
                        &nbsp;Integrations
                    </Link>{' '}
                    for more detail instructions.
                    <br />
                    <br />
                    The connect method <b>must</b> be used along with
                    <Link href={`${ROUTES.useform}`}>&nbsp;UseForm</Link>.
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
                            href="https://codesandbox.io/s/rfm-basic-connect-usage-l623rp"
                            target="_blank"
                            icon="codesandbox"
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

export default Connect;

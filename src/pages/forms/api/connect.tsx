import React from 'react';
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
const params = require(`@/data/connect.json`);

const UseForm = () => {
    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Connect`,
                canonical: `https://www.corelabui.com/forms/api/connect`
            }}>
            <Section title="Connect" margin={false}>
                <Typography variant="body1">
                    The connect method allows you to integrate{' '}
                    <b>React Form Manager </b>
                    with your own Field component instead of the <b>RFM's</b>
                    <Link href="/forms/api/input"> Input </Link> or
                    <Link href="/forms/api/input"> Textarea </Link>. Connect is
                    also used for integration with UI Libraries. See
                    <Link href="/forms/integrations">
                        &nbsp;Integrations
                    </Link>{' '}
                    for more detail instructions.
                    <br />
                    <br />
                    The connect method <b>must</b> be used along with
                    <Link href="/forms/api/useform"> UseForm</Link>.
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
                            color="white">
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Code language="javascript" canCopy={false}>
                    {CONNECT_USAGE}
                </Code>
            </Section>
            <FooterNavigation url="/forms/api/types" title="Input types" />
        </MainLayout>
    );
};

export default UseForm;

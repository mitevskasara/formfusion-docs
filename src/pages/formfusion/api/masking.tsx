import React, { Dispatch, SetStateAction } from 'react';
import Typography from 'corelabui/Typography';
import Button from 'corelabui/Button';
import Flex from 'corelabui/Flex';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';

import META_DATA from '@/constants/metaData';
import ROUTES from '@/constants/routes';

import { MASKING_USAGE } from '@/constants/examples';
import Code from '@/components/Code';
import Tag from '@/components/Tag';

interface IMaskProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    data: { [key: number]: object[] };
    pages: number[];
    options: { label: string; value: string }[];
}

const Mask = ({ theme, setTheme }: IMaskProps) => {
    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Input masking`,
                canonical: `https://www.corelabui.com/${ROUTES.types}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section
                title="Input masking"
                margin={false}
                badge={<Tag text="BETA" />}>
                <Typography variant="body1">
                    Input masking ensures that user input follows a specified
                    format, such as phone numbers, dates, credit card numbers,
                    and more, providing a seamless and intuitive user
                    experience.
                    <br />
                    <br />
                    Implementing input masking with <strong>
                        FormFusion
                    </strong>{' '}
                    is straightforward and intuitive. Simply define the desired
                    format for your input fields using our easy-to-understand
                    syntax, and FormFusion takes care of the rest. With just one
                    line of code, you can enforce consistent formatting across
                    your entire form, ensuring data integrity without
                    compromising user experience.
                </Typography>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    margin="3em 0 0 0">
                    <Typography
                        variant="heading5"
                        htmlElement="h3"
                        margin={false}>
                        Example
                    </Typography>
                    <Button>
                        <Link
                            href="https://stackblitz.com/edit/vitejs-vite-zgsjvv?file=src%2FApp.tsx"
                            target="_blank"
                            icon="stackblitz"
                            internal={false}
                            color={'var(--light)'}>
                            Try on<b>&nbsp;Stackblitz&nbsp;</b>
                        </Link>
                    </Button>
                </Flex>
                <br />
                <Code language="javascript" canCopy={false}>
                    {MASKING_USAGE}
                </Code>
            </Section>
            <FooterNavigation url={`/${ROUTES.mui}`} title="Material UI" />
        </MainLayout>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default Mask;

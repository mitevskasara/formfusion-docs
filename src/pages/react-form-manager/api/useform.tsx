import React, { Dispatch, SetStateAction } from 'react';
import Typography from 'corelabui/Typography';
import Button from 'corelabui/Button';
import Flex from 'corelabui/Flex';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import META_DATA from '@/constants/metaData';
import PropsTable from '@/components/PropsTable';
import Code from '@/components/Code';
import Property from '@/components/Property';

import { USEFORM_USAGE } from '@/constants/examples';
import ROUTES from '@/constants/routes';
const useFormParams = require(`@/data/useform.json`);
const config = require(`@/data/config.json`);

interface IUseFormProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const UseForm = ({ theme, setTheme }: IUseFormProps) => {
    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | UseForm`,
                canonical: `https://www.corelabui.com/${ROUTES.useform}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="UseForm hook" margin={false}>
                <Typography variant="body1">
                    UseForm is a custom hook for managing forms that Form
                    component uses as a base.
                    <br />
                    <br />
                    UseForm can be used when you want to have more control over
                    the form including access to the values and errors objects
                    or when using a different Field component other than the
                    <strong> RFM&apos;s</strong> Input and Textarea components.
                </Typography>
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    Available parameters
                </Typography>
                <PropsTable data={useFormParams} />
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    Available configuration
                </Typography>
                <br />
                <Typography variant="body1">
                    UseForm returns the whole form configuration as a result to
                    be used. For example:
                </Typography>
                <br />
                <Code language="javascript" canCopy={false}>
                    {
                        'const config = useForm({onSubmit: (values) => {console.log(values)}});'
                    }
                </Code>
                <br />
                <Typography variant="body1">
                    In the code above, <Property>config</Property> will contain
                    the following configuration:
                </Typography>
                <PropsTable data={config} />
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
                            href="https://codesandbox.io/s/rfm-useform-usage-wvq56j?file=/src/App.js:768-774"
                            target="_blank"
                            icon="codesandbox"
                            internal={false}
                            color={'var(--light)'}>
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Code language="javascript" canCopy={false}>
                    {USEFORM_USAGE}
                </Code>
            </Section>
            <FooterNavigation url={`/${ROUTES.connect}`} title="Connect" />
        </MainLayout>
    );
};

export default UseForm;

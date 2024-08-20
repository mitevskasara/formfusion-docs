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
                description:
                    'Custom React hook that offers access to the essential features of the Form component including: values, errors, touched fields, form utils & more.',
                title: `Useform hook: Custom react hook for form management`,
                canonical: `https://www.corelabui.com/${ROUTES.useform}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="UseForm hook" margin={false} titleVariant="p">
                <h1 className="hidden">
                    Useform hook: Custom react hook designed for advanced form
                    management.
                </h1>
                <h2 className="hidden">
                    Offers access to the essential features of the Form
                    component including: values, errors, touched fields, form
                    utils & more.
                </h2>
                <Typography variant="body1">
                    UseForm is a specialized custom <b>React hook</b> designed
                    for advanced form management, serving as the foundational
                    core for the
                    <Link href={`/${ROUTES.form}`}>&nbsp;Form component</Link>.
                    This hook comes in handy when you require greater control
                    over your forms, offering access to essential objects such
                    as values and errors. It&apos;s particularly valuable when
                    you opt for alternative Field components that differ from
                    FormFusion&apos;s&nbsp; default{' '}
                    <Link href={`/${ROUTES.input}`}>Input</Link> and
                    <Link href={`/${ROUTES.textarea}`}>
                        &nbsp;Textarea&nbsp;
                    </Link>
                    components. With UseForm, you can tailor your form
                    management to your specific needs, ensuring a flexible and
                    adaptable solution for your web development projects.
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
                    The <b>UseForm hook</b> yields the entire form
                    configuration, which you can use to tailor your form
                    management precisely as desired. Here&apos;s an example of
                    how to implement it:
                </Typography>
                <br />
                <Code language="javascript" canCopy={false}>
                    {
                        'const config = useForm({onSubmit: (values) => {console.log(values)}});'
                    }
                </Code>
                <br />
                <Typography variant="body1">
                    In the provided code snippet, the{' '}
                    <Property>config</Property> variable includes the following
                    essential configuration parameters:
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
                            href="https://stackblitz.com/edit/vitejs-vite-pxpcbc?file=src%2FApp.tsx"
                            target="_blank"
                            icon="stackblitz"
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

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default UseForm;

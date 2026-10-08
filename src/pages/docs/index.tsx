import { Dispatch, SetStateAction, useRef } from 'react';
import Typography from 'corelabui/Typography';
import Flex from 'corelabui/Flex';
import Button from 'corelabui/Button';

import Code from '@/components/Code';
import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import List from '@/components/List';
import ClientComponent from '@/components/ClientComponent';

import { patternsToList } from '@/utils/dataTransform';
import FEATURES from '@/constants/features';
import META_DATA, { SITE_URL } from '@/constants/metaData';
import ROUTES from '@/constants/routes';
import { COMPONENTS } from '@/constants/examples';
import FormExample from '@/components/FormExample';
import GridList from '@/components/GridList';
import { rules } from 'formfusion';
import CodePreview from '@/components/CodePreview';

interface IFormFusionProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const FormFusion = ({ theme, setTheme }: IFormFusionProps) => {
    const exampleRef = useRef<HTMLElement | null>(null);

    return (
        <MainLayout
            {...{
                ...META_DATA,
                url: `${SITE_URL}/docs`,
                description:
                    'Discover FormFusion for effortless form management, validation, and beyond. Speed up your development with intuitive solutions. Try it now!'
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section
                id="introduction"
                title="Library Overview / What is FormFusion?"
                margin={false}
                titleVariant="p">
                <br />
                <br />
                <h1 className="hidden">
                    Meet FormFusion: The New Way to Manage Forms in React
                </h1>
                <Typography variant="body1" htmlElement="div">
                    Welcome! If you’re here, you likely understand that building
                    forms in React can often feel repetitive and take up your
                    valuable time.
                    <b> FormFusion </b> is here to make it easier by handling
                    the tricky parts for you:
                    <List
                        items={[
                            'Managing form state',
                            'Validating fields and showing errors',
                            'Handling form submissions',
                            'Building accessible forms'
                        ]}
                    />
                </Typography>
                <br />
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    How does it work?
                </Typography>
                <Typography variant="body1">
                    FormFusion is based on the native HTML form elements
                    and&nbsp;
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation"
                        target="_blank"
                        rel="nofollow">
                        built-in validation
                    </Link>
                    &nbsp;and extends the list of&nbsp;
                    <Link href={`/${ROUTES.validation}`}>
                        native input types
                    </Link>
                    &nbsp;with a large collection of thoroughly tested and ready
                    to use validation rules such as:
                </Typography>
                <ClientComponent>
                    <GridList items={patternsToList(rules)} />
                </ClientComponent>
                <Link
                    href={`/${ROUTES.validation}`}
                    color="var(--text)"
                    style={{
                        float: 'right',
                        fontSize: 'small',
                        fontWeight: '500'
                    }}>
                    See full list here
                </Link>
                <br />
                <br />
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    Motivation
                </Typography>
                <br />
                <Typography variant="body1">
                    After working with popular form libraries like Formik and
                    React Hook Form, I noticed a recurring issue: while they
                    reduced some of the repetitive work, they didn’t fully
                    address validation needs. I often ended up writing custom
                    validation functions and regex patterns repeatedly. Using
                    yet another additional library just for validation felt like
                    too much for managing forms only, especially with the
                    dependency bloat it could bring. So I created FormFusion, a
                    library that includes built-in validation to simplify the
                    whole process. To offer even more, FormFusion makes your
                    form fully accessible without you having to write a single
                    line of code!
                </Typography>
                &nbsp;
                <br />
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    Main Features
                </Typography>
                <List items={FEATURES} />
            </Section>
            <Section id="installation" title="Installation" titleVariant="h2">
                <Typography variant="body1">
                    To get started with formfusion, simply install it using npm
                    or yarn with the following command:
                </Typography>
                <br />
                <ClientComponent>
                    <Code language="bash">npm i formfusion</Code>
                </ClientComponent>
                <br />
                <Typography variant="body1">
                    Formfusion is unstyled by default. To use the styled
                    version, simply import the styles file in your main file:
                </Typography>
                <br />
                <ClientComponent>
                    <Code language="jsx">
                        import &apos;formfusion/style.css&apos;;
                    </Code>
                </ClientComponent>
                <br />
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
                </Flex>
                <Typography variant="body1">
                    Here is an example of how you can build a simple, fully
                    functional and accessible payment form in under a minute:
                </Typography>
                <br />
                <ClientComponent>
                    <CodePreview />
                </ClientComponent>
            </Section>
            <FooterNavigation url={`/${ROUTES.form}`} title="API" />
        </MainLayout>
    );
};

export default FormFusion;

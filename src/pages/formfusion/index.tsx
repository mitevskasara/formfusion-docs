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
import META_DATA from '@/constants/metaData';
import ROUTES from '@/constants/routes';
import { COMPONENTS } from '@/constants/examples';
import FormExample from '@/components/FormExample';
import GridList from '@/components/GridList';
import { rules } from 'formfusion';

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
                url: 'https://www.formfusion.dev/formfusion',
                canonical: 'https://www.formfusion.dev/formfusion',
                description:
                    'Discover FormFusion for effortless form management, validation, and beyond. Speed up your development with intuitive solutions. Try it now!'
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section
                id="introduction"
                title="Introduction"
                margin={false}
                titleVariant="p">
                <h1 className="hidden">
                    Meet FormFusion: The New Way to Manage Forms in React
                </h1>
                <Typography variant="body1">
                    Meet <strong>FormFusion</strong>,&nbsp;a toolkit what helps
                    you build your web forms in <b>React</b> the right way. This
                    broad library offers an efficient solution for{' '}
                    <b>managing forms</b>, complete with{' '}
                    <b>built-in validation</b>, integrated accessibility, and
                    infinite customization capabilities. Optimize your
                    development process and improve the user experience with
                    ease, as you utilizing the full potential of{' '}
                    <b>JavaScript forms&nbsp;</b>
                    in your React applications.
                    <br />
                    <br />
                    Our library seamlessly integrates with{' '}
                    <b>popular design frameworks</b> including Material UI, Ant
                    Design, Chakra UI, and &nbsp;Reactstrap, making it the
                    perfect choice for your React-based projects.
                </Typography>
                <br />
                <Typography variant="body1">
                    FormFusion leverages the native HTML&nbsp;
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation"
                        target="_blank">
                        form validation
                    </Link>
                    &nbsp;by extending the list of&nbsp;
                    <Link href={`/${ROUTES.validation}`}>
                        native input types
                    </Link>
                    &nbsp;and provides a large collection of thoroughly tested
                    and ready to use validation rules such as:
                </Typography>
                <ClientComponent>
                    <GridList items={patternsToList(rules)} />
                </ClientComponent>
                <Link href={ROUTES.validation} style={{ float: 'right' }}>
                    See full list here
                </Link>
                <br />
                &nbsp;
                <Typography variant="heading5" htmlElement="h3">
                    Features
                </Typography>
                <List items={FEATURES} />
            </Section>
            <Section id="installation" title="Installation" titleVariant="h2">
                <Typography variant="body1">
                    To get started with our library, simply install it using npm
                    or yarn with the following command:
                </Typography>
                <br />
                <ClientComponent>
                    <Code language="bash">npm i formfusion</Code>
                </ClientComponent>
                <br />
                <Typography variant="body1">
                    To use the styled version, import the styles file in your
                    main file:
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
                    <Button>
                        <Link
                            href="https://stackblitz.com/edit/vitejs-vite-ahj7lp?file=src%2FApp.tsx"
                            target="_blank"
                            icon="stackblitz"
                            internal={false}
                            color={'var(--light)'}>
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Typography variant="body1">
                    Below is an example of how FormFusion simplifies the
                    creation of an uncontrolled payment form with a card number
                    and ccv validation:
                </Typography>
                <br />
                <ClientComponent>
                    <Code language="javascript">{COMPONENTS.form}</Code>
                </ClientComponent>
                <br />
                <br />
                <Typography variant="heading5" htmlElement="h3">
                    Preview
                </Typography>
                <FormExample />
            </Section>
            <FooterNavigation url={`/${ROUTES.form}`} title="API" />
        </MainLayout>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default FormFusion;

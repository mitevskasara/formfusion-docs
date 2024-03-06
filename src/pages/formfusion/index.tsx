import { Dispatch, SetStateAction, useRef } from 'react';
import Typography from 'corelabui/Typography';
import { patterns } from 'formfusion';
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

interface IReactFormManagerProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const ReactFormManager = ({ theme, setTheme }: IReactFormManagerProps) => {
    const exampleRef = useRef<HTMLElement | null>(null);

    return (
        <MainLayout
            {...{
                ...META_DATA,
                canonical: 'https://www.corelabui.com/formfusion'
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section id="introduction" title="Introduction" margin={false}>
                <Typography variant="body1">
                    Revolutionize your React applications with the{' '}
                    <strong>FormFusion,&nbsp;</strong>
                    thoughtfully designed by CoreLab UI. This broad library
                    offers an efficient solution for managing forms, complete
                    with built-in validation, exceptional accessibility, and
                    unparalleled customization capabilities. Optimize your
                    development process and elevate the user experience with
                    ease, as you harness the full potential of JavaScript forms
                    in your React applications.
                    <br />
                    <br />
                    Our library seamlessly integrates with popular design
                    frameworks including Material UI, Ant Design, Chakra UI, and
                    Reactstrap, making it the perfect choice for your
                    React-based projects.
                </Typography>
                <br />
                <Typography variant="body1">
                    <strong>FormFusion</strong> leverages the native HTML&nbsp;
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation"
                        target="_blank">
                        form validation
                    </Link>
                    &nbsp;by extending the list of&nbsp;
                    <Link href={`/${ROUTES.types}`}>native input types</Link>
                    &nbsp;and provides a large collection of thoroughly tested
                    and ready to use validation patterns such as:
                </Typography>
                <GridList items={patternsToList(patterns)} />
                <Link href="/api/patterns" style={{ float: 'right' }}>
                    See full list here
                </Link>
                <br />
                &nbsp;
                <Typography variant="heading5" htmlElement="h3">
                    Features
                </Typography>
                <List items={FEATURES} />
            </Section>
            <Section id="installation" title="Installation">
                <Typography variant="body1">
                    To get started with our library, simply install it using npm
                    or yarn with the following command:
                </Typography>
                <br />
                <ClientComponent>
                    <Code language="bash">npm i formfusion</Code>
                </ClientComponent>
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
                    Below is an example of how <strong>FormFusion</strong>{' '}
                    simplifies the creation of an uncontrolled payment form with
                    a card number and ccv validation:
                </Typography>
                <br />
                <Code language="javascript">{COMPONENTS.form}</Code>
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

export default ReactFormManager;

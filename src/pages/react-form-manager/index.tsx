import { Dispatch, SetStateAction, useRef } from 'react';
import Typography from 'corelabui/Typography';
import { patterns } from '@corelabui/rfm';
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

interface IReactFormManagerProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const ReactFormManager = ({ theme, setTheme }: IReactFormManagerProps) => {
    const exampleRef = useRef<HTMLElement | null>(null);

    return (
        <MainLayout {...META_DATA} theme={theme} setTheme={setTheme}>
            <Section id="introduction" title="Introduction" margin={false}>
                <Typography variant="body1">
                    Effortlessly manage forms in your React applications with
                    the
                    <strong>&nbsp;React Form Manager&nbsp;</strong>
                    developed by CoreLab UI. This library provides an efficient
                    solution for handling forms with built-in validation, full
                    accessibility and completely customizable look simplifying
                    the development process and improving user experience.
                </Typography>
                <br />
                <Typography variant="body1">
                    <strong>React Form Manager</strong> leverages the native
                    HTML
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation"
                        target="_blank">
                        &nbsp;form validation&nbsp;
                    </Link>
                    by extending the list of&nbsp;
                    <Link href={`/${ROUTES.types}`}>
                        native input types&nbsp;
                    </Link>
                    and provides a large collection of thoroughly tested and
                    ready to use validation patterns such as:
                </Typography>
                <List items={patternsToList(patterns)} />
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
                    <Code language="bash">npm i @corelabui/rfm</Code>
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
                            href="https://codesandbox.io/s/rfm-basic-form-example-nvg3rr"
                            target="_blank"
                            icon="codesandbox"
                            internal={false}
                            color={'var(--light)'}>
                            Try it out&nbsp;&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <Typography variant="body1">
                    Bellow is an example of using React Form Manager for a
                    straightforward uncontrolled form with username field with
                    validation
                </Typography>
                <br />
                <Code language="javascript">{COMPONENTS.form}</Code>
                <br />
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

import { useRef } from 'react';
import Typography from 'corelabui/Typography';
import { patterns } from '@corelabui/rfm';

import Code from '@/components/Code';
import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import Playground from '@/components/Playground';
import List from '@/components/List';
import ClientComponent from '@/components/ClientComponent';

import useIsInViewport from '@/hook/useIsInViewport';

import { patternsToList } from '@/utils/dataTransform';
import FEATURES from '@/constants/features';
import META_DATA from '@/constants/metaData';

const Forms = () => {
    const exampleRef = useRef<HTMLElement | null>(null);
    const isInViewport = useIsInViewport(exampleRef);

    return (
        <MainLayout {...META_DATA}>
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
                    <Link href="/forms/api/types">
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
            <Section id="example" subtitle="Example" ref={exampleRef}>
                <Typography variant="body1">
                    Here&apos;s an example of using React Form Manager for a
                    straightforward uncontrolled form with username field with
                    validation
                </Typography>
                <br />
                {isInViewport && (
                    <Playground
                        src="https://codesandbox.io/embed/rfm-basic-form-example-nvg3rr?fontsize=14&hidenavigation=1&theme=dark&view=editor"
                        title="RFM Basic Form example"
                    />
                )}
            </Section>
            <FooterNavigation url="/forms/api/form" title="API" />
        </MainLayout>
    );
};

export default Forms;

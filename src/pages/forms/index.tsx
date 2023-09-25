import React from 'react';
import Typography from 'corelabui/Typography';
import { patterns } from '@corelabui/rfm';

import Code from '@/components/Code';
import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';

import classes from './forms.module.scss';

const toIgnore = [
    'email',
    'password',
    'search',
    'url',
    'tel',
    'creditCardNumberHyphen',
    'creditCardNumberSpace',
    'ipv4',
    'ipv6',
    'guid',
    'ssn'
];

const Forms = () => {
    return (
        <MainLayout>
            <section className={classes.main__section} id="introduction">
                <Typography variant="heading4" htmlElement="h2">
                    Introduction
                </Typography>
                <Typography variant="body1">
                    Effortlessly manage forms in your React applications with
                    the
                    <strong>&nbsp;React Form Manager&nbsp;</strong>
                    powered by CoreLab UI. This library provides an efficient
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
                <ul className={classes.list}>
                    {patterns &&
                        Object.keys(patterns).map(
                            (key) =>
                                !toIgnore.includes(key) && (
                                    <li
                                        className={classes.list__item}
                                        key={key}>
                                        <Typography
                                            variant="body1"
                                            margin={false}>
                                            {key}
                                        </Typography>
                                    </li>
                                )
                        )}
                    <li>
                        <Typography variant="body1" margin={false}>
                            and many more - See full list&nbsp;
                            <Link href="/forms/api/patterns">here</Link>
                        </Typography>
                    </li>
                </ul>
                <br />
                &nbsp;
                <Typography variant="heading5" htmlElement="h3">
                    Features
                </Typography>
                <ul className={classes.list}>
                    <li className={classes.list__item}>
                        <Typography variant="body1" margin={false}>
                            <strong>Efficiency:</strong> Optimize your
                            form-handling process with this powerful,
                            lightweight library.
                        </Typography>
                    </li>
                    <li className={classes.list__item}>
                        <Typography variant="body1" margin={false}>
                            <strong>Adaptability:</strong> Easily integrate
                            React Form Manager into new or existing projects.
                        </Typography>
                    </li>
                    <li className={classes.list__item}>
                        <Typography variant="body1" margin={false}>
                            <strong>Out-of-the-Box Validation:</strong> Use the
                            built-in validation rules without hassle.
                        </Typography>
                    </li>
                    <li className={classes.list__item}>
                        <Typography variant="body1" margin={false}>
                            <strong>Customizable:</strong> Tailor the UI to your
                            specific needs and preferences.
                        </Typography>
                    </li>
                    <li className={classes.list__item}>
                        <Typography variant="body1" margin={false}>
                            <strong>No dependencies:</strong> RFM is
                            self-contained and does not rely on any external
                            dependencies.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.main__section} id="installation">
                <Typography variant="heading4" htmlElement="h2">
                    Installation
                </Typography>
                <Typography variant="body1">
                    To get started with our library, simply install it using npm
                    or yarn with the following command:
                </Typography>
                <br />
                <Code language="bash">npm i @corelabui/rfm</Code>
                <br />
                <Typography variant="body1">or</Typography>
                <Code language="bash">yarn add @corelabui/rfm</Code>
                <br />
            </section>
            <section className={classes.main__section} id="example">
                <Typography variant="heading4" htmlElement="h2">
                    Example
                </Typography>
                <Typography variant="body1">
                    Here&apos;s an example of using React Form Manager for a
                    straightforward uncontrolled form with username field with
                    validation
                </Typography>
                <br />
                <iframe
                    src="https://codesandbox.io/embed/rfm-basic-form-example-nvg3rr?fontsize=14&hidenavigation=1&theme=dark&view=editor"
                    style={{
                        width: '100%',
                        height: '500px',
                        border: 0,
                        borderRadius: '4px',
                        overflow: 'hidden'
                    }}
                    title="RFM Basic Form example"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
            </section>
            <footer className={classes.footer}>
                <Typography variant="caption" align="right">
                    Next
                </Typography>
                <Link href="/forms/api/form">API</Link>
            </footer>
        </MainLayout>
    );
};

export default Forms;

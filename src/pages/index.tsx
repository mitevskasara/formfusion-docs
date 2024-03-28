import { Dispatch, SetStateAction, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'corelabui/Button';
import Typography from 'corelabui/Typography';
import Highlight from 'corelabui/Highlight';
import Divider from 'corelabui/Divider';
import Input from 'corelabui/Input';
import { Form } from 'formfusion';

import axios from 'axios';

import { copy } from '@/utils/general';
import Code from '@/components/Code';
import FormExample from '@/components/FormExample';

import MAILERLITE_API_KEY from '@/constants/api-key';
import { COMPONENTS } from '@/constants/examples';

import classes from './main.module.scss';
import META_DATA from '@/constants/metaData';
import LPHeader from '@/components/LPHeader';

const MainPage = () => {
    let timer: any = null;
    let successTimer: any = null;
    const year = new Date().getFullYear();
    const [title, setTitle] = useState('Copy');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onClick = () => {
        copy('npm i formfusion');
        setTitle('Copied!');
        timer = setTimeout(() => setTitle('Copy'), 3000);
    };

    const goTo = (link: string) => window?.open(link, '_self');

    const handleSubscribe = async (data: any) => {
        try {
            await axios.post(
                'https://connect.mailerlite.com/api/subscribers',
                {
                    email: data.email
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${MAILERLITE_API_KEY}`
                    }
                }
            );
            setSuccess('Thank you for subscripting!');
            successTimer = setTimeout(() => setSuccess(''), 5000);
        } catch (error) {
            setError('Subscription failed. Please try again.');
        }
    };

    return (
        <>
            <Head>
                <title>{META_DATA.title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta property="title" content={META_DATA.title} />
                <meta name="description" content={META_DATA.description} />
                <meta property="image" content={META_DATA.image} />

                <meta property="og:url" content="https://www.corelabui.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content={META_DATA.description}
                />
                <meta property="og:image" content={META_DATA.image} />
                <meta name="keywords" content={META_DATA.keywords}></meta>
                <link rel="canonical" href="https://www.corelabui.com" />
            </Head>
            <LPHeader />
            <section className={`${classes.section} ${classes.hero}`}>
                <div
                    className={`${classes.section__inner} ${classes.hero__inner}`}>
                    <Typography
                        variant="heading1"
                        htmlElement="h1"
                        align="center"
                        color="var(--light)">
                        The&nbsp;
                        <Highlight
                            textGradient={{
                                direction: 'left',
                                colors: '#FFFFFF,var(--accent),#9f7121'
                            }}>
                            ultimate way&nbsp;
                        </Highlight>
                        to build forms&nbsp;in React
                    </Typography>
                    <Typography
                        variant="heading6"
                        htmlElement="h2"
                        align="center"
                        color="var(--light)">
                        FormFusion is a lightweight library for buidling forms
                        in React that offers built-in validation, input masking,
                        error handling & more.
                    </Typography>
                    <div className={classes.hero__inner__action}>
                        <div
                            className={classes.hero__inner__action__code}
                            title="Copy"
                            onClick={onClick}
                            role="button">
                            <span
                                className={
                                    classes.hero__inner__action__code__tooltip
                                }>
                                {title}
                            </span>
                            <code
                                className={
                                    classes.hero__inner__action__code__inner
                                }>
                                <span>npm i&nbsp;</span>formfusion
                            </code>
                        </div>
                        <Button
                            size="large"
                            variant="secondary"
                            onClick={() => goTo('/formfusion')}>
                            Get started
                        </Button>
                    </div>
                </div>
            </section>
            <section className={`${classes.section} ${classes.features}`}>
                <div
                    className={`${classes.section__inner} ${classes.features__inner}`}>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                align="center"
                                color="var(--accent)">
                                Built-in validation
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                align="center"
                                color="var(--light)">
                                Provides a large collection of thoroughly tested
                                and ready to use validation rules
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                align="center"
                                color="var(--accent)">
                                Intuitive
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                align="center"
                                color="var(--light)">
                                Practical solution based on native HTML form
                                features neatly packaged into familiar React
                                components and hooks. No learning required
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                align="center"
                                color="var(--accent)">
                                Lightweight
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                align="center"
                                color="var(--light)">
                                Minimal yet efficient library that does not rely
                                on any external dependencies
                            </Typography>
                        </div>
                    </div>
                </div>
                <br /> <br />
            </section>
            <section className={`${classes.section} ${classes.services}`}>
                <div className={classes.services__inner}>
                    <Typography
                        variant="heading6"
                        htmlElement="h2"
                        align="center"
                        color="var(--accent)">
                        Features
                    </Typography>
                    <Typography
                        variant="heading3"
                        htmlElement="h2"
                        align="center">
                        Why FormFusion?
                    </Typography>
                    <div className={classes.services__inner__cards}>
                        <div className={classes.services__inner__cards__card}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                margin={false}
                                color="var(--primary)">
                                Optimized Form components
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                margin={false}>
                                FormFusion offers optimized form components such
                                as Form, Input and Textarea to streamline your
                                development process. The components are designed
                                for efficiency, fast rendering and minimal
                                resource usage. They are completely customizable
                                and very easy to use.
                            </Typography>
                        </div>
                        <div className={classes.services__inner__cards__card}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                margin={false}
                                color="var(--primary)">
                                Custom React hooks for greater form control
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                margin={false}>
                                By default all Form elements in FormFusion are
                                uncontrolled to ensure the best performance and
                                minimal re-rendering. To gain more control over
                                the form fields, FormFusion offers custom react
                                hooks that can be used to access field values,
                                errors etc.
                            </Typography>
                        </div>
                        <div className={classes.services__inner__cards__card}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                margin={false}
                                color="var(--primary)">
                                Error handling
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                margin={false}
                                color="var(--primary)">
                                FormFusion takes care of error handling by
                                providing automated error messages depending on
                                the field type while also offering full field
                                accessibility. The error messages are very easy
                                to customize.
                            </Typography>
                        </div>
                        <div className={classes.services__inner__cards__card}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                margin={false}
                                color="var(--primary)">
                                500+ Validation rules
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                margin={false}>
                                The validation library consists of over 500
                                validation rules. Whether it&apos;s simple text
                                inputs or complex custom fields, we&apos;ve got
                                you covered. With a wide array of validation
                                rules, you can ensure data integrity and
                                accuracy, tailored to your specific
                                requirements.
                            </Typography>
                        </div>
                        <div className={classes.services__inner__cards__card}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                margin={false}
                                color="var(--primary)">
                                Input masking
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                margin={false}>
                                FormFusion library provides input masking,
                                allowing you to define custom formats and
                                restrictions for user input. With this feature,
                                you can easily enforce specific formats such as
                                phone numbers, dates, or credit card numbers,
                                ensuring data consistency and accuracy
                                throughout your forms.
                            </Typography>
                        </div>
                        <div className={classes.services__inner__cards__card}>
                            <Typography
                                variant="heading5"
                                htmlElement="h2"
                                margin={false}
                                color="var(--primary)">
                                Integration with UI libraries
                            </Typography>
                            <br />
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                margin={false}>
                                Integrate FormFusion with your preferred UI
                                libraries for a cohesive development experience.
                                The library offers easy compatibility with
                                popular libraries like Material-UI, Ant Design,
                                Reactstrap and more, ensuring consistency and
                                style across your entire application. With this
                                integration, leverage the power of FormFusion
                                while maintaining your preferred design
                                components.
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.section} id="demo">
                <div
                    className={`${classes.section__inner} ${classes.section__example__title}`}>
                    <Typography
                        variant="heading6"
                        htmlElement="h2"
                        align="center"
                        color="var(--accent)">
                        Interactive Demo
                    </Typography>
                    <Typography
                        variant="heading3"
                        htmlElement="h2"
                        align="center">
                        See FormFusion in Action!
                    </Typography>
                    <Typography variant="body1" htmlElement="p" align="center">
                        This code snippet shows a simple payment form built with
                        FormFusion.
                        <br />
                        It highlights the library&apos;s user-friendly approach
                        with built-in validation and customizable fields.
                    </Typography>
                    <br /> <br />
                    <div className={classes.section__example__heading}>
                        <a
                            href="https://stackblitz.com/edit/vitejs-vite-ahj7lp?file=src%2FApp.tsx"
                            target="_blank">
                            <Image
                                src="/assets/stackblitz_logo.png"
                                width={100}
                                height={25}
                                alt="stackblitz logo"
                            />
                        </a>
                    </div>
                    <div className={classes.section__example}>
                        <div className={classes.section__example__code}>
                            <Code language="javascript">{COMPONENTS.form}</Code>
                        </div>
                        <FormExample />
                    </div>
                </div>
            </section>
            <section className={`${classes.section} ${classes.cta}`}>
                <div
                    className={`${classes.section__inner} ${classes.cta__inner}`}>
                    <Typography
                        variant="heading3"
                        htmlElement="h2"
                        align="center"
                        color="var(--light)">
                        Ready to take the next step?
                    </Typography>
                    <Typography
                        variant="body1"
                        htmlElement="p"
                        align="center"
                        color="var(--light)">
                        Get started with FormFusion today and experience the
                        difference!
                        <br />
                        Explore our detailed documentation and dive into the
                        world of effortless form development.
                    </Typography>
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="secondary"
                        onClick={() => goTo('/formfusion')}>
                        Get Started
                    </Button>
                </div>
            </section>
            <footer className={classes.footer}>
                <div className={classes.footer__inner}>
                    <div className={classes.footer__inner__navigation}>
                        <nav
                            className={classes.footer__inner__navigation__item}>
                            <Typography variant="heading6" htmlElement="h3">
                                Resources
                            </Typography>
                            <Link href="/formfusion#installation">
                                Installation
                            </Link>
                            <Link href="/formfusion#example">Example</Link>
                            <Link href="/formfusion/api/form">
                                API Reference
                            </Link>
                        </nav>
                        <nav
                            className={classes.footer__inner__navigation__item}>
                            <Typography variant="heading6" htmlElement="h3">
                                Integration
                            </Typography>
                            <Link
                                href="/formfusion/integrations/mui"
                                target="_blank">
                                Material UI
                            </Link>
                            <Link
                                href="/formfusion/integrations/antdesign"
                                target="_blank">
                                Ant Design
                            </Link>
                            <Link
                                href="/formfusion/integrations/chakraui"
                                target="_blank">
                                Chakra UI
                            </Link>
                            <Link
                                href="/formfusion/integrations/reactstrap"
                                target="_blank">
                                Reactstrap
                            </Link>
                        </nav>
                        <nav
                            className={classes.footer__inner__navigation__item}>
                            <Typography variant="heading6" htmlElement="h3">
                                About
                            </Typography>
                            <Link
                                href="https://github.com/corelabui"
                                target="_blank">
                                Github
                            </Link>
                            <Link
                                href="https://github.com/corelabui"
                                target="_blank">
                                Twitter
                            </Link>
                            <Link
                                href="https://github.com/corelabui"
                                target="_blank">
                                Threads
                            </Link>
                        </nav>
                        <nav
                            className={classes.footer__inner__navigation__item}>
                            <Typography variant="heading6" htmlElement="h3">
                                Subscribe to our newsletter
                            </Typography>
                            <Form
                                className={
                                    classes.footer__inner__subscribe__form
                                }
                                onSubmit={handleSubscribe}>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Button type="submit">Subscribe</Button>
                            </Form>
                            {error && (
                                <Typography
                                    variant="body1"
                                    htmlElement="span"
                                    color="red">
                                    {error}
                                </Typography>
                            )}
                            {success && (
                                <Typography
                                    variant="body1"
                                    htmlElement="span"
                                    margin={false}>
                                    {success}
                                </Typography>
                            )}
                        </nav>
                    </div>
                    <Divider />
                    <br />
                    <Typography variant="caption" margin={false}>
                        Copyright © {year} CoreLab UI. All rights reserved.
                    </Typography>
                </div>
            </footer>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default MainPage;

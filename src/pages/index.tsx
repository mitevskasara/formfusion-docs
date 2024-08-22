import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Button from 'corelabui/Button';
import Typography from 'corelabui/Typography';
import Highlight from 'corelabui/Highlight';

import { copy } from '@/utils/general';
import Code from '@/components/Code';

import { LP_EXAMPLE } from '@/constants/examples';

import classes from './main.module.scss';
import META_DATA from '@/constants/metaData';
import LPHeader from '@/components/LPHeader';
import LPFooter from '@/components/LPFooter';
import LPFormExample from '@/components/LPFormExample';
import ROUTES from '@/constants/routes';
import Link from 'next/link';
import posts from '@/constants/posts';

const MainPage = () => {
    let timer: any = null;
    const [title, setTitle] = useState('Copy');
    const [view, setView] = useState('demo');

    const onClick = () => {
        copy('npm i formfusion');
        setTitle('Copied!');
        timer = setTimeout(() => setTitle('Copy'), 3000);
    };

    const goTo = (link: string) => window?.open(link, '_self');

    return (
        <>
            <Head>
                <title>FormFusion: The right way to build forms in React</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta
                    property="title"
                    content="FormFusion: The right way to build forms in React"
                />
                <meta name="description" content={META_DATA.description} />
                <meta property="image" content={META_DATA.image} />

                <meta property="og:url" content="https://www.formfusion.dev" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="FormFusion: The right way to build forms in React"
                />
                <meta
                    property="og:description"
                    content={META_DATA.description}
                />
                <meta property="og:image" content={META_DATA.image} />
                <meta name="keywords" content={META_DATA.keywords}></meta>
                <link rel="canonical" href="https://www.formfusion.dev" />
            </Head>
            <LPHeader />
            <section className={classes.hero}>
                <div
                    className={`${classes.section__inner} ${classes.hero__inner}`}>
                    <div className={classes.hero__inner__left}>
                        <Typography variant="heading1" htmlElement="h1">
                            Build forms
                            <br />
                            the&nbsp;
                            <Highlight
                                textGradient={{
                                    direction: 'left',
                                    colors: '#FFFFFF,#4B7C9B,#294456'
                                }}>
                                right way.&nbsp;
                            </Highlight>
                        </Typography>
                        <Typography variant="subtitle1" htmlElement="h2">
                            Lightweight library for building forms in React that
                            offers built-in validation, input masking, error
                            handling & more.
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
                                    <span
                                        className="icon-copy"
                                        style={{ cursor: 'pointer' }}
                                    />
                                    &nbsp;&nbsp;
                                    <span>npm i&nbsp;</span>formfusion
                                </code>
                            </div>
                            <Button size="large" onClick={() => goTo('/docs')}>
                                Get started
                            </Button>
                        </div>
                    </div>
                    <div className={classes.hero__inner__right}>
                        <div
                            className={`${classes.hero__inner__right__editor} ${
                                view === 'code'
                                    ? classes.hero__inner__right__editor_front
                                    : ''
                            }`}
                            onClick={() => setView('code')}>
                            <div
                                className={
                                    classes.hero__inner__right__editor__toolbar
                                }>
                                <div
                                    className={
                                        classes.hero__inner__right__editor__toolbar__actions
                                    }>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <div
                                    className={
                                        classes.hero__inner__right__editor__toolbar__middle
                                    }>
                                    <span>Test Form</span>
                                </div>
                                <div />
                            </div>
                            <Code
                                language="javascript"
                                canCopy={false}
                                className={
                                    classes.hero__inner__right__editor__code
                                }>
                                {LP_EXAMPLE}
                            </Code>
                        </div>
                        <div
                            className={`
                                    ${classes.hero__inner__right__editor__demo}
                                    ${
                                        view === 'demo'
                                            ? classes.hero__inner__right__editor__demo_front
                                            : ''
                                    }
                                `}
                            onClick={() => setView('demo')}>
                            <LPFormExample />
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${classes.section} ${classes.features}`}>
                <Typography variant="heading4" htmlElement="h2" align="center">
                    How FormFusion stands out
                </Typography>
                <br />
                <br />
                <div
                    className={`${classes.section__inner} ${classes.features__inner}`}>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <span className="icon-check-square" />
                            <Typography variant="heading5" htmlElement="h2">
                                Built-in validation
                            </Typography>
                            <Typography variant="body1" htmlElement="p">
                                Provides a large collection of thoroughly tested
                                and ready to use validation rules.
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <span className="icon-package" />
                            <Typography variant="heading5" htmlElement="h2">
                                Intuitive
                            </Typography>
                            <Typography variant="body1" htmlElement="p">
                                Practical solution based on native HTML form
                                features neatly packaged into familiar React
                                components and hooks. No learning required.
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <span className="icon-feather" />
                            <Typography variant="heading5" htmlElement="h2">
                                Lightweight
                            </Typography>
                            <Typography variant="body1" htmlElement="p">
                                Minimal yet efficient library that does not rely
                                on any external dependencies.
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <span className="icon-layers" />
                            <Typography variant="heading5" htmlElement="h2">
                                Compatible
                            </Typography>
                            <Typography variant="body1" htmlElement="p">
                                Perfectly integrates with any UI library such as
                                Material UI, Ant Design, Chakra UI, Reactstrap
                                and many more.
                            </Typography>
                        </div>
                    </div>
                </div>
                <br /> <br />
            </section>
            <section className={`${classes.section} ${classes.services}`}>
                <div className={classes.section__inner}>
                    <Typography
                        variant="heading4"
                        htmlElement="h2"
                        align="center">
                        What FormFusion includes
                    </Typography>
                    <br />
                    <br />
                    <div className={classes.services__cards}>
                        <div className={classes.services__cards__card}>
                            <div>
                                <Typography
                                    variant="heading5"
                                    htmlElement="h2"
                                    margin={false}
                                    color="var(--title)">
                                    Optimized Form components
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    htmlElement="p"
                                    margin={false}>
                                    FormFusion offers optimized form components
                                    such as Form, Input and Textarea to
                                    streamline your development process. The
                                    components are designed for efficiency, fast
                                    rendering and minimal resource usage. They
                                    are completely customizable and very easy to
                                    use.
                                </Typography>
                            </div>
                            <Link
                                href={`/${ROUTES.form}`}
                                target="_blank"
                                className={classes.services__cards__card__link}>
                                Learn more
                                <span className="icon-arrow-right" />
                            </Link>
                        </div>
                        <div className={classes.services__cards__card}>
                            <div>
                                <Typography
                                    variant="heading5"
                                    htmlElement="h2"
                                    margin={false}
                                    color="var(--title">
                                    Custom React hooks for greater form control
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    htmlElement="p"
                                    margin={false}>
                                    By default all Form elements in FormFusion
                                    are uncontrolled to ensure the best
                                    performance and minimal re-rendering. To
                                    gain more control over the form fields,
                                    FormFusion offers custom react hooks that
                                    can be used to access field values, errors
                                    etc.
                                </Typography>
                            </div>
                            <Link
                                href={`/${ROUTES.useform}`}
                                target="_blank"
                                className={classes.services__cards__card__link}>
                                Learn more
                                <span className="icon-arrow-right" />
                            </Link>
                        </div>
                        <div className={classes.services__cards__card}>
                            <div>
                                <Typography
                                    variant="heading5"
                                    htmlElement="h2"
                                    margin={false}
                                    color="var(--title">
                                    Error handling
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    htmlElement="p"
                                    margin={false}
                                    color="var(--title">
                                    FormFusion takes care of error handling by
                                    providing automated error messages depending
                                    on the field type while also offering full
                                    field accessibility. The error messages are
                                    very easy to customize.
                                </Typography>
                            </div>
                            <Link
                                href={`/${ROUTES.form}`}
                                target="_blank"
                                className={classes.services__cards__card__link}>
                                Learn more
                                <span className="icon-arrow-right" />
                            </Link>
                        </div>
                        <div className={classes.services__cards__card}>
                            <div>
                                <Typography
                                    variant="heading5"
                                    htmlElement="h2"
                                    margin={false}
                                    color="var(--title">
                                    500+ Validation rules
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    htmlElement="p"
                                    margin={false}>
                                    The validation library consists of over 500
                                    validation rules. Whether it&apos;s simple
                                    text inputs or complex custom fields,
                                    we&apos;ve got you covered. With a wide
                                    array of validation rules, you can ensure
                                    data integrity and accuracy, tailored to
                                    your specific requirements.
                                </Typography>
                            </div>
                            <Link
                                href={`/${ROUTES.validation}`}
                                target="_blank"
                                className={classes.services__cards__card__link}>
                                Learn more
                                <span className="icon-arrow-right" />
                            </Link>
                        </div>
                        <div className={classes.services__cards__card}>
                            <div>
                                <Typography
                                    variant="heading5"
                                    htmlElement="h2"
                                    margin={false}
                                    color="var(--title">
                                    Input masking
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    htmlElement="p"
                                    margin={false}>
                                    FormFusion library provides input masking,
                                    allowing you to define custom formats and
                                    restrictions for user input. With this
                                    feature, you can easily enforce specific
                                    formats such as phone numbers, dates, or
                                    credit card numbers, ensuring data
                                    consistency and accuracy throughout your
                                    forms.
                                </Typography>
                            </div>
                            <Link
                                href={`/${ROUTES.masking}`}
                                target="_blank"
                                className={classes.services__cards__card__link}>
                                Learn more
                                <span className="icon-arrow-right" />
                            </Link>
                        </div>
                        <div className={classes.services__cards__card}>
                            <div>
                                <Typography
                                    variant="heading5"
                                    htmlElement="h2"
                                    margin={false}
                                    color="var(--title">
                                    Integration with UI libraries
                                </Typography>
                                <br />
                                <Typography
                                    variant="body1"
                                    htmlElement="p"
                                    margin={false}>
                                    Integrate FormFusion with your preferred UI
                                    libraries for a cohesive development
                                    experience. The library offers easy
                                    compatibility with popular libraries like
                                    Material-UI, Ant Design, Reactstrap and
                                    more, ensuring consistency and style across
                                    your entire application. With this
                                    integration, leverage the power of
                                    FormFusion while maintaining your preferred
                                    design components.
                                </Typography>
                            </div>
                            <Link
                                href={`/${ROUTES.integrations}`}
                                target="_blank"
                                className={classes.services__cards__card__link}>
                                Learn more
                                <span className="icon-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${classes.section} ${classes.blog}`}>
                <div className={`${classes.section__inner}`}>
                    <Typography
                        variant="heading4"
                        htmlElement="h2"
                        align="center">
                        View our blog
                    </Typography>
                    <br />
                    <br />
                    <div className={classes.blog__outter}>
                        {posts.map((post, idx) => (
                            <>
                                <Link
                                    key={post.url}
                                    href={post.url}
                                    target="_blank"
                                    className={classes.blog__post}>
                                    <div className={classes.blog__post__image}>
                                        <Image
                                            src={post.image}
                                            alt={post.image}
                                            fill
                                            sizes="100%"
                                        />
                                    </div>
                                    <Typography
                                        variant="subtitle1"
                                        htmlElement="h3"
                                        className={classes.blog__post__title}
                                        lines={2}
                                        overflow="ellipsis">
                                        {post.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        htmlElement="p"
                                        className={classes.blog__post__title}
                                        lines={2}
                                        overflow="ellipsis">
                                        {post.description}
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="caption"
                                        htmlElement="span"
                                        color="var(--text-secondary)"
                                        className={classes.blog__post__tag}>
                                        {post.tag}
                                    </Typography>
                                </Link>
                                {idx <= 1 && (
                                    <div
                                        className={classes.blog__post__divider}
                                    />
                                )}
                            </>
                        ))}
                    </div>
                    <Link
                        href={`/${ROUTES.blog}`}
                        target="_blank"
                        className={classes.blog__outter__action}>
                        Read all blog posts
                    </Link>
                </div>
            </section>
            <section className={`${classes.section} ${classes.cta}`}>
                <div
                    className={`${classes.section__inner} ${classes.cta__inner}`}>
                    <Typography
                        variant="heading3"
                        htmlElement="h2"
                        align="center">
                        Be part of
                        <Highlight
                            textGradient={{
                                direction: 'left',
                                colors: '#FFFFFF,#4B7C9B,#294456'
                            }}>
                            &nbsp;the change.
                        </Highlight>
                    </Typography>
                    <Typography variant="body1" htmlElement="p" align="center">
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
                        variant="primary"
                        onClick={() => goTo('/docs')}>
                        Get Started
                    </Button>
                </div>
            </section>
            <div className={classes.section__footer}>
                <LPFooter />
            </div>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default MainPage;

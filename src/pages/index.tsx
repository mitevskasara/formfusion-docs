import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'corelabui/Button';
import Typography from 'corelabui/Typography';
import Highlight from 'corelabui/Highlight';
import Divider from 'corelabui/Divider';
import Input from 'corelabui/Input';
import { Form } from '@corelabui/rfm';

import axios from 'axios';

import { copy } from '@/utils/general';
import ClientComponent from '@/components/ClientComponent';

import MAILERLITE_API_KEY from '@/constants/api-key';

import classes from './main.module.scss';

interface IMainPageProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const MainPage = ({ theme, setTheme }: IMainPageProps) => {
    let timer: any = null;
    let successTimer: any = null;
    const [title, setTitle] = useState('Copy');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const onClick = () => {
        copy('npm i @corelabui/rfm');
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
            <header className={classes.header}>
                <div className={classes.header__inner}>
                    <div className={classes.header__inner__left}>
                        <ClientComponent>
                            <Image
                                src={`/assets/logo/${theme}/logo.svg`}
                                width={220}
                                height={57}
                                alt="CoreLab UI logo"
                                className={classes.header__inner__left__logo}
                            />
                        </ClientComponent>
                        <ClientComponent>
                            <Image
                                src={`/assets/logo/${theme}/logo-icon.svg`}
                                width={27}
                                height={39}
                                alt="CoreLab UI logo"
                                className={
                                    classes.header__inner__left__logo_mobile
                                }
                            />
                        </ClientComponent>
                    </div>
                    <div className={classes.header__inner__right}>
                        <div className={classes.header__inner__right__nav}>
                            <Link
                                href="/react-form-manager"
                                className={
                                    classes.header__inner__right__nav__link
                                }>
                                Documentation
                            </Link>
                        </div>
                        {/* <div className={classes.header__inner__right__menuIcon}>
                            <HamburgerMenu open={false} setIsOpen={() => { }} />
                        </div> */}
                    </div>
                </div>
            </header>
            <section className={classes.section}>
                <div className={`${classes.section__inner} ${classes.hero}`}>
                    <Typography
                        variant="heading1"
                        htmlElement="h1"
                        align="center">
                        The&nbsp;
                        <Highlight
                            textGradient={{
                                direction: 'left',
                                colors: '#e9bbc4,#023e8a'
                            }}>
                            ultimate way&nbsp;
                        </Highlight>
                        <br />
                        to build forms&nbsp;
                        <br />
                        in React
                    </Typography>
                    <div className={classes.hero__action}>
                        <div
                            className={classes.hero__action__code}
                            title="Copy"
                            onClick={onClick}
                            role="button">
                            <span
                                className={classes.hero__action__code__tooltip}>
                                {title}
                            </span>
                            <code className={classes.hero__action__code__inner}>
                                <span>npm i&nbsp;</span>@corelabui/rfm
                            </code>
                        </div>
                        <Button
                            size="large"
                            onClick={() => goTo('/react-form-manager')}>
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
                                htmlElement="h3"
                                align="center">
                                Built-in validation
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                align="center">
                                Provides a large collection of thoroughly tested
                                and ready to use validation patterns
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.features__card}>
                        <div className={classes.features__card__inner}>
                            <Typography
                                variant="heading5"
                                htmlElement="h3"
                                align="center">
                                Intuitive
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                align="center">
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
                                htmlElement="h3"
                                align="center">
                                Lightweight
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                align="center">
                                Efficient but minimal library that does not rely
                                on any external dependencies
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>
            <section className={classes.section}>
                <div className={classes.section__inner}>
                    <Typography
                        variant="heading4"
                        htmlElement="h2"
                        align="center">
                        React Form Manager in Action
                    </Typography>
                    <Typography variant="body1" htmlElement="p" align="center">
                        Our library comes with an extensive list of input types
                        with thoroughly tested built-in validation patterns,
                        error handling, optimized controlled and uncontrolled
                        usage and fully customizable form components.
                    </Typography>
                    <br /> <br />
                    <iframe
                        src="https://codesandbox.io/embed/sjw4ds?view=editor+%2B+preview&module=%2Fsrc%2FApp.js&expanddevtools=1"
                        style={{
                            width: '100%',
                            height: '500px',
                            border: 0,
                            borderRadius: '4px',
                            overflow: 'hidden',
                            marginBottom: '3em'
                        }}
                        title="React Form Manager Basic payment form"
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    />
                    <Typography
                        variant="heading5"
                        htmlElement="h4"
                        align="center">
                        What React Form Manager offers
                    </Typography>
                    <div className={classes.services}>
                        <ul className={classes.services__list}>
                            <li>
                                <span
                                    className={`${classes.services__list__icon} icon-check`}
                                />
                                <Typography variant="body1" htmlElement="span">
                                    Optimized Form components
                                </Typography>
                            </li>
                            <li>
                                <span
                                    className={`${classes.services__list__icon} icon-check`}
                                />
                                <Typography variant="body1" htmlElement="span">
                                    Custom React hooks for greater form control
                                </Typography>
                            </li>
                            <li>
                                <span
                                    className={`${classes.services__list__icon} icon-check`}
                                />
                                <Typography variant="body1" htmlElement="span">
                                    Error handling
                                </Typography>
                            </li>
                        </ul>
                        <ul className={classes.services__list}>
                            <li>
                                <span
                                    className={`${classes.services__list__icon} icon-check`}
                                />
                                <Typography variant="body1" htmlElement="span">
                                    500+ Input types
                                </Typography>
                            </li>
                            <li>
                                <span
                                    className={`${classes.services__list__icon} icon-check`}
                                />
                                <Typography variant="body1" htmlElement="span">
                                    500+ Validation patterns
                                </Typography>
                            </li>
                            <li>
                                <span
                                    className={`${classes.services__list__icon} icon-check`}
                                />
                                <Typography variant="body1" htmlElement="span">
                                    Integration with UI libraries
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={`${classes.section} ${classes.cta}`}>
                <div
                    className={`${classes.section__inner} ${classes.cta__inner}`}>
                    <Typography
                        variant="heading4"
                        htmlElement="h2"
                        align="center"
                        color="var(--light)">
                        Ready to take the next step?
                    </Typography>
                    <br />
                    <br />
                    <Button
                        size="large"
                        variant="secondary"
                        onClick={() => goTo('/react-form-manager')}>
                        Get Started
                    </Button>
                </div>
            </section>
            <footer className={classes.footer}>
                <div className={classes.footer__inner}>
                    <div className={classes.footer__inner__navigation}>
                        <nav
                            className={classes.footer__inner__navigation__item}>
                            <Typography variant="heading6" htmlElement="h6">
                                Resources
                            </Typography>
                            <Link href="/react-form-manager#installation">
                                Installation
                            </Link>
                            <Link href="/react-form-manager#example">
                                Example
                            </Link>
                            <Link href="/react-form-manager/api/form">
                                API Reference
                            </Link>
                        </nav>
                        <nav
                            className={classes.footer__inner__navigation__item}>
                            <Typography variant="heading6" htmlElement="h6">
                                Integration
                            </Typography>
                            <Link
                                href="/react-form-manager/integrations/mui"
                                target="_blank">
                                Material UI
                            </Link>
                            <Link
                                href="/react-form-manager/integrations/antdesign"
                                target="_blank">
                                Ant Design
                            </Link>
                            <Link
                                href="/react-form-manager/integrations/chakraui"
                                target="_blank">
                                Chakra UI
                            </Link>
                            <Link
                                href="/react-form-manager/integrations/reactstrap"
                                target="_blank">
                                Reactstrap
                            </Link>
                        </nav>
                        <nav
                            className={classes.footer__inner__navigation__item}>
                            <Typography variant="heading6" htmlElement="h6">
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
                            <Typography variant="heading6" htmlElement="h6">
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
                                <Typography variant="body1" htmlElement="span">
                                    {success}
                                </Typography>
                            )}
                        </nav>
                    </div>
                    <Divider />
                    <br />
                    <Typography variant="caption" margin={false}>
                        Copyright © 2023 CoreLab UI. All rights reserved.
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

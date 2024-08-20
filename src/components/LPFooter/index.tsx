import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Form } from 'formfusion';
import Input from 'corelabui/Input';
import Typography from 'corelabui/Typography';
import Button from 'corelabui/Button';

import MAILERLITE_API_KEY from '@/constants/api-key';

import classes from './footer.module.scss';

const Footer = () => {
    let successTimer: any = null;
    const year = new Date().getFullYear();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

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
        <footer className={classes.footer}>
            <div className={classes.footer__inner}>
                <div className={classes.footer__inner__navigation}>
                    <nav className={classes.footer__inner__navigation__item}>
                        <Typography variant="subtitle2" htmlElement="h3">
                            Resources
                        </Typography>
                        <Link href="/formfusion#installation">
                            Installation
                        </Link>
                        <Link href="/formfusion#example">Example</Link>
                        <Link href="/formfusion/api/form">API Reference</Link>
                    </nav>
                    <nav className={classes.footer__inner__navigation__item}>
                        <Typography variant="subtitle2" htmlElement="h3">
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
                    <nav className={classes.footer__inner__navigation__item}>
                        <Typography variant="subtitle2" htmlElement="h3">
                            Get in touch
                        </Typography>
                        <Link
                            href="https://www.linkedin.com/in/sara-mitevska-75a4a6152"
                            target="_blank"
                            title="LinkedIn">
                            LinkedIn
                        </Link>
                        <Link
                            href="https://github.com/corelabui"
                            target="_blank"
                            title="Github">
                            Github
                        </Link>
                        <Link
                            href="https://twitter.com/corelabui"
                            target="_blank"
                            title="Twitter">
                            Twitter
                        </Link>
                    </nav>
                    <nav className={classes.footer__inner__navigation__item}>
                        <Typography variant="subtitle1" htmlElement="h3">
                            Subscribe to our newsletter
                        </Typography>
                        <Form
                            className={classes.footer__inner__subscribe__form}
                            onSubmit={handleSubscribe}>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <Button type="submit" variant="secondary">
                                Subscribe
                            </Button>
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
                <br />
                <Typography
                    variant="caption"
                    margin={false}
                    className={classes.footer__copyright}>
                    Copyright © {year} FormFusion. All rights reserved.
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;

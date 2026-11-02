import { useState } from 'react';
import { Form, Input } from 'formfusion';

import classes from './showcaseForm.module.scss';

const SignInForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data: object) => {
        console.log('Sign in successful', data);
        setSubmitted(true);
    };

    return (
        <Form
            onSubmit={onSubmit}
            validateOnChange
            validateOnBlur
            className={classes.form}>
            <Input
                id="signin-email"
                name="email"
                type="email"
                label="Email address"
                placeholder="john@example.com"
                required
                validation={{
                    valueMissing: 'Please enter your email address',
                    typeMismatch: 'That doesn’t look like a valid email'
                }}
            />
            <Input
                id="signin-password"
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                required
                validation={{
                    valueMissing: 'Please enter your password'
                }}
            />
            <div className={classes.meta}>
                <Input
                    id="signin-remember"
                    name="remember"
                    type="checkbox"
                    label="Remember me"
                />
                <a href="#">Forgot password?</a>
            </div>
            {submitted && (
                <div className={classes.success}>
                    Signed in successfully!
                </div>
            )}
            <button type="submit">Sign in</button>
        </Form>
    );
};

export default SignInForm;

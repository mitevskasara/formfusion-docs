import { useState } from 'react';
import { Form, Input } from 'formfusion';

import classes from './showcaseForm.module.scss';

const SignUpForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data: object) => {
        console.log('Sign up successful', data);
        setSubmitted(true);
    };

    return (
        <Form
            onSubmit={onSubmit}
            validateOnChange
            validateOnBlur
            className={classes.form}>
            <Input
                id="signup-username"
                name="username"
                type="username"
                label="Username"
                placeholder="johndoe"
                helperText="Letters, numbers, @, - and _ only"
                required
            />
            <Input
                id="signup-email"
                name="email"
                type="email"
                label="Email address"
                placeholder="john@example.com"
                required
            />
            <Input
                id="signup-password"
                name="password"
                type="password"
                label="Password"
                placeholder="Enter a strong password"
                helperText="At least 8 characters, with a letter, a number and a symbol"
                required
            />
            <Input
                id="signup-phone"
                name="phone"
                type="tel"
                label="Phone number"
                placeholder="+1 555 123 4567"
                mask="+1 (###) ###-####"
            />
            <Input
                id="signup-terms"
                name="terms"
                type="checkbox"
                label="I agree to the Terms of Service and Privacy Policy"
                required
                validation={{
                    valueMissing: 'You must accept the terms to continue'
                }}
            />
            {submitted && (
                <div className={classes.success}>
                    Account created! Welcome aboard 🎉
                </div>
            )}
            <button type="submit">Create account</button>
        </Form>
    );
};

export default SignUpForm;

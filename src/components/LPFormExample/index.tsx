import React from 'react';
import Typography from 'corelabui/Typography';
import { Form, Input } from 'formfusion';
import classes from './formExample.module.scss';

const FormExample = () => {
    const onSubmit = (data: object) => {
        alert('Form submitted successfully' + JSON.stringify(data));
    };

    return (
        <>
            <Form
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                className={classes.form}>
                <Typography
                    variant="heading6"
                    htmlElement="p"
                    margin={false}
                    align="center"
                    color="var(--primary)">
                    Demo
                </Typography>
                <Typography
                    variant="body2"
                    htmlElement="p"
                    color="var(--text-secondary)"
                    align="center">
                    <i>
                        This interactive form demonstrates FormFusion&apos;s
                        built-in validation.
                        <br />
                        Feel free to experiment with the fields below.
                    </i>
                </Typography>
                <Input
                    id="firstName"
                    name="firstName"
                    type="alphabetic"
                    label="Test name"
                    placeholder="Type any first name"
                    required
                />
                <Input
                    id="test-email"
                    name="test-email"
                    type="email"
                    label="Test Email"
                    placeholder="Enter a sample email (e.g., test@example.com)"
                    required
                />
                <Input
                    id="phone"
                    name="phone"
                    type="text"
                    label="Test Phone number"
                    mask="(+#) ### ### ####"
                    placeholder="Enter a sample phone: e.g. (+1) 123 456 7890"
                    required
                />
                <br />
                <button type="submit">Test it</button>
            </Form>
        </>
    );
};

export default FormExample;

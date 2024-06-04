import React from 'react';
import { Form, Input } from 'formfusion';
import classes from './formExample.module.scss';

const FormExample = () => {
    const onSubmit = (data: object) => {
        alert('Form submitted successfully' + JSON.stringify(data));
    };

    return (
        <Form
            onSubmit={onSubmit}
            validateOnBlur={false}
            className={classes.form}>
            <Input
                id="firstName"
                name="firstName"
                type="alphabetic"
                label="First name"
                placeholder="What's your first name"
                required
            />
            <div className={classes.form__inline}>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    required
                />
                <Input
                    id="phone"
                    name="phone"
                    type="text"
                    label="Phone number"
                    mask="(+#) ### ### ####"
                    placeholder="(+X) XXX XXX XXXX"
                    required
                />
            </div>
            <button type="submit">Test it</button>
        </Form>
    );
};

export default FormExample;

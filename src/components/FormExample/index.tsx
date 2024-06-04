import React from 'react';
import Typography from 'corelabui/Typography';
import { Form, Input } from 'formfusion';
import classes from './formExample.module.scss';

const FormExample = () => {
    const onSubmit = (data: object) => {
        console.log('Form submitted successfully', data);
    };

    return (
        <Form onSubmit={onSubmit} validateOnChange className={classes.form}>
            <Typography variant="heading5" htmlElement="h3">
                Simple payment form
            </Typography>
            <Input
                id="credit-card-number"
                name="credit-card-number"
                type="credit-card-number-space"
                label="Credit card number"
                placeholder="1234 XXXX XXXX XXXX"
                required
            />
            <Input
                id="ccv"
                name="ccv"
                type="ccv"
                label="CCV"
                placeholder="Enter your ccv number"
                required
            />
            <Input
                id="expiry-date"
                name="expiry-date"
                type="date"
                label="Expiry date"
                required
            />
            <br />
            <button type="submit">Submit</button>
        </Form>
    );
};

export default FormExample;

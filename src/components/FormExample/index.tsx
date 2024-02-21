import React from 'react';
import Typography from 'corelabui/Typography';
import { Form, Input } from '@corelabui/rfm';
import classes from './formExample.module.scss';

const FormExample = () => {
    const onSubmit = (data: object) => {
        console.log('Form submitted successfully', data);
    };

    return (
        <Form onSubmit={onSubmit} validateOnChange className={classes.form}>
            <Typography variant="heading5" htmlElement="h5">
                Simple payment form
            </Typography>
            <Input
                id="credit-card-number"
                name="credit-card-number"
                type="credit-card-number-basic"
                label="Credit card number"
                placeholder="Enter your credit card number"
                required
                classes={{
                    field: classes.form__input_field,
                    error: classes.form__input_field__label__error_message,
                    label: classes.form__input_field__label
                }}
            />
            <Input
                id="ccv"
                name="ccv"
                type="ccv"
                label="CCV"
                placeholder="Enter your ccv number"
                required
                classes={{
                    field: classes.form__input_field,
                    error: classes.form__input_field__label__error_message,
                    label: classes.form__input_field__label
                }}
            />
            <Input
                id="expiry-date"
                name="expiry-date"
                type="date"
                label="Expiry date"
                required
                classes={{
                    field: classes.form__input_field,
                    error: classes.form__input_field__label__error_message,
                    label: classes.form__input_field__label
                }}
            />
            <button type="submit">Submit</button>
        </Form>
    );
};

export default FormExample;

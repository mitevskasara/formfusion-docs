import React, { useRef } from 'react';
import { Form, Input } from 'formfusion';
import classes from './formExample.module.scss';
import Cursor from '../Cursor';

const FormExample = () => {
    const inputRef = useRef(null);

    const onSubmit = (data: object) => {
        alert('Form submitted successfully' + JSON.stringify(data));
    };

    return (
        <>
            <Cursor targetRef={inputRef} />
            <Form onSubmit={onSubmit} validateOnChange className={classes.form}>
                <div ref={inputRef}>
                    <Input
                        id="firstName"
                        name="firstName"
                        type="alphabetic"
                        label="Test name"
                        placeholder="What's your first name"
                        required
                    />
                </div>
                <div className={classes.form__inline}>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Test Email"
                        placeholder="Enter your email"
                        required
                    />
                    <Input
                        id="phone"
                        name="phone"
                        type="text"
                        label="Test Phone number"
                        mask="(+#) ### ### ####"
                        placeholder="(+X) XXX XXX XXXX"
                        required
                    />
                </div>
                <button type="submit">Test it</button>
            </Form>
        </>
    );
};

export default FormExample;

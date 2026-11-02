import { useState } from 'react';
import { Form, Input, Select, Textarea, combine, rules } from 'formfusion';

import classes from './showcaseForm.module.scss';

const SUBJECTS = [
    { value: 'sales', label: 'Sales question' },
    { value: 'support', label: 'Technical support' },
    { value: 'billing', label: 'Billing issue' },
    { value: 'other', label: 'Something else' }
];

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data: object) => {
        console.log('Message sent', data);
        setSubmitted(true);
    };

    return (
        <Form
            onSubmit={onSubmit}
            validateOnChange
            validateOnBlur
            className={classes.form}>
            <Input
                id="contact-name"
                name="name"
                type={combine.and(rules.alphabetic, rules.minCharacters(2))}
                label="Full name"
                placeholder="Jane Smith"
                required
                validation={{
                    invalid: 'Please enter at least 2 letters, no numbers'
                }}
            />
            <Input
                id="contact-email"
                name="email"
                type="email"
                label="Email address"
                placeholder="jane@example.com"
                required
            />
            <Input
                id="contact-phone"
                name="phone"
                type="tel"
                label="Phone number (optional)"
                placeholder="+1 555 123 4567"
                mask="+1 (###) ###-####"
            />
            <Select
                id="contact-subject"
                name="subject"
                label="Subject"
                placeholder="Select a topic"
                options={SUBJECTS}
                required
            />
            <Textarea
                id="contact-message"
                name="message"
                label="Message (minimum 20 characters)"
                placeholder="How can we help?"
                minLength={20}
                required
                rows={4}
            />
            {submitted && (
                <div className={classes.success}>
                    Thanks! We&apos;ll get back to you shortly.
                </div>
            )}
            <button type="submit">Send message</button>
        </Form>
    );
};

export default ContactForm;

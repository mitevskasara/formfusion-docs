import { useState } from 'react';
import { Form, Input, Select, useForm } from 'formfusion';
import passports from '@formfusion/passports';
import phones from '@formfusion/phones';
import tin from '@formfusion/tin';

import classes from './showcaseForm.module.scss';

const PASSPORTS: Record<string, string> = passports;
const PHONES: Record<string, string> = phones;
const TIN: Record<string, string> = tin;

const COUNTRIES = [
    { code: 'us', label: 'United States', passportExample: '123456789', phoneExample: '+12025551234' },
    { code: 'gb', label: 'United Kingdom', passportExample: '123456789', phoneExample: '+447123456789' },
    { code: 'jp', label: 'Japan', passportExample: 'AB1234567', phoneExample: '+819012345678' },
    { code: 'de', label: 'Germany', passportExample: 'C01X00T47', phoneExample: '+4915123456789' },
    { code: 'fr', label: 'France', passportExample: '12AB12345', phoneExample: '+33612345678' },
    { code: 'au', label: 'Australia', passportExample: 'N1234567', phoneExample: '+61412345678' },
    { code: 'br', label: 'Brazil', passportExample: 'FZ123456', phoneExample: '+5511912345678' },
    { code: 'in', label: 'India', passportExample: 'A1234567', phoneExample: '+919812345678' },
    { code: 'cn', label: 'China', passportExample: 'G12345678', phoneExample: '+8613812345678' }
];

const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({ value: c.code, label: c.label }));

const TravelBookingForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data: object) => {
        console.log('Trip booked', data);
        setSubmitted(true);
    };

    // useForm + config lets us read the Select's value back out of form
    // state, since FormFusion's Select has no value/onChange props of its own.
    const config = useForm({
        onSubmit,
        validateOnChange: true,
        validateOnBlur: true,
        initialValues: { country: COUNTRIES[0].code }
    });

    const country = config.values.country || COUNTRIES[0].code;
    const current = COUNTRIES.find((c) => c.code === country) ?? COUNTRIES[0];
    const tinPattern = TIN[country];

    return (
        <Form config={config} className={classes.form}>
            <Input
                id="travel-name"
                name="name"
                type="alphabetic"
                label="Full name (as on passport)"
                placeholder="Alex Johnson"
                required
            />
            <Select
                id="travel-country"
                name="country"
                label="Nationality"
                options={COUNTRY_OPTIONS}
                required
            />
            <Input
                key={`passport-${country}`}
                id="travel-passport"
                name="passport"
                type={PASSPORTS[country]}
                label="Passport number"
                placeholder={current.passportExample}
                required
                validation={{
                    patternMismatch: `Enter a valid ${current.label} passport number, e.g. ${current.passportExample}`
                }}
            />
            <Input
                key={`phone-${country}`}
                id="travel-phone"
                name="phone"
                type={PHONES[country]}
                label="Phone number"
                placeholder={current.phoneExample}
                required
                validation={{
                    patternMismatch: `Enter a valid ${current.label} phone number, e.g. ${current.phoneExample}`
                }}
            />
            {tinPattern ? (
                <Input
                    key={`tin-${country}`}
                    id="travel-tin"
                    name="tin"
                    type={tinPattern}
                    label="EU Tax ID (optional)"
                    helperText={`Only required for travellers registered for tax in ${current.label}`}
                />
            ) : (
                <p className={classes.hint}>
                    No EU Tax ID needed for {current.label} passport holders.
                </p>
            )}
            {submitted && (
                <div className={classes.success}>Trip booked!</div>
            )}
            <button type="submit">Book trip</button>
        </Form>
    );
};

export default TravelBookingForm;

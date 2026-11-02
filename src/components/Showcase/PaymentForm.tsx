import { useState } from 'react';
import { Form, Input, Select, useForm } from 'formfusion';
import vat from '@formfusion/vat';
import iban from '@formfusion/iban';

import classes from './showcaseForm.module.scss';

const VAT: Record<string, string> = vat;
const IBAN: Record<string, string> = iban;

const COUNTRIES = [
    { code: 'de', label: 'Germany', vatExample: 'DE123456789', ibanExample: 'DE89370400440532013000' },
    { code: 'at', label: 'Austria', vatExample: 'ATU12345678', ibanExample: 'AT611904300234573201' },
    { code: 'fr', label: 'France', vatExample: 'FR12345678901', ibanExample: 'FR1420041010050500013M02606' },
    { code: 'nl', label: 'Netherlands', vatExample: 'NL123456789B01', ibanExample: 'NL91ABNA0417164300' },
    { code: 'es', label: 'Spain', vatExample: 'ESX1234567X', ibanExample: 'ES9121000418450200051332' },
    { code: 'it', label: 'Italy', vatExample: 'IT12345678901', ibanExample: 'IT60X0542811101000000123456' }
];

const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({ value: c.code, label: c.label }));

const PaymentForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data: object) => {
        console.log('Payment details submitted', data);
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

    return (
        <Form config={config} className={classes.form}>
            <Input
                id="payment-company"
                name="company"
                type="text"
                label="Company name"
                placeholder="Acme GmbH"
                required
            />
            <Select
                id="payment-country"
                name="country"
                label="Country"
                options={COUNTRY_OPTIONS}
                required
            />
            <Input
                key={`vat-${country}`}
                id="payment-vat"
                name="vat"
                type={VAT[country]}
                label="VAT number"
                placeholder={current.vatExample}
                required
                validation={{
                    patternMismatch: `Enter a valid ${current.label} VAT number, e.g. ${current.vatExample}`
                }}
            />
            <Input
                key={`iban-${country}`}
                id="payment-iban"
                name="iban"
                type={IBAN[country]}
                label="IBAN"
                placeholder={current.ibanExample}
                required
                validation={{
                    patternMismatch: `Enter a valid ${current.label} IBAN, e.g. ${current.ibanExample}`
                }}
            />
            <Input
                id="payment-amount"
                name="amount"
                type="currency"
                label="Amount"
                placeholder="$1,250.00"
                required
            />
            {submitted && (
                <div className={classes.success}>Payment details saved!</div>
            )}
            <button type="submit">Send payment</button>
        </Form>
    );
};

export default PaymentForm;

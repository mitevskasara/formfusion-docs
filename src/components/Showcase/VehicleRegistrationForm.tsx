import { useState } from 'react';
import { Form, Input, Select, useForm } from 'formfusion';
import plates from '@formfusion/licence-plates';
import postcodes from '@formfusion/postcodes';
import phones from '@formfusion/phones';

import classes from './showcaseForm.module.scss';

const PLATES: Record<string, string> = plates;
const POSTCODES: Record<string, string> = postcodes;
const PHONES: Record<string, string> = phones;

const COUNTRIES = [
    { code: 'de', label: 'Germany', plateExample: 'M AB 1234', postcodeExample: '10115', phoneExample: '+4915123456789' },
    { code: 'fr', label: 'France', plateExample: 'AB-123-CD', postcodeExample: '75008', phoneExample: '+33612345678' },
    { code: 'se', label: 'Sweden', plateExample: 'ABC12A', postcodeExample: '114 18', phoneExample: '+46701234567' },
    { code: 'at', label: 'Austria', plateExample: 'B1234', postcodeExample: '1010', phoneExample: '+436612345678' },
    { code: 'pt', label: 'Portugal', plateExample: 'AA-12-BB', postcodeExample: '1000-001', phoneExample: '+351912345678' }
];

const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({ value: c.code, label: c.label }));

const VehicleRegistrationForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data: object) => {
        console.log('Vehicle registered', data);
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
                id="vehicle-owner"
                name="owner"
                type="alphabetic"
                label="Owner full name"
                placeholder="Anna Becker"
                required
            />
            <Select
                id="vehicle-country"
                name="country"
                label="Country"
                options={COUNTRY_OPTIONS}
                required
            />
            <Input
                key={`plate-${country}`}
                id="vehicle-plate"
                name="plate"
                type={PLATES[country]}
                label="Licence plate number"
                placeholder={current.plateExample}
                required
                validation={{
                    patternMismatch: `Enter a valid ${current.label} licence plate, e.g. ${current.plateExample}`
                }}
            />
            <Input
                key={`postcode-${country}`}
                id="vehicle-postcode"
                name="postcode"
                type={POSTCODES[country]}
                label="Registration address postcode"
                placeholder={current.postcodeExample}
                required
                validation={{
                    patternMismatch: `Enter a valid ${current.label} postcode, e.g. ${current.postcodeExample}`
                }}
            />
            <Input
                key={`phone-${country}`}
                id="vehicle-phone"
                name="phone"
                type={PHONES[country]}
                label="Contact phone number"
                placeholder={current.phoneExample}
                required
                validation={{
                    patternMismatch: `Enter a valid ${current.label} phone number, e.g. ${current.phoneExample}`
                }}
            />
            {submitted && (
                <div className={classes.success}>
                    Vehicle registration submitted!
                </div>
            )}
            <button type="submit">Register vehicle</button>
        </Form>
    );
};

export default VehicleRegistrationForm;

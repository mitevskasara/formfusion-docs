export const SIGNUP_EXAMPLE = `import { Form, Input } from 'formfusion';

const SignUpForm = () => {
  const onSubmit = (data) => {
    console.log('Sign up successful', data);
  };

  return (
    <Form onSubmit={onSubmit} validateOnChange validateOnBlur className="form">
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
        validation={{ valueMissing: 'You must accept the terms to continue' }}
      />
      <button type="submit">Create account</button>
    </Form>
  );
};

export default SignUpForm;
`;

export const SIGNIN_EXAMPLE = `import { Form, Input } from 'formfusion';

const SignInForm = () => {
  const onSubmit = (data) => {
    console.log('Sign in successful', data);
  };

  return (
    <Form onSubmit={onSubmit} validateOnChange validateOnBlur className="form">
      <Input
        id="signin-email"
        name="email"
        type="email"
        label="Email address"
        placeholder="john@example.com"
        required
        validation={{
          valueMissing: 'Please enter your email address',
          typeMismatch: "That doesn't look like a valid email"
        }}
      />
      <Input
        id="signin-password"
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        required
        validation={{ valueMissing: 'Please enter your password' }}
      />
      <Input id="signin-remember" name="remember" type="checkbox" label="Remember me" />
      <button type="submit">Sign in</button>
    </Form>
  );
};

export default SignInForm;
`;

export const CONTACT_EXAMPLE = `import { Form, Input, Select, Textarea, combine, rules } from 'formfusion';

const SUBJECTS = [
  { value: 'sales', label: 'Sales question' },
  { value: 'support', label: 'Technical support' },
  { value: 'billing', label: 'Billing issue' },
  { value: 'other', label: 'Something else' }
];

const ContactForm = () => {
  const onSubmit = (data) => {
    console.log('Message sent', data);
  };

  return (
    <Form onSubmit={onSubmit} validateOnChange validateOnBlur className="form">
      <Input
        id="contact-name"
        name="name"
        type={combine.and(rules.alphabetic, rules.minCharacters(2))}
        label="Full name"
        placeholder="Jane Smith"
        required
        validation={{ invalid: 'Please enter at least 2 letters, no numbers' }}
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
      <button type="submit">Send message</button>
    </Form>
  );
};

export default ContactForm;
`;

export const PAYMENT_EXAMPLE = `import { useState } from 'react';
import { Form, Input, Select, useForm } from 'formfusion';
import vat from '@formfusion/vat';
import iban from '@formfusion/iban';

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
  const onSubmit = (data) => {
    console.log('Payment details submitted', data);
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
  const current = COUNTRIES.find((c) => c.code === country);

  return (
    <Form config={config} className="form">
      <Input id="payment-company" name="company" type="text" label="Company name" required />

      <Select id="payment-country" name="country" label="Country" options={COUNTRY_OPTIONS} required />

      {/* key={country} remounts the field so the old value doesn't linger against a new pattern */}
      <Input
        key={\`vat-\${country}\`}
        id="payment-vat"
        name="vat"
        type={vat[country]}
        label="VAT number"
        placeholder={current.vatExample}
        required
        validation={{
          patternMismatch: \`Enter a valid \${current.label} VAT number, e.g. \${current.vatExample}\`
        }}
      />
      <Input
        key={\`iban-\${country}\`}
        id="payment-iban"
        name="iban"
        type={iban[country]}
        label="IBAN"
        placeholder={current.ibanExample}
        required
        validation={{
          patternMismatch: \`Enter a valid \${current.label} IBAN, e.g. \${current.ibanExample}\`
        }}
      />
      {/* "currency" is one of FormFusion's own built-in core types - no sub-package needed */}
      <Input id="payment-amount" name="amount" type="currency" label="Amount" placeholder="$1,250.00" required />
      <button type="submit">Send payment</button>
    </Form>
  );
};

export default PaymentForm;
`;

export const VEHICLE_EXAMPLE = `import { useState } from 'react';
import { Form, Input, Select, useForm } from 'formfusion';
import plates from '@formfusion/licence-plates';
import postcodes from '@formfusion/postcodes';
import phones from '@formfusion/phones';

const COUNTRIES = [
  { code: 'de', label: 'Germany', plateExample: 'M AB 1234', postcodeExample: '10115', phoneExample: '+4915123456789' },
  { code: 'fr', label: 'France', plateExample: 'AB-123-CD', postcodeExample: '75008', phoneExample: '+33612345678' },
  { code: 'se', label: 'Sweden', plateExample: 'ABC12A', postcodeExample: '114 18', phoneExample: '+46701234567' },
  { code: 'at', label: 'Austria', plateExample: 'B1234', postcodeExample: '1010', phoneExample: '+436612345678' },
  { code: 'pt', label: 'Portugal', plateExample: 'AA-12-BB', postcodeExample: '1000-001', phoneExample: '+351912345678' }
];

const COUNTRY_OPTIONS = COUNTRIES.map((c) => ({ value: c.code, label: c.label }));

const VehicleRegistrationForm = () => {
  const onSubmit = (data) => {
    console.log('Vehicle registered', data);
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
  const current = COUNTRIES.find((c) => c.code === country);

  return (
    <Form config={config} className="form">
      <Input id="vehicle-owner" name="owner" type="alphabetic" label="Owner full name" required />

      <Select id="vehicle-country" name="country" label="Country" options={COUNTRY_OPTIONS} required />

      <Input
        key={\`plate-\${country}\`}
        id="vehicle-plate"
        name="plate"
        type={plates[country]}
        label="Licence plate number"
        placeholder={current.plateExample}
        required
        validation={{
          patternMismatch: \`Enter a valid \${current.label} licence plate, e.g. \${current.plateExample}\`
        }}
      />
      <Input
        key={\`postcode-\${country}\`}
        id="vehicle-postcode"
        name="postcode"
        type={postcodes[country]}
        label="Registration address postcode"
        placeholder={current.postcodeExample}
        required
        validation={{
          patternMismatch: \`Enter a valid \${current.label} postcode, e.g. \${current.postcodeExample}\`
        }}
      />
      <Input
        key={\`phone-\${country}\`}
        id="vehicle-phone"
        name="phone"
        type={phones[country]}
        label="Contact phone number"
        placeholder={current.phoneExample}
        required
        validation={{
          patternMismatch: \`Enter a valid \${current.label} phone number, e.g. \${current.phoneExample}\`
        }}
      />
      <button type="submit">Register vehicle</button>
    </Form>
  );
};

export default VehicleRegistrationForm;
`;

export const TRAVEL_EXAMPLE = `import { useState } from 'react';
import { Form, Input, Select, useForm } from 'formfusion';
import passports from '@formfusion/passports';
import phones from '@formfusion/phones';
import tin from '@formfusion/tin';

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
  const onSubmit = (data) => {
    console.log('Trip booked', data);
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
  const current = COUNTRIES.find((c) => c.code === country);
  // tin is EU-only (27 countries), so most non-EU selections have no pattern here
  const tinPattern = tin[country];

  return (
    <Form config={config} className="form">
      <Input id="travel-name" name="name" type="alphabetic" label="Full name (as on passport)" required />

      <Select id="travel-country" name="country" label="Nationality" options={COUNTRY_OPTIONS} required />

      <Input
        key={\`passport-\${country}\`}
        id="travel-passport"
        name="passport"
        type={passports[country]}
        label="Passport number"
        placeholder={current.passportExample}
        required
        validation={{
          patternMismatch: \`Enter a valid \${current.label} passport number, e.g. \${current.passportExample}\`
        }}
      />
      <Input
        key={\`phone-\${country}\`}
        id="travel-phone"
        name="phone"
        type={phones[country]}
        label="Phone number"
        placeholder={current.phoneExample}
        required
        validation={{
          patternMismatch: \`Enter a valid \${current.label} phone number, e.g. \${current.phoneExample}\`
        }}
      />

      {/* Conditional field: only rendered when the selected country has a TIN pattern at all */}
      {tinPattern ? (
        <Input
          key={\`tin-\${country}\`}
          id="travel-tin"
          name="tin"
          type={tinPattern}
          label="EU Tax ID (optional)"
          helperText={\`Only required for travellers registered for tax in \${current.label}\`}
        />
      ) : (
        <p>No EU Tax ID needed for {current.label} passport holders.</p>
      )}
      <button type="submit">Book trip</button>
    </Form>
  );
};

export default TravelBookingForm;
`;

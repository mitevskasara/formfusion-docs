export const CONNECT_USAGE = `import { Form, useForm, connect } from 'formfusion';
import './App.css';

const MyForm = () => {
  const config = useForm({
    onSubmit: (e) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config} className="form">
      <input
        {...connect(config, 'alphabetic')}
        id="alphabetic"
        name="firstName"
        className="form__field"
      />
      {config.errors.firstName}
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
`;

export const USEFORM_USAGE = `import { Form, Input, useForm } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Success ' + JSON.stringify(data));
  };

  const config = useForm({ initialValues: { username: '' }, onSubmit });

  return (
    <Form config={config} className="form">
      <Input
        id="username"
        name="username"
        type="username"
        label="Username"
        required
      />
      <button type="submit">Submit</button>
      Your username is {config.values.username}
    </Form>
  );
};

export default MyForm;
`;

export const FORM_USAGE = `import { Form, Input } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} validateOnChange className="form">
      <h1>Simple payment form</h1>
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
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
`;

const INPUT_USAGE = `import { Form, Input } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      <Input
        id="username"
        name="username"
        type="username"
        label="Username"
        required
        classes={{
          field: 'input-field',
          label: 'input-field__label',
          error: 'input-field__error-message',
        }}
        validation={{
          patternMismatch: 'Please match the requested format.',
          valueMissing: 'This field is required.',
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
`;

const TEXTAREA_USAGE = `import { Form, Textarea } from "formfusion";
import "./App.css";

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log("Form submitted successfully", data);
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      <Textarea
        id="message"
        name="message"
        label="Enter your message"
        required
        classes={{
          field: "textarea",
          label: "textarea__label",
          error: "textarea__error-message"
        }}
        validation={{
          patternMismatch: "Please match the requested format.",
          valueMissing: "This field is required."
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
`;

const MUI_USAGE = `import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Form, useForm, connect } from 'formfusion';

const MyForm = () => {
  const config = useForm({
    onSubmit: (e) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            inputProps={{ ...connect(config, 'alphabetic') }}
            id="firstName"
            name="firstName"
            label="First name"
            variant="outlined"
            error={Boolean(config.errors.firstName)}
            helperText={config.errors.firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default MyForm;
`;

const ANTDESIGN_USAGE = `import { Input, Space, Button, Typography } from 'antd';
import { Form, useForm, connect } from 'formfusion';

const { Text } = Typography;

const MyForm = () => {
  const config = useForm({
    onSubmit: (e) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input
          {...connect(config, 'alphabetic')}
          id="firstName"
          name="firstName"
          label="First name"
          status={config.errors.firstName ? 'error' : ''}
          placeholder="Enter your first name"
        />
      </Space>
      <Text type="danger">{config.errors.firstName}</Text>
      <Space direction="vertical" style={{ width: '100%', marginTop: '15px' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </Form>
  );
};

export default MyForm;
`;

const CHAKRAUI_USAGE = `import React from "react";
import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { Form, useForm, connect } from "formfusion";

const MyForm = () => {
  const onSubmit = (e) => {
    console.log("Success " + JSON.stringify(e));
  };

  const config = useForm({
    onSubmit,
    validateOnChange: true
  });

  return (
    <Form config={config}>
      <Stack spacing={0}>
        <Input
          {...connect(config, "alphabetic")}
          id="firstName"
          name="firstName"
          isInvalid={Boolean(config.errors.firstName)}
          errorBorderColor="crimson"
          placeholder="Enter your first name"
        />
        <Text fontSize="14px" color="tomato">
          {config.errors.firstName}
        </Text>
      </Stack>
      <Button colorScheme="blue" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
`;

const REACTSTRAP_USAGE = `import { Input, Button, FormText } from 'reactstrap';
import { Form, useForm, connect } from 'formfusion';

const MyForm = () => {
  const config = useForm({
    onSubmit: (e: object) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config} className="m-3">
      <Input
        {...connect(config, 'alphabetic')}
        invalid={Boolean(config.errors.firstName)}
        id="firstName"
        name="firstName"
      />
      <FormText>{config.errors.firstName}</FormText>
      <br />
      <Button color="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
`;

export const MASKING_USAGE = `import { Form, Input } from 'formfusion';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} className="form">
      <Input
        id="credit-card-number-hyphen"
        name="credit-card-number-hyphen"
        type="credit-card-number-hyphen"
        label="Credit card number"
        mask="####-####-####-####"
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
`;

export const COMPONENTS = {
    form: FORM_USAGE,
    input: INPUT_USAGE,
    textarea: TEXTAREA_USAGE
} as any;

export const INTEGRATIONS = {
    mui: MUI_USAGE,
    antdesign: ANTDESIGN_USAGE,
    chakraui: CHAKRAUI_USAGE,
    reactstrap: REACTSTRAP_USAGE
} as any;

export const RULES = {
    type: `<Input name="name" type="alphabetic" />`,
    patterns: `import { rules } from 'formfusion';

<Input name="name" type={rules.alphabetic} />`
};

export const LP_EXAMPLE = `import React from 'react';
import { Form, Input } from 'formfusion';

const MyForm = () => {
    const onSubmit = (data) => {
        alert('Form submitted successfully' + JSON.stringify(data));
    };

    return (
        <Form onSubmit={onSubmit} className={classes.form}>
            <Input
                id="firstName"
                name="firstName"
                type="alphabetic"
                label="First name"
                placeholder="What's your first name"
                required
            />
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
            <button type="submit">Test me</button>
        </Form>
    );
};

export default MyForm;
`;

export const CONNECT_USAGE = `import React from "react";
import { Form, useForm, connect } from "@corelabui/rfm";

const MyForm = () => {
\tconst onSubmit = (e) => {
\t\tconsole.log("Success " + JSON.stringify(e));
\t};

\tconst config = useForm({ onSubmit });

\treturn (
\t\t<Form config={config}>
\t\t\t<input
\t\t\t\t{...connect(config, "alphabetic")}
\t\t\t\tid="alphabetic"
\t\t\t\tname="firstName"
\t\t\t/>
\t\t\t{config.errors.firstName}
\t\t\t<button type="submit">Submit</button>
\t\t</Form>
\t);
};

export default MyForm;
`;

export const USEFORM_USAGE = `import React from "react";
import { Form, Input, useForm } from "@corelabui/rfm";

const MyForm = () => {
  const onSubmit = (e) => {
    console.log("Success " + JSON.stringify(e));
  };

  const config = useForm({ onSubmit });

  return (
    <Form config={config}>
      <Input
        id="username"
        name="username"
        type="username"
        label="Username"
        required
      />
      Your username is {config.values.username}
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
`;

const FORM_USAGE = `import React from "react";
import { Form, Input } from "@corelabui/rfm";

const MyForm = () => {
  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>Simple payment form</h1>
      <Input
        id="credit-card-number"
        name="credit-card-number"
        type="credit-card-number-basic"
        label="Credit card number"
        required
      />
      <Input id="ccv" name="ccv" type="ccv" label="CCV" required />
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

const INPUT_USAGE = `import React from "react";
import { Form, Input } from "@corelabui/rfm";
import "./styles.css";

const MyForm = () => {
  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
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
          field: "input-field",
          label: "input-field__label",
          error: "input-field__error-message"
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

export default MyForm;`;

const TEXTAREA_USAGE = `import React from "react";
import { Form, Textarea } from "@corelabui/rfm";
import "./styles.css";

const MyForm = () => {
  const onSubmit = (data) => {
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

export default MyForm;`;

const MUI_USAGE = `import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Form, useForm, connect } from "@corelabui/rfm";

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
      <TextField
        inputProps={{ ...connect(config, "alphabetic") }}
        id="firstName"
        name="firstName"
        label="First name"
        variant="outlined"
        error={Boolean(config.errors.firstName)}
        helperText={config.errors.firstName}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;`;

const ANTDESIGN_USAGE = `import React from "react";
import { Input, Space, Button, Typography } from "antd";
import { Form, useForm, connect } from "@corelabui/rfm";

const { Text } = Typography;

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
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          {...connect(config, "alphabetic")}
          id="firstName"
          name="firstName"
          label="First name"
          status={config.errors.firstName ? "error" : ""}
          placeholder="Enter your first name"
        />
      </Space>
      <Text type="danger">{config.errors.firstName}</Text>
      <Space direction="vertical" style={{ width: "100%", marginTop: "15px" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </Form>
  );
};

export default MyForm;`;

const CHAKRAUI_USAGE = `import React from "react";
import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { Form, useForm, connect } from "@corelabui/rfm";

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

const REACTSTRAP_USAGE = `import React from "react";
import { Input, Button, FormText } from "reactstrap";
import { Form, useForm, connect } from "@corelabui/rfm";

const MyForm = () => {
  const onSubmit = (e) => {
    console.log("Success " + JSON.stringify(e));
  };

  const config = useForm({
    onSubmit,
    validateOnChange: true
  });

  return (
    <Form config={config} className="m-3">
      <Input
        {...connect(config, "alphabetic")}
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

export default MyForm;`;

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

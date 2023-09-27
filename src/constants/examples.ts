export const CONNECT_USAGE = `import React, { useRef } from "react";
import { Form, useForm, connect } from "@corelabui/rfm";

const MyForm = () => {
\tconst fieldRef = useRef(null);

\tconst onSubmit = (e) => {
\t\tconsole.log("Success " + JSON.stringify(e));
\t};

\tconst config = useForm({ onSubmit });

\treturn (
\t\t<Form config={config}>
\t\t\t<input
\t\t\t\t{...connect(config, fieldRef, "alphanumeric")}
\t\t\t\tid="alphanumeric"
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
      <Input
        id="username"
        name="username"
        type="username"
        label="Username"
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

export const COMPONENTS = {
    form: FORM_USAGE,
    input: INPUT_USAGE,
    textarea: TEXTAREA_USAGE
} as any;

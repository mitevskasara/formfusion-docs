import React, { useState } from 'react';
import Table from 'corelabui/Table';
import Typography from 'corelabui/Typography';
import Select from 'corelabui/Select';
import Link from 'corelabui/Link';
import { Form, Input, types as RFMtypes } from '@corelabui/rfm';

import FormsLayout from '@/components/MainLayout';
import Property from '@/components/Property';

import info from '@/constants/types';
import countries from '@/constants/countries';

import { typeToLabel } from '@/utils/general';

import classes from '../forms.module.scss';

export const HEADERS = ['Type', 'Description'];

const types = RFMtypes
    ? [
          ...Object.keys(RFMtypes).map((type) => {
              return !type.startsWith('postal-code')
                  ? {
                        type: <Property>{type}</Property>,
                        desc: info[type].description
                    }
                  : {};
          }),
          {
              type: <Property>{`postal-code-{country_code}`}</Property>,
              desc: info['postal-code'].description
          }
      ]
    : [];

const options = Object.keys(RFMtypes).reduce(
    (acc: { label: string; value: string }[], type) => {
        if (!type.startsWith('postal-code')) {
            acc.push({ value: type, label: typeToLabel(type) });
        }
        return acc;
    },
    []
);

options.push({ value: 'postal-code', label: 'Postal code' });

const Types = () => {
    const [country, setCountry] = useState<string>('gb');
    const [type, setType] = useState(options[0].value);

    return (
        <FormsLayout>
            <section className={classes.main__section}>
                <Typography variant="heading4" htmlElement="h2">
                    Input types
                </Typography>
                <Typography variant="body1">
                    <strong>React Form Manager</strong> extends the list
                    of&nbsp;
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
                        target="_blank"
                        className={classes.link}>
                        native
                    </a>
                    &nbsp;input types with a large and thoroughly tested
                    collection of types that define and apply a corresponding
                    validation pattern out-of-box to the input field without the
                    hassle of writing your own patterns, validation functions or
                    testing for each input field in your form.
                    <br />
                    <br />
                    Only pass the preffered type prop to the input and{' '}
                    <strong>RFM</strong> takes care of everything.
                    <br />
                    <br />
                    Here is a list of all types <strong>RFM</strong> currently
                    contains:
                </Typography>
                <br />
                <Table headers={HEADERS} data={types} />
                <br />
                <br />
                <div className={classes.main__section__types}>
                    <Typography variant="heading5" htmlElement="h3">
                        Try it out
                    </Typography>
                    <a
                        className={classes.main__section__types__codeLink}
                        href="https://codesandbox.io/embed/rfm-basic-types-usage-t7c8sn?fontsize=14&hidenavigation=1&theme=dark"
                        target="_blank">
                        <span className="icon-codesandbox" />
                        Open in <b>&nbsp;CodeSandbox</b>
                    </a>
                </div>
                <Select
                    placeholder="Select input type"
                    options={options}
                    onChange={(value: string) => setType(value)}
                    value={type}
                    label="Select an input type to test"
                />
                {type === 'postal-code' ? (
                    <Form className={classes.form} validateOnChange>
                        <div className={classes.form__field}>
                            <Typography variant="subtitle2" htmlElement="label">
                                Pattern for: {country} postal code
                            </Typography>
                            <Select
                                placeholder="Select a country"
                                options={countries}
                                onChange={(value: string) =>
                                    setCountry(value.toLowerCase())
                                }
                                value={country.toUpperCase()}
                                className={classes.countryDropdown}
                            />
                            <Input
                                id={`postal-code-${country}`}
                                name={`postal-code-${country}`}
                                type={`postal-code-${country}`}
                                classes={{
                                    label: classes.form__field__label,
                                    error: classes.form__field__error
                                }}
                            />
                            <Typography
                                variant="body1"
                                className={classes.form__field__info}>
                                {info[`postal-code-${country}`].info}
                                <br />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_correct
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: info[`postal-code-${country}`]
                                            .correct
                                    }}
                                />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_incorrect
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: info[`postal-code-${country}`]
                                            .incorrect
                                    }}
                                />
                            </Typography>
                        </div>
                    </Form>
                ) : (
                    <Form className={classes.form} validateOnChange>
                        <div className={classes.form__field}>
                            <Input
                                id={type}
                                name={type}
                                type={type}
                                label={`Input type: ${type}`}
                                classes={{
                                    label: classes.form__field__label,
                                    error: classes.form__field__error
                                }}
                            />
                            <Typography
                                variant="body1"
                                className={classes.form__field__info}>
                                {info[type].info}
                                <br />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_correct
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: info[type].correct
                                    }}
                                />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_incorrect
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: info[type].incorrect
                                    }}
                                />
                            </Typography>
                        </div>
                    </Form>
                )}
            </section>
            <footer className={classes.footer}>
                <Typography variant="caption" align="right">
                    Next
                </Typography>
                <Link href="/forms/api/patterns">Validation patterns</Link>
            </footer>
        </FormsLayout>
    );
};

export default Types;

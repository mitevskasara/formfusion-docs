import React, { useState } from 'react';
import Table from 'corelabui/Table';
import Typography from 'corelabui/Typography';
import Select from 'corelabui/Select';
import FormsLayout from '@/components/FormsLayout';
import { Form, Input, patterns as RFMPatterns } from '@corelabui/rfm';
import patterns from '@/constants/patterns';
import countries from '@/constants/countries';
import { camelCaseToLabel } from '@/utils/general';
import classes from '../forms.module.scss';
import Property from '@/components/Property';

export const HEADERS = ['Type', 'Description'];

const types = RFMPatterns
    ? [
          ...Object.keys(RFMPatterns).map((type) => {
              return !type.startsWith('postalCode')
                  ? {
                        type: <Property>{type}</Property>,
                        desc: patterns[type]?.description
                    }
                  : {};
          }),
          {
              type: <Property>postalCode</Property>,
              desc: patterns['postalCode'].description
          }
      ]
    : [];

const options = Object.keys(RFMPatterns).map((type) => {
    return !type.startsWith('postalCode')
        ? { value: type, label: camelCaseToLabel(type) }
        : { value: 'postalCode', label: 'Postal code' };
});

const Patterns = () => {
    const [pattern, setPattern] = useState(options[0].value);
    const [country, setCountry] = useState<string>('gb');

    return (
        <FormsLayout>
            <section className={classes.main__section}>
                <Typography variant="heading4" htmlElement="h2">
                    Validation patterns
                </Typography>
                <Typography variant="body1">
                    Similar to&nbsp;
                    <a href="/forms/api/types" className={classes.link}>
                        Input types,{' '}
                    </a>
                    <strong>React Form Manager</strong> provides a collection of
                    thoroughly tested JavaScript regular expressions that can be
                    directly applied to the pattern attribute of an input field.
                    The main difference between{' '}
                    <a
                        href="/forms/api/types"
                        className={classes.link}
                        target="_blank">
                        Input types{' '}
                    </a>
                    and validation patterns is that the patterns collection
                    includes dynamic validation such as: minimum/maximum
                    required chars/letters/numbers, specific domain validation,
                    minimum/maximum letters range i.e any validation that
                    requires a specific parameter to construct a pattern.
                    <br />
                    <br />
                    The{' '}
                    <a href="/forms/api/types" className={classes.link}>
                        Input types collection{' '}
                    </a>{' '}
                    uses part of these validation patterns as a base buy they
                    are also exposed for usage when you need a dynamic
                    validation or you don't want to use the Input component
                    provided by <strong>RFM</strong>. To use, pass the preffered
                    pattern as <code>pattern</code> prop to the input.
                    <br />
                    <br />
                    Here is a list of all validation patterns{' '}
                    <strong>RFM</strong> currently contains:
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
                <br />
                <Select
                    placeholder="Select pattern"
                    options={options}
                    onChange={(value: string) => setPattern(value)}
                    value={pattern}
                    label="Select a validation pattern to test"
                />
                {pattern === 'postalCode' ? (
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
                                pattern={RFMPatterns.postalCode[country]}
                                classes={{
                                    label: classes.form__field__label,
                                    error: classes.form__field__error
                                }}
                            />
                            <Typography
                                variant="body1"
                                className={classes.form__field__info}>
                                {patterns[pattern][country].info}
                                <br />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_correct
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: patterns[pattern][country]
                                            .correct
                                    }}
                                />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_incorrect
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: patterns[pattern][country]
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
                                id={pattern}
                                name={pattern}
                                pattern={
                                    typeof RFMPatterns[pattern] === 'function'
                                        ? pattern.includes('Range')
                                            ? RFMPatterns[pattern](1, 5)
                                            : RFMPatterns[pattern](5)
                                        : RFMPatterns[pattern]
                                }
                                label={`Pattern: ${pattern}`}
                                classes={{
                                    label: classes.form__field__label,
                                    error: classes.form__field__error
                                }}
                            />
                            <Typography
                                variant="body1"
                                className={classes.form__field__info}>
                                {patterns[pattern].info}
                                <br />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_correct
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: patterns[pattern].correct
                                    }}
                                />
                                <br />
                                <span
                                    className={
                                        classes.form__field__info_incorrect
                                    }
                                    dangerouslySetInnerHTML={{
                                        __html: patterns[pattern].incorrect
                                    }}
                                />
                            </Typography>
                        </div>
                    </Form>
                )}
            </section>
        </FormsLayout>
    );
};

export default Patterns;

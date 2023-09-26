import React, { useState } from 'react';
import Typography from 'corelabui/Typography';
import Select from 'corelabui/Select';
import Flex from 'corelabui/Flex';
import Button from 'corelabui/Button';
import Highlight from 'corelabui/Highlight';
import { patterns as RFMPatterns } from '@corelabui/rfm';

import Property from '@/components/Property';
import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import Section from '@/components/Section';
import Table from '@/components/Table';
import Form from '@/components/Form';
import Input from '@/components/Input';
import HTMLText from '@/components/HTMLText';

import patterns from '@/constants/patterns';
import countries from '@/constants/countries';
import META_DATA from '@/constants/metaData';
import {
    PATTERNS_TABLE_HEADERS,
    patternsToTableData
} from '@/constants/tables';
import { patternsToOptions } from '@/utils/dataTransform';

const PATTERNS_TABLE_DATA = patternsToTableData(RFMPatterns);
const options = patternsToOptions(RFMPatterns);

const Patterns = () => {
    const [pattern, setPattern] = useState(options[0].value);
    const [country, setCountry] = useState<string>('gb');

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Patterns`
            }}>
            <Section title="Validation patterns" margin={false}>
                <Typography variant="body1">
                    Similar to&nbsp;
                    <Link href="/forms/api/types">Input types</Link>,&nbsp;
                    <strong>React Form Manager</strong> provides a collection of
                    thoroughly tested JavaScript regular expressions that can be
                    directly applied to the pattern attribute of an input field.
                    The main difference between&nbsp;
                    <Link href="/forms/api/types" target="_blank">
                        Input types
                    </Link>
                    &nbsp;and validation patterns is that the patterns
                    collection includes dynamic validation such as:
                    minimum/maximum required chars/letters/numbers, specific
                    domain validation, minimum/maximum letters range i.e any
                    validation that requires a specific parameter to construct a
                    pattern.
                    <br />
                    <br />
                    The&nbsp;
                    <Link href="/forms/api/types">Input types collection</Link>
                    &nbsp;uses part of these validation patterns as base, but
                    they are also exposed for usage when you need a dynamic
                    validation or you don&apos;t want to use the Input component
                    provided by <strong>RFM</strong>. To use, pass the preffered
                    pattern as <Property>pattern</Property> prop to the input.
                    <br />
                    <br />
                    Here is a list of all validation patterns&nbsp;
                    <strong>RFM</strong> currently contains:
                </Typography>
                <br />
                <Table
                    headers={PATTERNS_TABLE_HEADERS}
                    data={PATTERNS_TABLE_DATA}
                />
                <br />
                <br />
                <Flex justifyContent="space-between" margin="3em 0 2em 0">
                    <Typography
                        variant="heading5"
                        htmlElement="h3"
                        margin={false}>
                        Try it out
                    </Typography>
                    <Button>
                        <Link
                            href="https://codesandbox.io/embed/rfm-basic-types-usage-t7c8sn?fontsize=14&hidenavigation=1&theme=dark"
                            target="_blank"
                            icon="codesandbox"
                            internal={false}
                            color="white">
                            Open in <b>&nbsp;CodeSandbox&nbsp;</b>
                        </Link>
                    </Button>
                </Flex>
                <br />
                <Select
                    placeholder="Select pattern"
                    options={options}
                    onChange={(value: string) => setPattern(value)}
                    value={pattern}
                    label="Select a validation pattern to test"
                />
                {pattern === 'postalCode' ? (
                    <Form validateOnChange>
                        <Flex direction="column" gap="0.5em">
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
                            />
                            <Input
                                id={`postal-code-${country}`}
                                name={`postal-code-${country}`}
                                pattern={RFMPatterns.postalCode[country]}
                            />
                            <Typography variant="body1">
                                {patterns[pattern][country].info}
                                <br />
                                <br />
                                <Highlight color="#296140">
                                    <HTMLText
                                        text={
                                            patterns[pattern][country].correct
                                        }
                                    />
                                </Highlight>
                                <br />
                                <Highlight color="#aa1d1d">
                                    <HTMLText
                                        text={
                                            patterns[pattern][country].incorrect
                                        }
                                    />
                                </Highlight>
                            </Typography>
                        </Flex>
                    </Form>
                ) : (
                    <Form validateOnChange>
                        <Flex direction="column" gap="0.5em">
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
                            />
                            <Typography variant="caption">
                                {patterns[pattern].info}
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                <Highlight color="#296140">
                                    <HTMLText
                                        text={patterns[pattern].correct}
                                    />
                                </Highlight>
                                <br />
                                <Highlight color="#aa1d1d">
                                    <HTMLText
                                        text={patterns[pattern].correct}
                                    />
                                </Highlight>
                            </Typography>
                        </Flex>
                    </Form>
                )}
            </Section>
        </MainLayout>
    );
};

export default Patterns;

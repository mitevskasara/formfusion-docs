import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Typography from 'corelabui/Typography';
import Select from 'corelabui/Select';
import Flex from 'corelabui/Flex';
import Button from 'corelabui/Button';
import Highlight from 'corelabui/Highlight';
import Input from 'corelabui/Input';
import { useForm, connect, patterns as RFMPatterns } from '@corelabui/rfm';

import Property from '@/components/Property';
import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import Section from '@/components/Section';
import Table from '@/components/Table';
import Form from '@/components/Form';
import HTMLText from '@/components/HTMLText';
import FooterNavigation from '@/components/FooterNavigation';

import patterns from '@/constants/patterns';
import countries from '@/constants/countries';
import META_DATA from '@/constants/metaData';
import {
    PATTERNS_TABLE_HEADERS,
    patternsToTableData
} from '@/constants/tables';
import { patternsToOptions } from '@/utils/dataTransform';
import ROUTES from '@/constants/routes';
import THEMES from '@/core/theme';

const PATTERNS_TABLE_DATA = patternsToTableData(RFMPatterns);
const options = patternsToOptions(RFMPatterns);

interface IPatternsProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const Patterns = ({ theme, setTheme }: IPatternsProps) => {
    const [pattern, setPattern] = useState(options[0].value);
    const [country, setCountry] = useState<string>('gb');
    const config = useForm({ onSubmit: () => {}, validateOnChange: true });
    const fieldRef = useRef(null);

    const inputType =
        typeof RFMPatterns[pattern] === 'function'
            ? pattern.includes('Range')
                ? RFMPatterns[pattern](1, 5)
                : RFMPatterns[pattern](5)
            : RFMPatterns[pattern];

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Patterns`,
                canonical: `https://www.corelabui.com/${ROUTES.patterns}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="Validation patterns" margin={false}>
                <Typography variant="body1">
                    Similar to&nbsp;
                    <Link href={`/${ROUTES.types}`}>Input types</Link>,&nbsp;
                    <strong>React Form Manager</strong> provides a collection of
                    thoroughly tested JavaScript regular expressions that can be
                    directly applied to the pattern attribute of an input field.
                    The main difference between&nbsp;
                    <Link href={`/${ROUTES.types}`} target="_blank">
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
                    <Link href={`/${ROUTES.types}`}>
                        Input types collection
                    </Link>
                    &nbsp;uses part of these validation patterns as a
                    foundation, but they are also exposed for usage when you
                    require more flexibility or when you don&apos;t intend to
                    use the Input component provided by <strong>RFM</strong>. To
                    put these patterns to use, simply pass your desired pattern
                    as the
                    <Property>&nbsp;pattern</Property> property to the input.
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
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    margin="3em 0 0 0">
                    <Typography
                        variant="heading5"
                        htmlElement="h3"
                        margin={false}>
                        Example
                    </Typography>
                    <Button>
                        <Link
                            href="https://codesandbox.io/embed/rfm-basic-types-usage-t7c8sn?fontsize=14&hidenavigation=1&theme=dark"
                            target="_blank"
                            icon="codesandbox"
                            internal={false}
                            color={'var(--light)'}>
                            Try on<b>&nbsp;CodeSandbox&nbsp;</b>
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
                            <Select
                                placeholder="Select a country"
                                options={countries}
                                onChange={(value: string) =>
                                    setCountry(value.toLowerCase())
                                }
                                value={country.toUpperCase()}
                                label={`Pattern for: ${country} postal code`}
                            />
                            <br />
                            <Input
                                {...connect(
                                    config,
                                    fieldRef,
                                    `postal-code-${country}`
                                )}
                                id={`postal-code-${country}`}
                                name={`postal-code-${country}`}
                                error={Boolean(
                                    config.errors[`postal-code-${country}`]
                                )}
                                helperText={
                                    config.errors[`postal-code-${country}`] ||
                                    patterns[pattern][country].info
                                }
                            />
                            <br />
                            <Typography variant="body1">
                                <Highlight color={THEMES[theme].success}>
                                    <HTMLText
                                        text={
                                            patterns[pattern][country].correct
                                        }
                                    />
                                </Highlight>
                                <br />
                                <Highlight color={THEMES[theme].error}>
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
                                {...connect(config, fieldRef, inputType)}
                                id={pattern}
                                name={pattern}
                                label={`Pattern: ${pattern}`}
                                error={Boolean(config.errors[pattern])}
                                helperText={
                                    config.errors[pattern] ||
                                    patterns[pattern].info
                                }
                            />
                            <br />
                            <Typography variant="body1">
                                <Highlight color={THEMES[theme].success}>
                                    <HTMLText
                                        text={patterns[pattern].correct}
                                    />
                                </Highlight>
                                <br />
                                <Highlight color={THEMES[theme].error}>
                                    <HTMLText
                                        text={patterns[pattern].incorrect}
                                    />
                                </Highlight>
                            </Typography>
                        </Flex>
                    </Form>
                )}
            </Section>
            <FooterNavigation url={`/${ROUTES.mui}`} title="Material UI" />
        </MainLayout>
    );
};

export async function getStaticProps() {
    return {
        props: {}
    };
}

export default Patterns;

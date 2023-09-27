import React, { useRef, useState } from 'react';
import Typography from 'corelabui/Typography';
import Highlight from 'corelabui/Highlight';
import Select from 'corelabui/Select';
import Button from 'corelabui/Button';
import Flex from 'corelabui/Flex';
import Input from 'corelabui/Input';
import { useForm, connect, types as RFMtypes } from '@corelabui/rfm';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import Table from '@/components/Table';
import Form from '@/components/Form';
import HTMLText from '@/components/HTMLText';

import info from '@/constants/types';
import countries from '@/constants/countries';
import META_DATA from '@/constants/metaData';
import { TYPES_TABLE_HEADERS, typesToTableData } from '@/constants/tables';
import { typesToOptions } from '@/utils/dataTransform';

const TYPES_TABLE_DATA = typesToTableData(RFMtypes);
const options = typesToOptions(RFMtypes);

const Types = () => {
    const [country, setCountry] = useState<string>('gb');
    const [type, setType] = useState(options[0].value);
    const config = useForm({ onSubmit: () => {}, validateOnChange: true });
    const fieldRef = useRef(null);

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Input types`,
                canonical: `https://www.corelabui.com/forms/api/types`
            }}>
            <Section title="Input types" margin={false}>
                <Typography variant="body1">
                    <strong>React Form Manager</strong> extends the list
                    of&nbsp;
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
                        target="_blank">
                        native
                    </Link>
                    &nbsp;input types with a large and thoroughly tested
                    collection of types that define and apply a corresponding
                    validation pattern to the input field without the hassle of
                    writing your own patterns, validation functions or testing
                    for each input field in your form.
                    <br />
                    <br />
                    Only pass the preffered type prop to the input and&nbsp;
                    <strong>RFM</strong> takes care of everything.
                    <br />
                    <br />
                    Here is a list of all types <strong>RFM</strong> currently
                    contains:
                </Typography>
                <br />
                <Table headers={TYPES_TABLE_HEADERS} data={TYPES_TABLE_DATA} />
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
                            color="white">
                            Try on <b>CodeSandbox&nbsp;</b>
                        </Link>
                    </Button>
                </Flex>
                <br />
                <Select
                    placeholder="Select input type"
                    options={options}
                    onChange={(value: string) => setType(value)}
                    value={type}
                    label="Select an input type to test"
                />
                {type === 'postal-code' ? (
                    <Form config={config}>
                        <Flex direction="column" gap="0.5em">
                            <Select
                                label={`Pattern for: ${country} postal code`}
                                placeholder="Select a country"
                                options={countries}
                                onChange={(value: string) =>
                                    setCountry(value.toLowerCase())
                                }
                                value={country.toUpperCase()}
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
                                    info[`postal-code-${country}`].info
                                }
                            />
                            <br />
                            <br />
                            <Typography variant="body1">
                                <Highlight color="#296140">
                                    <HTMLText
                                        text={
                                            info[`postal-code-${country}`]
                                                .correct
                                        }
                                    />
                                </Highlight>
                                <br />
                                <Highlight color="#aa1d1d">
                                    <HTMLText
                                        text={
                                            info[`postal-code-${country}`]
                                                .incorrect
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
                                {...connect(config, fieldRef, type)}
                                id={type}
                                name={type}
                                label={`Input type: ${type}`}
                                error={Boolean(config.errors[type])}
                                helperText={
                                    config.errors[type] || info[type].info
                                }
                            />
                            <br />
                            <Typography variant="body1">
                                <Highlight color="#296140">
                                    <HTMLText text={info[type].correct} />
                                </Highlight>
                                <br />
                                <Highlight color="#aa1d1d">
                                    <HTMLText text={info[type].incorrect} />
                                </Highlight>
                            </Typography>
                        </Flex>
                    </Form>
                )}
            </Section>
            <FooterNavigation
                url="/forms/api/patterns"
                title="Validation patterns"
            />
        </MainLayout>
    );
};

export default Types;

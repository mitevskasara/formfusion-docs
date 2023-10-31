import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Typography from 'corelabui/Typography';
import Select from 'corelabui/Select';
import Flex, { FlexItem } from 'corelabui/Flex';
import Button from 'corelabui/Button';
import Highlight from 'corelabui/Highlight';
import Input from 'corelabui/Input';
import { patterns as RFMPatterns, useForm, connect } from '@corelabui/rfm';

import Property from '@/components/Property';
import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import Section from '@/components/Section';
import Table from '@/components/Table';
import Form from '@/components/Form';
import HTMLText from '@/components/HTMLText';
import FooterNavigation from '@/components/FooterNavigation';
import Pagination from '@/components/Pagination';

import patterns from '@/constants/patterns';
import META_DATA from '@/constants/metaData';
import {
    PATTERNS_TABLE_HEADERS,
    patternsToTableData
} from '@/constants/tables';
import { patternsToOptions } from '@/utils/dataTransform';
import ROUTES from '@/constants/routes';
import THEMES from '@/core/theme';
import { ISelectOption } from './interfaces';

const LIMIT_PER_PAGE = 25;

interface IPatternsProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    data: { [key: number]: object[] };
    pages: number[];
    options: ISelectOption[];
    patterns: any;
}

const Patterns = ({
    theme,
    setTheme,
    data,
    pages,
    options
}: IPatternsProps) => {
    const [patternObject, setPattern] = useState(options[0]);
    const config = useForm({ onSubmit: () => {}, validateOnChange: true });
    const fieldRef = useRef(null);
    const [page, setPage] = useState(1);

    const tableData = data && data[`${page}`];
    const pattern = patternObject.value;

    const inputType =
        typeof RFMPatterns[pattern] === 'function'
            ? pattern.includes('Range')
                ? RFMPatterns[pattern](1, 5)
                : RFMPatterns[pattern](5)
            : patternObject.subtype
            ? RFMPatterns[patternObject.type][patternObject.subtype]
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
                    as the&nbsp;
                    <Property>pattern</Property> property to the input.
                    <br />
                    <br />
                    Here is a list of all validation patterns&nbsp;
                    <strong>RFM</strong> currently contains:
                </Typography>
                <br />
                <Flex
                    justifyContent="flex-end"
                    alignItems="center"
                    margin="0.5em 0"
                    xs="column-reverse">
                    {/* <FlexItem flex="1">
                        <Input
                            id="search"
                            placeholder="Search types..."
                            onChange={(e: any) => setKeyword(e.target.value)}
                        />
                    </FlexItem> */}
                    <FlexItem flex="1">
                        <Pagination
                            pages={pages}
                            activePage={page}
                            onChange={(page) => setPage(page)}
                        />
                    </FlexItem>
                </Flex>
                <Table headers={PATTERNS_TABLE_HEADERS} data={tableData} />
                <Flex
                    justifyContent="end"
                    alignItems="center"
                    margin="0.5em 0"
                    xs="column-reverse">
                    <Pagination
                        pages={pages}
                        activePage={page}
                        onChange={(page) => setPage(page)}
                    />
                </Flex>
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
                    onChange={(option: ISelectOption) => {
                        console.log(option);
                        setPattern(option);
                    }}
                    value={pattern}
                    label="Select a validation pattern to test"
                />
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
                                patterns[pattern]?.info
                            }
                        />
                        <br />
                        <Typography variant="body1">
                            <Highlight color={THEMES[theme].success}>
                                <HTMLText text={patterns[pattern]?.correct} />
                            </Highlight>
                            <br />
                            <Highlight color={THEMES[theme].error}>
                                <HTMLText text={patterns[pattern]?.incorrect} />
                            </Highlight>
                        </Typography>
                    </Flex>
                </Form>
                <br />
                <br />
                <br />
            </Section>
            <FooterNavigation url={`/${ROUTES.mui}`} title="Material UI" />
        </MainLayout>
    );
};

export async function getStaticProps() {
    const { patterns } = await require('@corelabui/rfm');
    const options = patternsToOptions(patterns);
    const PATTERNS_TABLE_DATA = patternsToTableData(patterns).filter((d) =>
        Boolean(d)
    );

    const paginate = (arr: any[], chunk: number) => {
        const result: { [key: string]: object[] } = {};

        for (let i = 0; i < arr.length; i += chunk) {
            const page = arr.slice(i, i + chunk);
            const key = i / chunk + 1;
            result[key] = page;
        }

        return result;
    };

    const data = paginate(PATTERNS_TABLE_DATA, LIMIT_PER_PAGE);
    const pages = Array.apply(
        null,
        Array(Math.ceil(PATTERNS_TABLE_DATA.length / LIMIT_PER_PAGE))
    ).map((_y, i) => i + 1);

    return {
        props: {
            data,
            pages,
            options
        }
    };
}

export default Patterns;

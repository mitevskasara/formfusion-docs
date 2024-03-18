import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Typography from 'corelabui/Typography';
import Select from 'corelabui/Select';
import Flex, { FlexItem } from 'corelabui/Flex';
import Button from 'corelabui/Button';
import Highlight from 'corelabui/Highlight';
import Input from 'corelabui/Input';
import { rules as RFMPatterns, useForm, connect } from 'formfusion';

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
    const [patternObject, setPattern] = useState<ISelectOption>(options[0]);
    const config = useForm({ onSubmit: () => {}, validateOnChange: true });
    const [page, setPage] = useState(1);
    const formPatterns = RFMPatterns as any;

    const tableData = data && data[`${page}`];
    const pattern: any = patternObject.value;

    const inputType =
        typeof formPatterns[pattern] === 'function'
            ? pattern.includes('Range')
                ? formPatterns[pattern](1, 5)
                : formPatterns[pattern](5)
            : patternObject.subtype
            ? formPatterns[patternObject.type][patternObject.subtype]
            : formPatterns[pattern];

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Patterns`,
                canonical: `https://www.corelabui.com/${ROUTES.patterns}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="Validation rules" margin={false}>
                <Typography variant="body1">
                    Similar to&nbsp;
                    <Link href={`/${ROUTES.types}`}>Input types</Link>,&nbsp;
                    <strong>FormFusion</strong> provides a collection of
                    thoroughly tested JavaScript regular expressions that can be
                    directly applied to the pattern attribute of an input field.
                    The main difference between&nbsp;
                    <Link href={`/${ROUTES.types}`} target="_blank">
                        Input types
                    </Link>
                    &nbsp;and validation rules is that the patterns collection
                    includes dynamic validation such as: minimum/maximum
                    required chars/letters/numbers, specific domain validation,
                    minimum/maximum letters range i.e any validation that
                    requires a specific parameter to construct a pattern.
                    <br />
                    <br />
                    The&nbsp;
                    <Link href={`/${ROUTES.types}`}>
                        Input types collection
                    </Link>
                    &nbsp;uses part of these validation rules as a foundation,
                    but they are also exposed for usage when you require more
                    flexibility or when you don&apos;t intend to use the Input
                    component provided by <strong>FormFusion</strong>. To put
                    these patterns to use, simply pass your desired pattern as
                    the&nbsp;
                    <Property>pattern</Property> property to the input.
                    <br />
                    <br />
                    Here is a list of all validation rules&nbsp;
                    <strong>FormFusion</strong> currently contains:
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
                            href="https://stackblitz.com/edit/vitejs-vite-oioblx?file=src%2FApp.tsx"
                            target="_blank"
                            icon="stackblitz"
                            internal={false}
                            color={'var(--light)'}>
                            Try on<b>&nbsp;Stackblitz&nbsp;</b>
                        </Link>
                    </Button>
                </Flex>
                <br />
                <Select
                    placeholder="Select pattern"
                    options={options}
                    onChange={(option: ISelectOption) => {
                        setPattern(option);
                    }}
                    value={pattern}
                    label="Select a validation pattern to test"
                />
                <Form validateOnChange>
                    <Flex direction="column" gap="0.5em">
                        <Input
                            {...connect(config, inputType)}
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
            <FooterNavigation
                url={`/${ROUTES.masking}`}
                title="Input masking"
            />
        </MainLayout>
    );
};

export async function getStaticProps() {
    const { patterns } = await require('formfusion');
    const { patternsToOptions } = await require('@/utils/dataTransform');

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

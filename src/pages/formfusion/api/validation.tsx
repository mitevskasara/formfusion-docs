import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Typography from 'corelabui/Typography';
import Highlight from 'corelabui/Highlight';
import Select from 'corelabui/Select';
import Button from 'corelabui/Button';
import Flex, { FlexItem } from 'corelabui/Flex';
import { Input, useForm, rules } from 'formfusion';
import postcodes from '@formfusion/postcodes';
import iban from '@formfusion/iban';
import licencePlates from '@formfusion/licence-plates';
import passports from '@formfusion/passports';
import tin from '@formfusion/tin';
import vat from '@formfusion/vat';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import Table from '@/components/Table';
import Form from '@/components/Form';
import HTMLText from '@/components/HTMLText';
import Pagination from '@/components/Pagination';
import Code from '@/components/Code';

import info from '@/constants/patterns';

import META_DATA from '@/constants/metaData';
import { TYPES_TABLE_HEADERS, patternsToTableData } from '@/constants/tables';
import ROUTES from '@/constants/routes';
import { RULES } from '@/constants/examples';

import THEMES from '@/core/theme';

import { ISelectOption } from './interfaces';
import { typesToOptions } from '@/utils/dataTransform';
import ClientComponent from '@/components/ClientComponent';

const LIMIT_PER_PAGE = 25;

interface ITypesProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    data: { [key: number]: object[] };
    pages: number[];
    options: { label: any; value: any }[];
    total: number;
}

const paginate = (arr: any[], chunk: number) => {
    const result: { [key: string]: object[] } = {};

    for (let i = 0; i < arr.length; i += chunk) {
        const page = arr.slice(i, i + chunk);
        const key = i / chunk + 1;
        result[key] = page;
    }

    return result;
};

const removeNonStringProps = (obj: any) => {
    for (const key in obj) {
        if (typeof obj[key] !== 'string') {
            delete obj[key];
        }
    }
    return obj;
};

const Types = ({ theme, setTheme }: ITypesProps) => {
    const merged = {
        ...rules,
        postcodes: { ...postcodes },
        iban: { ...iban },
        licencePlates: { ...licencePlates },
        passports: { ...passports },
        tin: { ...tin },
        vat: { ...vat }
    };
    const options = typesToOptions(removeNonStringProps(rules));
    const TYPES_TABLE_DATA = patternsToTableData(merged).filter((d) =>
        Boolean(d)
    );

    const data = paginate(TYPES_TABLE_DATA, LIMIT_PER_PAGE);
    const pages = Array.apply(
        null,
        Array(Math.ceil(TYPES_TABLE_DATA.length / LIMIT_PER_PAGE))
    ).map((_y, i) => i + 1);
    const total = Object.keys(rules).length;

    const [type, setType] = useState<any>(options[0].value);
    const [page, setPage] = useState(1);
    const config = useForm({ onSubmit: () => {}, validateOnChange: true });
    const tableData = data && data[`${page}`];

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: 'Rich collection of validation patterns for form validation in React',
                url: `https://www.corelabui.com/${ROUTES.validation}`,
                canonical: `https://www.corelabui.com/${ROUTES.validation}`,
                description:
                    "FormFusion extends the native input types with 500+ validation patterns that can be easily applied to form fields in React by using the 'type' property."
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="Validation rules" margin={false}>
                <h2 className="hidden">
                    Form Validation Rules: Easily Apply and Customize Input
                    Validation Patterns
                </h2>
                <Typography variant="body1" htmlElement="div">
                    <strong>FormFusion</strong> extends the standard list
                    of&nbsp;
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types"
                        target="_blank">
                        native input types
                    </Link>
                    <p style={{ display: 'inline' }}>
                        &nbsp;with a large collection of rules that define and
                        apply a corresponding <b>validation pattern</b> to the
                        input field. You only need to pass the preffered type
                        prop to the input and&nbsp; FormFusion takes care of
                        everything.
                        <br />
                        <br />
                        There are two ways to apply a validation rule to a
                        field:
                        <br />
                        <br />
                        1. By passing down the name of the validation rule as
                        the <code>type</code> property:
                    </p>
                    <br />
                    <br />
                    <ClientComponent>
                        <Code language="javascript">{RULES.type}</Code>
                    </ClientComponent>
                    <br />
                    <p style={{ display: 'inline' }}>
                        2. By importing the preferred validation rule and
                        passing it down as the <code>type</code> property. This
                        should be the default approach when using dynamic
                        validation rules or when using some of the
                        formfusion&apos;s validation sets.
                    </p>
                    <br />
                    <br />
                    <ClientComponent>
                        <Code language="javascript">{RULES.patterns}</Code>
                    </ClientComponent>
                    <br />
                    <br />
                    <p style={{ display: 'inline' }}>
                        Currently, FormFusion includes {total} generic
                        validation rules. To use some of the more specific
                        validation rules, you&apos;ll need to install the
                        corresponding package.
                    </p>
                    <br />
                    <br />
                    List of available sets of validation rules:
                    <br />
                    <Link href="https://www.npmjs.com/package/@formfusion/postcodes">
                        @formfusion/postcodes
                    </Link>
                    <br />
                    <Link href="https://www.npmjs.com/package/@formfusion/licence-plates">
                        @formfusion/licence-plates
                    </Link>
                    <br />
                    <Link href="https://www.npmjs.com/package/@formfusion/iban">
                        @formfusion/iban
                    </Link>
                    <br />
                    <Link href="https://www.npmjs.com/package/@formfusion/passports">
                        @formfusion/passports
                    </Link>
                    <br />
                    <Link href="https://www.npmjs.com/package/@formfusion/phones">
                        @formfusion/phones
                    </Link>
                    <br />
                    <Link href="https://www.npmjs.com/package/@formfusion/tin">
                        @formfusion/tin
                    </Link>
                    <br />
                    <Link href="https://www.npmjs.com/package/@formfusion/vat">
                        @formfusion/vat
                    </Link>
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
                <ClientComponent>
                    <Table headers={TYPES_TABLE_HEADERS} data={tableData} />
                </ClientComponent>
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
                            Try on Stackblitz&nbsp;
                        </Link>
                    </Button>
                </Flex>
                <br />
                <ClientComponent>
                    <>
                        <Select
                            placeholder="Select input type"
                            options={options}
                            onChange={(option: ISelectOption) =>
                                setType(option.value)
                            }
                            value={type}
                            label="Select a validation rule to try out"
                        />
                        <Form validateOnChange>
                            <Flex direction="column" gap="0.5em">
                                <Input
                                    id={type}
                                    name={type}
                                    type={type}
                                    label={`Rule: ${type}`}
                                    helperText={
                                        config.errors[type] || info[type]?.info
                                    }
                                />
                                <br />
                                <Typography variant="body1">
                                    <Highlight color={THEMES[theme].success}>
                                        <HTMLText text={info[type]?.correct} />
                                    </Highlight>
                                    <br />
                                    <Highlight color={THEMES[theme].error}>
                                        <HTMLText
                                            text={info[type]?.incorrect}
                                        />
                                    </Highlight>
                                </Typography>
                            </Flex>
                        </Form>
                    </>
                </ClientComponent>
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
    return {
        props: {}
    };
}

export default Types;

import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import Typography from 'corelabui/Typography';
import Highlight from 'corelabui/Highlight';
import Select from 'corelabui/Select';
import Button from 'corelabui/Button';
import Flex, { FlexItem } from 'corelabui/Flex';
import Input from 'corelabui/Input';
import { useForm, connect } from 'formfusion';

import MainLayout from '@/components/MainLayout';
import Link from '@/components/Link';
import FooterNavigation from '@/components/FooterNavigation';
import Section from '@/components/Section';
import Table from '@/components/Table';
import Form from '@/components/Form';
import HTMLText from '@/components/HTMLText';
import Pagination from '@/components/Pagination';

import info from '@/constants/types';
import META_DATA from '@/constants/metaData';
import { TYPES_TABLE_HEADERS, typesToTableData } from '@/constants/tables';
import ROUTES from '@/constants/routes';

import THEMES from '@/core/theme';

import { ISelectOption } from './interfaces';

const LIMIT_PER_PAGE = 25;

interface ITypesProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    data: { [key: number]: object[] };
    pages: number[];
    options: { label: string; value: string }[];
}

const Types = ({ theme, setTheme, data, pages, options }: ITypesProps) => {
    const [type, setType] = useState<any>(options[0].value);
    const [page, setPage] = useState(1);

    const config = useForm({ onSubmit: () => {}, validateOnChange: true });
    const fieldRef = useRef(null);

    const tableData = data && data[`${page}`];

    return (
        <MainLayout
            {...{
                ...META_DATA,
                title: `${META_DATA.title} | Input types`,
                canonical: `https://www.corelabui.com/${ROUTES.types}`
            }}
            theme={theme}
            setTheme={setTheme}>
            <Section title="Input types" margin={false}>
                <Typography variant="body1">
                    <strong>FormFusion</strong> extends the list of&nbsp;
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
                    <strong>FormFusion</strong> takes care of everything.
                    <br />
                    <br />
                    Here is a list of all types <strong>FormFusion</strong>{' '}
                    currently contains:
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
                <Table headers={TYPES_TABLE_HEADERS} data={tableData} />
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
                    placeholder="Select input type"
                    options={options}
                    onChange={(option: ISelectOption) => setType(option.value)}
                    value={type}
                    label="Select an input type to test"
                />
                <Form validateOnChange>
                    <Flex direction="column" gap="0.5em">
                        <Input
                            {...connect(config, type)}
                            id={type}
                            name={type}
                            label={`Input type: ${type}`}
                            error={Boolean(config.errors[type])}
                            helperText={config.errors[type] || info[type]?.info}
                        />
                        <br />
                        <Typography variant="body1">
                            <Highlight color={THEMES[theme].success}>
                                <HTMLText text={info[type]?.correct} />
                            </Highlight>
                            <br />
                            <Highlight color={THEMES[theme].error}>
                                <HTMLText text={info[type]?.incorrect} />
                            </Highlight>
                        </Typography>
                    </Flex>
                </Form>
                <br />
                <br />
                <br />
            </Section>
            <FooterNavigation
                url={`/${ROUTES.patterns}`}
                title="Validation patterns"
            />
        </MainLayout>
    );
};

export async function getStaticProps() {
    const types = await require('@/constants/rfm/types').default;
    const { typesToOptions } = await require('@/utils/dataTransform');
    const options = typesToOptions(types);
    const TYPES_TABLE_DATA = typesToTableData(types).filter((d) => Boolean(d));

    const paginate = (arr: any[], chunk: number) => {
        const result: { [key: string]: object[] } = {};

        for (let i = 0; i < arr.length; i += chunk) {
            const page = arr.slice(i, i + chunk);
            const key = i / chunk + 1;
            result[key] = page;
        }

        return result;
    };

    const data = paginate(TYPES_TABLE_DATA, LIMIT_PER_PAGE);
    const pages = Array.apply(
        null,
        Array(Math.ceil(TYPES_TABLE_DATA.length / LIMIT_PER_PAGE))
    ).map((_y, i) => i + 1);

    return {
        props: {
            data,
            pages,
            options
        }
    };
}

export default Types;

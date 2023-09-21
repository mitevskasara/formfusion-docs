import { useState } from 'react';
import Button from 'corelabui/Button';
import Typography from 'corelabui/Typography';
import Checkbox from 'corelabui/Checkbox';
import Input from 'corelabui/Input';
import Select from 'corelabui/Select';
import Table from 'corelabui/Table';
import DocsLayout from '@/components/DocsLayout';
import Code from '@/components/Code';
import tableOfContents from '@/constants/tableOfContents';
import buttonApi from './api/button';
import styles from './components.module.scss';

const HEADERS = ['Name', 'Type', 'Default', 'Description'];
const COMPONENTS = [
    { params: { component: 'button' } }
    // { params: { component: 'breadcrumb' } },
    // { params: { component: 'checkbox' } },
    // { params: { component: 'dropdown' } },
    // { params: { component: 'highlight' } },
    // { params: { component: 'input' } },
    // { params: { component: 'link' } },
    // { params: { component: 'quote' } },
    // { params: { component: 'radio-button' } },
    // { params: { component: 'select' } },
    // { params: { component: 'tag' } },
    // { params: { component: 'textarea' } },
    // { params: { component: 'typography' } },
    // { params: { component: 'grid' } },
    // { params: { component: 'flex' } },
    // { params: { component: 'divider' } },
    // { params: { component: 'scrollable' } }
];

type Props = {
    theme: string;
    data?: any;
};

const Component = ({ theme, data }: Props) => {
    const [props, setProps] = useState(data.props);
    const component: string = data.title.toString().toLowerCase();
    const DATA = buttonApi as any;

    const componentProps = Object.keys(props).reduce((acc: any, key: any) => {
        acc[key] = props[key]['default'];
        return acc;
    }, {});

    const propsToString = (obj: any) => {
        return Object.entries(obj)
            .map(
                ([key, value]) =>
                    `${key}=${
                        typeof value === 'string' ? `"${value}"` : `{${value}}`
                    }`
            )
            .join('\n\t\t\t');
    };

    const convertOptionsToObjects = (options: any[]) => {
        return options.map((option) => ({
            label: option,
            value: option
        }));
    };

    return (
        <DocsLayout theme={theme} tableOfContents={tableOfContents}>
            <div id="usage">
                <Typography variant="heading6" htmlElement="h3">
                    {data.title}
                </Typography>
                <Typography variant="body1">{data.description}</Typography>
                <br />
                {/* <Typography variant="subtitle1">
          Usage
        </Typography>
        <Typography variant="body1">
          {data.title}s are typically used for:
        </Typography>
        <Typography variant="body1">
          <ol>
            {data.usage?.map((use: string) => <li>{use}</li>)}
          </ol>
        </Typography> */}
                <Typography variant="body1">
                    Below, you will find a list of properties that can be
                    configured for this component. Feel free to experiment and
                    try them out to see how they affect the behavior and
                    appearance of the component!
                </Typography>
            </div>
            <br />
            <div id="example">
                <Typography variant="subtitle1">Example</Typography>
                <div className={styles.container}>
                    <div className={styles.container__left} id="button-code">
                        <Button {...componentProps} onClick={() => alert()} />
                    </div>

                    <div className={styles.container__right}>
                        {Object.keys(props).map((prop, key) => (
                            <div
                                className={styles.container__right__field}
                                key={key}>
                                <Typography variant="body1" margin={false}>
                                    {prop}
                                </Typography>
                                {props[prop].type === 'string' &&
                                    !props[prop].options && (
                                        <Input
                                            value={props[prop].default}
                                            type="text"
                                            size="small"
                                            onChange={(e: any) =>
                                                setProps({
                                                    ...props,
                                                    [prop]: {
                                                        ...props[prop],
                                                        default: e.target.value
                                                    }
                                                })
                                            }
                                        />
                                    )}
                                {props[prop].type !== 'boolean' &&
                                    props[prop].options && (
                                        <Select
                                            value={props[prop].default}
                                            onChange={(value: any) =>
                                                setProps({
                                                    ...props,
                                                    [prop]: {
                                                        ...props[prop],
                                                        default: value
                                                    }
                                                })
                                            }
                                            options={convertOptionsToObjects(
                                                props[prop].options
                                            )}
                                            size="small"
                                        />
                                    )}
                                {props[prop].type === 'boolean' &&
                                    props[prop].options && (
                                        <div
                                            className={
                                                styles.container__right__field__checkbox
                                            }>
                                            <Checkbox
                                                checked={props[prop].default}
                                                size="small"
                                                onChange={(e: any) =>
                                                    setProps({
                                                        ...props,
                                                        [prop]: {
                                                            ...props[prop],
                                                            default:
                                                                e.target.checked
                                                        }
                                                    })
                                                }
                                            />
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <Code language="javascript">
                    {data.code.replace(
                        'PROPS_PLACEHOLDER',
                        propsToString(componentProps)
                    )}
                </Code>
            </div>
            <br />
            <div id="api">
                <Typography variant="subtitle1">Component API</Typography>
                <Table headers={HEADERS} data={DATA[component]} />
            </div>
        </DocsLayout>
    );
};

export async function getStaticPaths() {
    return {
        paths: COMPONENTS,
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    try {
        const data = require(`./data/${params.component}.json`);

        return {
            props: {
                data
            }
        };
    } catch (err) {
        console.log(
            `Error fetching data for component page ${params.component}`,
            err
        );

        return {
            notFound: true
        };
    }
}

export default Component;

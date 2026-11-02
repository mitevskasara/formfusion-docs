import ROUTES from './routes';

export interface Nav {
    key: string;
    title: string;
    url: string;
    sublist?: Nav[];
    icon?: string;
}

const NAV: Nav[] = [
    {
        key: 'api',
        title: 'API',
        url: `/${ROUTES.form}`,
        icon: 'terminal',
        sublist: [
            {
                key: 'form',
                title: 'Form',
                url: `/${ROUTES.form}`
            },
            {
                key: 'input',
                title: 'Input',
                url: `/${ROUTES.input}`
            },
            {
                key: 'textarea',
                title: 'Textarea',
                url: `/${ROUTES.textarea}`
            },
            {
                key: 'useform',
                title: 'UseForm',
                url: `/${ROUTES.useform}`
            },
            {
                key: 'connect',
                title: 'useConnect',
                url: `/${ROUTES.connect}`
            },
            {
                key: 'validation',
                title: 'Validation',
                url: `/${ROUTES.validation}`
            },
            {
                key: 'masking',
                title: 'Masking',
                url: `/${ROUTES.masking}`
            }
        ]
    },
    {
        key: 'integrations',
        title: 'Integrations',
        url: `/${ROUTES.integrations}`,
        icon: 'code',
        sublist: [
            {
                key: 'mui',
                title: 'Material UI',
                url: `/${ROUTES.mui}`
            },
            {
                key: 'antdesign',
                title: 'Ant Design',
                url: `/${ROUTES.antdesign}`
            },
            {
                key: 'chakraui',
                title: 'Chakra UI',
                url: `/${ROUTES.chakraui}`
            },
            {
                key: 'reactstrap',
                title: 'Reactstrap',
                url: `/${ROUTES.reactstrap}`
            }
        ]
    }
];

// Derived, not hand-maintained: same tree, URLs prefixed into /docs/v1/...,
// with the one label that genuinely differs for the frozen v1 content.
const withV1Prefix = (url: string) =>
    url.replace(/^\/docs\//, '/docs/v1/').replace(/^\/docs$/, '/docs/v1');

export const NAV_V1: Nav[] = NAV.map((item) => ({
    ...item,
    url: withV1Prefix(item.url),
    sublist: item.sublist?.map((sublistItem) => ({
        ...sublistItem,
        url: withV1Prefix(sublistItem.url),
        title: sublistItem.key === 'connect' ? 'Connect' : sublistItem.title
    }))
}));

export default NAV;

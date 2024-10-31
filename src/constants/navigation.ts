import ROUTES from './routes';

export interface Nav {
    key: string;
    title: string;
    url: string;
    sublist?: Nav[];
    icon?: string;
}

export default [
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
                title: 'Connect',
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
] as Nav[];

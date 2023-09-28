import ROUTES from './routes';

export interface Nav {
    key: 'form' | 'input' | 'textarea';
    title: string;
    url: string;
}

export default [
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
        key: 'types',
        title: 'Input types',
        url: `/${ROUTES.types}`
    },
    {
        key: 'patterns',
        title: 'Validation patterns',
        url: `/${ROUTES.patterns}`
    }
] as Nav[];

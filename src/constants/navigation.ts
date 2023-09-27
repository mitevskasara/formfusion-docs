export interface Nav {
    key: 'form' | 'input' | 'textarea';
    title: string;
    url: string;
}

export default [
    {
        key: 'form',
        title: 'Form',
        url: '/forms/api/form'
    },
    {
        key: 'input',
        title: 'Input',
        url: '/forms/api/input'
    },
    {
        key: 'textarea',
        title: 'Textarea',
        url: '/forms/api/textarea'
    },
    {
        key: 'useform',
        title: 'UseForm',
        url: '/forms/api/useform'
    },
    {
        key: 'connect',
        title: 'Connect',
        url: '/forms/api/connect'
    },
    {
        key: 'types',
        title: 'Input types',
        url: '/forms/api/types'
    },
    {
        key: 'patterns',
        title: 'Validation patterns',
        url: '/forms/api/patterns'
    }
] as Nav[];

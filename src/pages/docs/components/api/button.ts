const button = [
    {
        name: '<code>title</code>',
        type: "<code style={{ color: 'purple' }}>string</code>",
        default: '',
        description:
            'Title of the button. This is optional and children property can be used instead.'
    },
    {
        name: '<code>children</code>',
        type: "<code style={{ color: 'purple' }}>node</code>",
        default: '',
        description: 'The content of the component'
    },
    {
        name: '<code>className</code>',
        type: "<code style={{ color: 'purple' }}>string</code>",
        default: '',
        description:
            'Override or extend the styles applied to the component. Works as regular className property'
    },
    {
        name: '<code>variant</code>',
        type: "<code style={{ color: 'purple' }}>\
                'primary' < br />| 'secondary' < br />| 'text'\
            </code>",
        default: "<code>'primary'</code>",
        description: 'The variant to use'
    },
    {
        name: '<code>size</code>',
        type: "<code style={{ color: 'purple' }}>\
                'small' <br />| 'medium' < br />| 'large'\
            </code>",
        default: "<code>'medium'</code>",
        description: 'Button size'
    },
    {
        name: '<code>loading</code>',
        type: "<code style={{ color: 'purple' }}>boolean</code>",
        default: '<code>false</code>',
        description: 'If true, the component is in loading state'
    },
    {
        name: '<code>disabled</code>',
        type: "<code style={{ color: 'purple' }}>boolean</code>",
        default: '<code>false</code>',
        description: 'If true, the component is disabled'
    },
    {
        name: '<code>width</code>',
        type: "<code style={{ color: 'purple' }}>string</code>",
        default: '',
        description: 'Sets width of the button'
    }
];

export default button;

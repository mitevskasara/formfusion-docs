export default (path: string) => [
    {
        title: 'Overview',
        items: [
            {
                title: 'Introduction',
                link: '/docs/overview',
                active: path.includes('overview')
            },
            {
                title: 'Getting started',
                link: '/docs/getting-started',
                active: path === '/docs/getting-started'
            },
            {
                title: 'Components',
                link: '/docs/components',
                active: path === '/docs/components'
            }
        ]
    },
    {
        title: 'Layout',
        items: [
            {
                title: 'Grid',
                link: '/docs/components/grid',
                active: path === '/docs/components/grid'
            },
            {
                title: 'Flex',
                link: '/docs/components/flex',
                active: path === '/docs/components/flex'
            },
            {
                title: 'Divider',
                link: '/docs/components/divider',
                active: path === '/docs/components/divider'
            },
            {
                title: 'Scrollable',
                link: '/docs/components/scrollable',
                active: path === '/docs/components/scrollable'
            }
        ]
    },
    {
        title: 'Forms',
        items: [
            {
                title: 'Button',
                link: '/docs/components/button',
                active: path === '/docs/components/button'
            },
            {
                title: 'Checkbox',
                link: '/docs/components/checkbox',
                active: path === '/docs/components/checkbox'
            },
            {
                title: 'Dropdown',
                link: '/docs/components/dropdown',
                active: path === '/docs/components/dropdown'
            },
            {
                title: 'Input',
                link: '/docs/components/input',
                active: path === '/docs/components/input'
            },
            {
                title: 'RadioButton',
                link: '/docs/components/radio-button',
                active: path === '/docs/components/radio-button'
            },
            {
                title: 'Select',
                link: '/docs/components/select',
                active: path === '/docs/components/select'
            },
            {
                title: 'Textarea',
                link: '/docs/components/textarea',
                active: path === '/docs/components/textarea'
            }
        ]
    },
    {
        title: 'Navigation',
        items: [
            {
                title: 'Breadcrumb',
                link: '/docs/components/breadcrumb',
                active: path === '/docs/components/breadcrumb'
            },
            {
                title: 'Link',
                link: '/docs/components/link',
                active: path === '/docs/components/link'
            },
            {
                title: 'Navigation',
                link: '/docs/components/navigation',
                active: path === '/docs/components/navigation'
            },
            {
                title: 'TableOfContents',
                link: '/docs/components/table-of-contents',
                active: path === '/docs/components/table-of-contents'
            },
            {
                title: 'Tabs',
                link: '/docs/components/tabs',
                active: path === '/docs/components/tabs'
            }
        ]
    },
    {
        title: 'Data display',
        items: [
            {
                title: 'Card',
                link: '/docs/components/card',
                active: path === '/docs/components/card'
            },
            {
                title: 'Quote',
                link: '/docs/components/quote',
                active: path === '/docs/components/quote'
            },
            {
                title: 'Table',
                link: '/docs/components/table',
                active: path === '/docs/components/table'
            },
            {
                title: 'Tag',
                link: '/docs/components/tag',
                active: path === '/docs/components/tag'
            }
        ]
    },
    {
        title: 'Typography',
        items: [
            {
                title: 'Highlight',
                link: '/docs/components/highlight',
                active: path === '/docs/components/highlight'
            },
            {
                title: 'Typography',
                link: '/docs/components/typography',
                active: path === '/docs/components/typography'
            }
        ]
    },
    {
        title: 'Overlay',
        items: [
            {
                title: 'Popup',
                link: '/docs/components/popup',
                active: path === '/docs/components/popup'
            }
        ]
    }
];

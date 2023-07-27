export default [
    {
        title: 'Usages',
        anchor: '#usage',
        active: true
    },
    {
        title: 'Example',
        anchor: '#example'
    },
    {
        title: 'API',
        anchor: '#api'
    }
];

export const INTRODUCTION = [
    {
        title: 'Features',
        anchor: '#features',
        active: true
    },
    {
        title: 'Environment Support',
        anchor: '#support'
    }
];

export const GET_STARTED = (active: string) => [
    {
        title: 'Installation',
        anchor: '#installation',
        active: active === 'installation'
    },
    {
        title: 'Usage',
        anchor: '#usage',
        active: active === 'usage'
    },
    {
        title: 'Theming',
        anchor: '#theming',
        active: active === 'theming'
    },
    {
        title: 'Available themes',
        anchor: '#themes',
        active: active === 'themes'
    },
    {
        title: 'Customizing a theme',
        anchor: '#customize-theme',
        active: active === 'customize-theme'
    },
    {
        title: 'Creating a theme',
        anchor: '#creating-theme',
        active: active === 'creating-theme'
    },
    {
        title: 'Theme options',
        anchor: '#theme-options',
        active: active === 'theme-options'
    }
];

export const COMPONENTS = (active: string) => {
    return [
        {
            title: 'Elements',
            anchor: '/docs/components#elements',
            active: active === 'elements'
        },
        {
            title: 'Layout',
            anchor: '/docs/components#layout',
            active: active === 'layout'
        }
    ];
};

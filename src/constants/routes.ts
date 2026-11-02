const ROUTES = {
    home: 'docs',
    form: 'docs/api/form',
    input: 'docs/api/input',
    textarea: 'docs/api/textarea',
    useform: 'docs/api/useform',
    connect: 'docs/api/connect',
    validation: 'docs/api/validation',
    masking: 'docs/api/masking',
    integrations: 'docs/integrations',
    mui: 'docs/integrations/mui',
    antdesign: 'docs/integrations/antdesign',
    chakraui: 'docs/integrations/chakraui',
    reactstrap: 'docs/integrations/reactstrap'
} as { [key: string]: string };

// Derived, not hand-maintained: every v1 route is the same key pointing at
// the v1-prefixed path, so the two can never drift out of sync.
export const ROUTES_V1 = Object.fromEntries(
    Object.entries(ROUTES).map(([key, value]) => [
        key,
        value === 'docs' ? 'docs/v1' : value.replace('docs/', 'docs/v1/')
    ])
) as { [key: string]: string };

export default ROUTES;

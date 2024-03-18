const ROUTES = {
    home: 'formfusion',
    form: 'formfusion/api/form',
    input: 'formfusion/api/input',
    textarea: 'formfusion/api/textarea',
    useform: 'formfusion/api/useform',
    connect: 'formfusion/api/connect',
    types: 'formfusion/api/validation-rules',
    patterns: 'formfusion/api/patterns',
    masking: 'formfusion/api/masking',
    integrations: 'formfusion/integrations',
    mui: 'formfusion/integrations/mui',
    antdesign: 'formfusion/integrations/antdesign',
    chakraui: 'formfusion/integrations/chakraui',
    reactstrap: 'formfusion/integrations/reactstrap'
} as { [key: string]: string };

export default ROUTES;

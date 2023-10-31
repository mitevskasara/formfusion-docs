const toIgnore = [
    'email',
    'password',
    'search',
    'url',
    'tel',
    'creditCardNumberHyphen',
    'creditCardNumberSpace',
    'ipv4',
    'ipv6',
    'guid',
    'ssn'
];

export const patternsToList = (list: []) =>
    list
        ? [
              ...Object.keys(list)
                  .slice(0, 15)
                  .filter((p) => !toIgnore.includes(p)),
              'and many more...'
          ]
        : [];

export const typesToOptions = (types: any) =>
    Object.keys(types).map((type) => ({ value: type, label: type }));

export const patternsToOptions = (patterns: any) => {
    const options: {
        label: string;
        value: string;
        subtype: string;
        type: string;
    }[] = [];
    Object.keys(patterns).map((type) => {
        if (typeof patterns[type] === 'object') {
            Object.keys(patterns[type]).map((subtype) =>
                options.push({
                    value: `${type}.${subtype}`,
                    label: `${type}.${subtype}`,
                    type,
                    subtype
                })
            );
        } else {
            options.push({ value: type, label: type, subtype: '', type });
        }
    });

    return options;
};

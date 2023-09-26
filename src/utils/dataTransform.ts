import { camelCaseToLabel, typeToLabel } from './general';

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
              ...Object.keys(list).filter((p) => !toIgnore.includes(p)),
              'and many more...'
          ]
        : [];

export const typesToOptions = (types: any) => {
    const options = Object.keys(types).reduce(
        (acc: { label: string; value: string }[], type) => {
            if (!type.startsWith('postal-code')) {
                acc.push({ value: type, label: typeToLabel(type) });
            }
            return acc;
        },
        []
    );

    options.push({ value: 'postal-code', label: 'Postal code' });

    return options;
};

export const patternsToOptions = (patterns: any) =>
    Object.keys(patterns).map((type) => {
        return !type.startsWith('postalCode')
            ? { value: type, label: camelCaseToLabel(type) }
            : { value: 'postalCode', label: 'Postal code' };
    });

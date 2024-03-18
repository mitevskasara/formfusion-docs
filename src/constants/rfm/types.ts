import patterns from './regex';

const restTypes = {};
Object.keys(patterns).map((key) =>
    Object.assign(restTypes, {
        [key.toLowerCase().replaceAll('_', '-')]: patterns[key]
    })
);

const types = {
    ...restTypes
};

export default types;

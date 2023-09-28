import { darkTheme, winterTheme } from 'corelabui/Theme';

const customTheme = {
    ...winterTheme,
    fontFamily: 'inherit',
    body1: '0.95em'
};

const dark = {
    ...darkTheme,
    fontFamily: 'inherit',
    body1: '0.95em'
};

const THEMES = {
    standard: customTheme,
    dark
} as any;

export default THEMES;

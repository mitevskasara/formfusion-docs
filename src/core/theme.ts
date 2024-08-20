import { darkTheme, winterTheme } from 'corelabui/Theme';

const customTheme = {
    ...winterTheme,
    primary: '#066D8E',
    primaryHover: '#044F64',
    primaryDisabled: '#7D9AA6',
    fontFamily: 'inherit',
    body1: '1em',
    background: '#ffffff',
    text: '#23272f',
    title: '#23272f',
    surface: '#fafafa',
    surfaceDark: '#f5f6f8',
    borderColor: '#eeeeee'
};

const dark = {
    ...darkTheme,
    text: '#d5d5d5e0',
    textSecondary: '#bfbebed9',
    title: '#ffffff',
    fontFamily: 'inherit',
    body1: '0.9em',
    surface: '#343a46',
    surfaceDark: '#080809',
    fieldsBackground: '#2a3139',
    borderRadius: '9999px'
};

export const scrollBarStyle =
    `::-webkit-scrollbar { width: ${customTheme.scrollBarWidth}; }\n` +
    `::-webkit-scrollbar-track { background: ${customTheme.scrollBarTrackColor}; }\n` +
    `::-webkit-scrollbar-thumb { background: ${customTheme.scrollBarThumbColor}; border-radius: var(--border-radius) }`;

const THEMES = {
    standard: customTheme,
    dark
} as any;

export default THEMES;

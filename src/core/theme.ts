import { darkTheme, winterTheme } from 'corelabui/Theme';

const customTheme = {
    ...winterTheme,
    primary: '#2D3250',
    primaryHover: '#7077A1',
    primaryDisabled: '#979CBB',
    fontFamily: 'inherit',
    body1: '0.9em',
    background: '#f5f4f0'
};

const dark = {
    ...darkTheme,
    text: '#d5d5d5e0',
    textSecondary: '#bfbebed9',
    title: '#ffffff',
    fontFamily: 'inherit',
    body1: '0.9em',
    surfaceDark: '#2a2f46'
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

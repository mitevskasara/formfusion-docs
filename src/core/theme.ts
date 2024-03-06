import { darkTheme, winterTheme } from 'corelabui/Theme';

const customTheme = {
    ...winterTheme,
    primary: '#2D3250',
    primaryHover: '#7077A1',
    primaryDisabled: '#979CBB',
    fontFamily: 'inherit',
    body1: '0.95em'
};

const dark = {
    ...darkTheme,
    text: '#d5d5d5e0',
    fontFamily: 'inherit',
    body1: '0.95em'
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

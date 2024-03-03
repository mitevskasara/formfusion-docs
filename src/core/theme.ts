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

export const scrollBarStyle =
    `::-webkit-scrollbar { width: ${customTheme.scrollBarWidth}; }\n` +
    `::-webkit-scrollbar-track { background: ${customTheme.scrollBarTrackColor}; }\n` +
    `::-webkit-scrollbar-thumb { background: ${customTheme.scrollBarThumbColor}; border-radius: var(--border-radius) }`;

const THEMES = {
    standard: customTheme,
    dark
} as any;

export default THEMES;

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
    textSecondary: '#000000a6',
    title: '#23272f',
    surface: '#fafafa',
    surfaceDark: '#f5f6f8',
    borderColor: '#e5e6eb',
    // code hightlight theme
    backgroundColor: '#f8f9fa',
    textColor: '#343a40',
    selectionBackground: '#d1e7dd',
    commentColor: '#6c757d',
    punctuationColor: '#343a40',
    operatorColor: '#c41e3a',
    propertyColor: '#0056b3',
    tagColor: '#1d9b6e',
    stringColor: '#005cc5',
    selectorColor: '#6f42c1',
    attrNameColor: '#c41e3a',
    attrValueColor: '#007bff',
    keywordColor: '#c41e3a',
    statementColor: '#e36209',
    placeholderColor: '#6f42c1',
    importantColor: '#c41e3a',
    lineNumbersBorder: '#e1e4e8',
    lineNumbersColor: '#495057',
    lineHighlightBackground: 'rgba(0, 123, 255, 0.1)'
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
    // code hightlight theme
    backgroundColor: '#212529',
    textColor: '#f8f9fa',
    selectionBackground: '#3e4551',
    commentColor: '#adb5bd',
    punctuationColor: '#f8f9fa',
    operatorColor: '#ff6f61',
    propertyColor: '#66b2ff',
    tagColor: '#57c64d',
    stringColor: '#78c5e5',
    selectorColor: '#c77dff',
    attrNameColor: '#ff6f61',
    attrValueColor: '#1da1f2',
    keywordColor: '#ff6f61',
    statementColor: '#f6b93b',
    placeholderColor: '#66b2ff',
    importantColor: '#ff6f61',
    lineNumbersBorder: '#343a40',
    lineNumbersColor: '#adb5bd',
    lineHighlightBackground: 'rgba(255, 112, 64, 0.2)'
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

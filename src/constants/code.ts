export const INSTALL = 'npm install @corelabui/classic';
export const EXAMPLE =
    "import Button from 'corelabui/Button';\
  \n\nfunction App() {\n\treturn (\n\
    \t<Button\n\t\t\tonClick={() => console.log('Hello Corelab UI')}>\n\t\t\tClick me!\n\t\t</Button>\n\t);\n}";

export const THEME_USAGE =
    "import { darkTheme } from 'corelabui/Theme'; \n\
  \nexport function App() { \n\treturn (\n\t\t <ThemeProvider theme={darkTheme}>\n\t\t\t <div>darkTheme applied!</div>\n\t\t</ThemeProvider>\n\t); \n } ";

export const THEME_OVERRIDE =
    "import { createTheme, darkTheme } from 'corelabui/Theme';\
\n\nconst myTheme = createTheme({\n\t...darkTheme,\n\tbackground: 'blue'\n});\
\n\nexport function App() { \n\treturn(\n\t\t<ThemeProvider theme={myTheme}>\n\t\t\t\
  <div>myTheme applied!</div>\n\t\t</ThemeProvide>\n\t); \n }";

export const THEME_CUSTOM =
    "import { createTheme } from 'corelabui/Theme';\
\n\nconst myTheme = createTheme({\n\tbackground: 'blue'\n});\
\n\nexport function App() { \n\treturn(\n\t\t<ThemeProvider theme={myTheme}>\n\t\t\t\
  <div>myTheme applied!</div>\n\t\t</ThemeProvide>\n\t); \n }";

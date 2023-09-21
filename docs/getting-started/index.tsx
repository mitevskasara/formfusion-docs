import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Typography from 'corelabui/Typography';
import Button from 'corelabui/Button';
import Highlight from 'corelabui/Highlight';
import Table from 'corelabui/Table';
import DocsLayout from '../DocsLayout';
import {
    defaultTheme,
    darkTheme,
    winterTheme,
    springTheme,
    summerTheme,
    fallTheme
} from 'corelabui/Theme';
import Code from '@/components/Code';
import { GET_STARTED } from '@/constants/tableOfContents';
import {
    EXAMPLE,
    INSTALL,
    THEME_CUSTOM,
    THEME_OVERRIDE,
    THEME_USAGE
} from '@/constants/code';
import { DATA, HEADERS } from '@/constants/themeOverride';
import styles from './getting-started.module.scss';

const GettingStarted = ({ theme, setTheme }: any) => {
    const router = useRouter();
    const { pathname, asPath } = router;
    useEffect(() => {
        console.log(asPath.split('#')[1]);
    }, [router]);
    console.log(theme);
    return (
        <DocsLayout
            theme={theme}
            tableOfContents={GET_STARTED(asPath.split('#')[1])}>
            <div id="installation">
                <Typography variant="heading6" htmlElement="h3">
                    Installation
                </Typography>
                <Typography variant="body1">
                    Corelab UI is available as an npm package.
                    <br />
                    <br />
                    Make sure you have Node.js installed on your machine. Then
                    install the component from your command line:
                </Typography>
                <Code language="javascript">{INSTALL}</Code>
            </div>
            <br />
            <br />
            <div id="getting-started">
                <Typography variant="heading6" htmlElement="h3">
                    Usage
                </Typography>
                <Typography variant="body1">
                    Example of a basic React app using Corelab UI's Button
                    component from the classic theme:
                </Typography>
                <Code language="javascript">{EXAMPLE}</Code>
            </div>
            <br />
            <br />
            <div id="theming">
                <Typography variant="heading6" htmlElement="h3">
                    Theming
                </Typography>
                <Typography variant="body1">
                    You can use one of the available Corelab UI themes or even
                    customize Corelab UI with your theme. You can change the
                    colors, the typography and much more.
                </Typography>
                <Typography variant="body1">
                    If you wish to customize the theme, you need to use the
                    ThemeProvider component in order to inject a theme into your
                    application. This is optional since Core Lab UI comes with a
                    default theme{' '}
                    <span className={`icon-light ${styles.info}`} />.
                </Typography>
                <br />
                <div id="themes">
                    <Typography variant="subtitle1">
                        Available themes
                    </Typography>
                    <ul className={styles.container__list}>
                        <li>
                            <Highlight color={defaultTheme.primary}>
                                <span className={`icon-light ${styles.info}`} />
                                <code>defaultTheme</code>
                            </Highlight>
                            <Button
                                title="Try it"
                                variant="text"
                                size="small"
                                onClick={() => setTheme('default')}
                            />
                        </li>
                        <li>
                            <Highlight
                                background={darkTheme.primary}
                                color={darkTheme.secondary}>
                                <span className={`icon-dark ${styles.info}`} />
                                <code>darkTheme</code>
                            </Highlight>
                            <Button
                                title="Try it"
                                variant="text"
                                size="small"
                                onClick={() => setTheme('dark')}
                            />
                        </li>
                        <li>
                            <Highlight color={winterTheme.primary}>
                                <span
                                    className={`icon-winter ${styles.info}`}
                                />
                                <code>winterTheme</code>
                            </Highlight>
                            <Button
                                title="Try it"
                                variant="text"
                                size="small"
                                onClick={() => setTheme('winter')}
                            />
                        </li>
                        <li>
                            <Highlight color={springTheme.primary}>
                                <span
                                    className={`icon-spring ${styles.info}`}
                                />
                                <code>springTheme</code>
                            </Highlight>
                            <Button
                                title="Try it"
                                variant="text"
                                size="small"
                                onClick={() => setTheme('spring')}
                            />
                        </li>
                        <li>
                            <Highlight color={summerTheme.primary}>
                                <span
                                    className={`icon-summer ${styles.info}`}
                                />
                                <code>summerTheme</code>
                            </Highlight>
                            <Button
                                title="Try it"
                                variant="text"
                                size="small"
                                onClick={() => setTheme('summer')}
                            />
                        </li>
                        <li>
                            <Highlight color={fallTheme.primary}>
                                <span className={`icon-fall ${styles.info}`} />
                                <code>fallTheme</code>
                            </Highlight>
                            <Button
                                title="Try it"
                                variant="text"
                                size="small"
                                onClick={() => setTheme('fall')}
                            />
                        </li>
                    </ul>
                    <Typography variant="body1">
                        To use one of the available themes, you need to import
                        the theme and then use the ThemeProvider component in
                        your entry file in order to inject it into your
                        application.
                    </Typography>
                    <Code language="javascript">{THEME_USAGE}</Code>
                    <br />
                </div>
                <div id="customize-theme">
                    <Typography variant="subtitle1">Customizing</Typography>
                    <Typography variant="body1">
                        To customize one of the available themes you can use the
                        createTheme function and extend the theme you want by
                        overriding the available properties with your own custom
                        values.
                    </Typography>
                    <Code language="javascript">{THEME_OVERRIDE}</Code>
                </div>
                <div id="creating-theme">
                    <Typography variant="subtitle1">Creating theme</Typography>
                    <Typography variant="body1">
                        To create your own theme, you can use the createTheme
                        function and provide your own values for each theme
                        option. The available theme options are provided in the
                        table below.
                    </Typography>
                    <Code language="javascript">{THEME_CUSTOM}</Code>
                </div>
                <br />
                <div id="theme-options">
                    <Typography variant="subtitle1">Theme options</Typography>
                    <Table headers={HEADERS} data={DATA} />
                </div>
            </div>
        </DocsLayout>
    );
};

export default GettingStarted;

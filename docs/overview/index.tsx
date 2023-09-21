import DocsLayout from '../DocsLayout';
import Typography from 'corelabui/Typography';
import Table from 'corelabui/Table';
import browsers from '@/constants/browsers';
import { INTRODUCTION } from '@/constants/tableOfContents';
import styles from './overview.module.scss';

export const HEADERS = [
    <div className={styles.table__header}>
        <span className="icon-microsoftedge" />
        Edge
    </div>,
    <div className={styles.table__header}>
        <span className="icon-mozillafirefox" />
        Firefox
    </div>,
    <div className={styles.table__header}>
        <span className="icon-googlechrome" />
        Chrome
    </div>,
    <div className={styles.table__header}>
        <span className="icon-safari" />
        Safari
    </div>,
    <div className={styles.table__header}>
        <span className="icon-opera" />
        Opera
    </div>
];

const Overview = ({ theme }: any) => {
    return (
        <DocsLayout theme={theme} tableOfContents={INTRODUCTION}>
            <div id="introduction">
                <Typography variant="heading5" htmlElement="h1">
                    Lightweight and dependency-free collection of React
                    components.
                </Typography>
                <br />
                <Typography variant="body1">
                    Core Lab UI offers a set of ready-to-use fully customizable
                    foundational UI elements that you can easily integrate in
                    your React or Nextjs project. We prioritize performance by
                    utilizing the best practices for rendering and optimizing
                    React components, while keeping Core Lab UI as a
                    zero-dependency library.
                </Typography>
                <Typography variant="body1">
                    Our aim is to simplify the setup process while making sure
                    that your project remains lightweight and independent.
                </Typography>
            </div>
            <br />
            <br />
            <div id="features">
                <Typography variant="heading6" htmlElement="h3">
                    Features
                </Typography>
                <Typography variant="body1" htmlElement="div">
                    <ul className={styles.container__list}>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Optimised and ready-to-use React components
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Multiple themes available
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Automatic light/dark and seasonal theme changes
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Fully customizable components
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            <span>
                                Accessible components following{' '}
                                <a
                                    href="https://www.w3.org/WAI/ARIA/apg/patterns/"
                                    target="_blank">
                                    WAI-ARIA practices
                                </a>
                            </span>
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Supports React and Nextjs integration
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Available in Javascript and Typescript
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Doesn't relay on external dependencies
                        </li>
                        <li>
                            <span className={`icon-check ${styles.success}`} />
                            Easy to get started
                        </li>
                    </ul>
                </Typography>
                <br />
                <Typography variant="subtitle1" htmlElement="h3">
                    Coming soon
                </Typography>
                <Typography variant="body1" htmlElement="div">
                    We're consistently working on improving existing components
                    while also expanding our collection to include:
                    <ul className={styles.container__list}>
                        <li>
                            <span
                                className={`icon-hour-glass ${styles.info}`}
                            />
                            Even more foundational and complex React components
                        </li>
                        <li>
                            <span
                                className={`icon-hour-glass ${styles.info}`}
                            />
                            SEO optimised Landing page templates
                        </li>
                        <li>
                            <span
                                className={`icon-hour-glass ${styles.info}`}
                            />
                            E-commerce components library to enhance the user
                            experience of e-commerce websites
                        </li>
                        <li>
                            <span
                                className={`icon-hour-glass ${styles.info}`}
                            />
                            Form handling system that will make handling form
                            data in React a breeze for developers
                        </li>
                    </ul>
                </Typography>
            </div>
            <br />
            <br />
            <div id="support">
                <Typography variant="heading6" htmlElement="h3">
                    Environment Support
                </Typography>
                <Typography variant="body1" htmlElement="div">
                    <ul>
                        <li>Modern browsers</li>
                        <li>Server-side Rendering</li>
                    </ul>
                </Typography>
                <Table headers={HEADERS} data={browsers} />
            </div>
        </DocsLayout>
    );
};

export default Overview;

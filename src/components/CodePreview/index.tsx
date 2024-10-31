import Code from '../Code';
import FormExample from '../FormExample';
import { COMPONENTS } from '@/constants/examples';
import styles from './codePreview.module.scss';
import { useState } from 'react';
import Link from '../Link';

const CodePreview = () => {
    const [tab, setTab] = useState(0);
    return (
        <div className={`${styles.container}`}>
            <div className={styles.container__tabs}>
                <div
                    className={
                        tab === 0
                            ? styles.container__tabs__tab_active
                            : styles.container__tabs__tab
                    }
                    onClick={() => setTab(0)}>
                    Code
                </div>
                <div
                    className={
                        tab === 1
                            ? styles.container__tabs__tab_active
                            : styles.container__tabs__tab
                    }
                    onClick={() => setTab(1)}>
                    Preview
                </div>
                <div className={styles.container__tabs__action}>
                    <Link
                        href="https://stackblitz.com/edit/vitejs-vite-ahj7lp?file=src%2FApp.tsx"
                        rel="nofollow"
                        target="_blank"
                        icon="external-link"
                        color="inherit"></Link>
                </div>
            </div>
            <div
                className={
                    tab === 0
                        ? styles.container__tab__content_active
                        : styles.container__tab__content
                }>
                <Code language="javascript">{COMPONENTS.form}</Code>
            </div>
            <div
                className={
                    tab === 1
                        ? styles.container__tab__content_active
                        : styles.container__tab__content
                }>
                <FormExample />
            </div>
        </div>
    );
};

export default CodePreview;

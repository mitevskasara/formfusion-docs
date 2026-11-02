import { ReactNode, useState } from 'react';

import Code from '@/components/Code';

import classes from './showcaseExample.module.scss';

interface ShowcaseExampleProps {
    code: string;
    children: ReactNode;
}

const ShowcaseExample = ({ code, children }: ShowcaseExampleProps) => {
    const [tab, setTab] = useState(0);

    return (
        <div className={classes.container}>
            <div className={classes.container__tabs}>
                <div
                    className={
                        tab === 0
                            ? classes.container__tabs__tab_active
                            : classes.container__tabs__tab
                    }
                    onClick={() => setTab(0)}>
                    Preview
                </div>
                <div
                    className={
                        tab === 1
                            ? classes.container__tabs__tab_active
                            : classes.container__tabs__tab
                    }
                    onClick={() => setTab(1)}>
                    Code
                </div>
            </div>
            <div
                className={
                    tab === 0
                        ? classes.container__tab__content_active
                        : classes.container__tab__content
                }>
                {children}
            </div>
            <div
                className={
                    tab === 1
                        ? classes.container__tab__content_active
                        : classes.container__tab__content
                }>
                <Code language="javascript">{code}</Code>
            </div>
        </div>
    );
};

export default ShowcaseExample;

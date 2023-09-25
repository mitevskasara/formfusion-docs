import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { winterTheme } from 'corelabui/Theme';
import Typography from 'corelabui/Typography';

import Link from '@/components/Link';

import NAV from '@/constants/navigation';

import classes from './leftSidebar.module.scss';

interface Props {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
}

const LeftSidebar = ({ open }: Props) => {
    const { asPath } = useRouter();
    const isActive = (url: string) => url === asPath;

    let classses = classes.leftSidebar;
    if (open) classses += ` ${classes.leftSidebar_open}`;
    return (
        <aside className={classses}>
            <dl className={classes.leftSidebar__navigation}>
                <dt className={classes.leftSidebar__navigation__item}>
                    <Link href="/forms#introduction">
                        <Typography
                            variant="body1"
                            margin={false}
                            color={
                                isActive('/forms#introduction') &&
                                winterTheme.primary
                            }>
                            Introduction
                        </Typography>
                    </Link>
                </dt>
                <dt className={classes.leftSidebar__navigation__item}>
                    <Typography
                        variant="body1"
                        margin={false}
                        htmlElement="div">
                        <details
                            open
                            className={
                                classes.leftSidebar__navigation__item_expandable
                            }>
                            <summary
                                className={
                                    classes.leftSidebar__navigation__item_expandable__title
                                }>
                                Getting started
                            </summary>
                            <dd>
                                <dl
                                    className={
                                        classes.leftSidebar__navigation__sublist
                                    }>
                                    <dt
                                        className={
                                            classes.leftSidebar__navigation__sublist__item
                                        }>
                                        <Link href="/forms#installation">
                                            <Typography
                                                variant="body1"
                                                margin={false}
                                                color={
                                                    isActive(
                                                        '/forms#installation'
                                                    ) && winterTheme.primary
                                                }>
                                                Installation
                                            </Typography>
                                        </Link>
                                    </dt>
                                    <dt>
                                        <Link href="/forms#example">
                                            <Typography
                                                variant="body1"
                                                margin={false}
                                                color={
                                                    isActive(
                                                        '/forms#example'
                                                    ) && winterTheme.primary
                                                }>
                                                Example
                                            </Typography>
                                        </Link>
                                    </dt>
                                </dl>
                            </dd>
                        </details>
                    </Typography>
                </dt>
                <dt className={classes.leftSidebar__navigation__item}>
                    <Typography
                        variant="body1"
                        margin={false}
                        htmlElement="div">
                        <details
                            open
                            className={
                                classes.leftSidebar__navigation__item_expandable
                            }>
                            <summary
                                className={
                                    classes.leftSidebar__navigation__item_expandable__title
                                }>
                                API
                            </summary>
                            <dd>
                                <dl
                                    className={
                                        classes.leftSidebar__navigation__sublist
                                    }>
                                    {NAV.map((item) => (
                                        <dt
                                            key={item.key}
                                            className={
                                                classes.leftSidebar__navigation__sublist__item
                                            }>
                                            <Link href={item.url}>
                                                <Typography
                                                    variant="body1"
                                                    margin={false}
                                                    color={
                                                        isActive(item.url) &&
                                                        winterTheme.primary
                                                    }>
                                                    {item.title}
                                                </Typography>
                                            </Link>
                                        </dt>
                                    ))}
                                </dl>
                            </dd>
                        </details>
                    </Typography>
                </dt>
            </dl>
        </aside>
    );
};

export default LeftSidebar;

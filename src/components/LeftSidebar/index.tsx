import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Typography from 'corelabui/Typography';
import Scrollable from 'corelabui/Scrollable';

import Link from '@/components/Link';
import Accordion from '@/components/Accordion';

import THEMES from '@/core/theme';

import useClickAwayListener from '@/hook/useClickAwayListener';

import NAV from '@/constants/navigation';
import ROUTES from '@/constants/routes';

import classes from './leftSidebar.module.scss';

interface Props {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const LeftSidebar = ({ open, toggle, theme }: Props) => {
    const { asPath } = useRouter();
    const isActive = (url: string) => url === asPath;

    let classses = classes.leftSidebar;
    if (open) classses += ` ${classes.leftSidebar_open}`;

    const sidebarRef = useClickAwayListener(() => {});

    return (
        <aside className={classses} ref={sidebarRef}>
            <Scrollable>
                <nav className={classes.leftSidebar__navigation}>
                    <Typography
                        variant="body1"
                        htmlElement="span"
                        margin={false}
                        color={
                            isActive(`/${ROUTES.home}#introduction`) &&
                            THEMES[theme]
                                ? THEMES[theme].primary
                                : '#2D3250'
                        }>
                        <Link
                            href={`/${ROUTES.home}#introduction`}
                            color="inherit">
                            Introduction
                        </Link>
                    </Typography>
                    <Typography
                        variant="body1"
                        margin={false}
                        htmlElement="div">
                        <Accordion title="Getting started" open>
                            <ul
                                className={
                                    classes.leftSidebar__navigation__sublist
                                }>
                                <li
                                    className={
                                        classes.leftSidebar__navigation__sublist__item
                                    }>
                                    <Typography
                                        variant="body1"
                                        margin={false}
                                        htmlElement="span"
                                        color={
                                            isActive(
                                                `/${ROUTES.home}#installation`
                                            ) && THEMES[theme].primary
                                        }>
                                        <Link
                                            href={`/${ROUTES.home}#installation`}
                                            onClick={() => toggle(false)}
                                            color="inherit">
                                            Installation
                                        </Link>
                                    </Typography>
                                </li>
                                <li
                                    className={
                                        classes.leftSidebar__navigation__sublist__item
                                    }>
                                    <Typography
                                        variant="body1"
                                        margin={false}
                                        htmlElement="span"
                                        color={
                                            isActive(
                                                `/${ROUTES.home}#example`
                                            ) && THEMES[theme].primary
                                        }>
                                        <Link
                                            href={`/${ROUTES.home}#example`}
                                            onClick={() => toggle(false)}
                                            color="inherit">
                                            Example
                                        </Link>
                                    </Typography>
                                </li>
                            </ul>
                        </Accordion>
                    </Typography>
                    {NAV.map((item) =>
                        item.sublist ? (
                            <Typography
                                variant="body1"
                                margin={false}
                                htmlElement="div"
                                key={item.key}>
                                <Accordion title={item.title} open>
                                    <ul
                                        className={
                                            classes.leftSidebar__navigation__sublist
                                        }>
                                        {item?.sublist?.map((sublistItem) => (
                                            <li
                                                key={sublistItem.key}
                                                className={
                                                    classes.leftSidebar__navigation__sublist__item
                                                }>
                                                <Typography
                                                    variant="body1"
                                                    margin={false}
                                                    htmlElement="span"
                                                    color={
                                                        isActive(
                                                            sublistItem.url
                                                        ) &&
                                                        THEMES[theme].primary
                                                    }>
                                                    <Link
                                                        href={sublistItem.url}
                                                        title={
                                                            sublistItem.title
                                                        }
                                                        color="inherit">
                                                        {sublistItem.title}
                                                    </Link>
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion>
                            </Typography>
                        ) : (
                            <Typography
                                variant="body1"
                                htmlElement="span"
                                margin={false}
                                color={
                                    isActive(item.url) && THEMES[theme].primary
                                }
                                key={item.key}>
                                <Link href={item.url} color="inherit">
                                    {item.title}
                                </Link>
                            </Typography>
                        )
                    )}
                </nav>
            </Scrollable>
        </aside>
    );
};

export default LeftSidebar;

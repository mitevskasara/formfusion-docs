import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Typography from 'corelabui/Typography';
import Scrollable from 'corelabui/Scrollable';

import Link from '@/components/Link';
import Accordion from '@/components/Accordion';

import THEMES from '@/core/theme';

import useClickAwayListener from '@/hook/useClickAwayListener';

import NAV, { NAV_V1 } from '@/constants/navigation';
import ROUTES, { ROUTES_V1 } from '@/constants/routes';

import classes from './leftSidebar.module.scss';
import useIsOnClientSide from '@/hook/useIsOnClientSide';

interface Props {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    version?: 'v1' | 'v2';
}

const LeftSidebar = ({ open, toggle, theme, version = 'v2' }: Props) => {
    const { asPath } = useRouter();
    const iscsr = useIsOnClientSide();
    const isActive = (url: string) => iscsr && url === asPath;

    const nav = version === 'v1' ? NAV_V1 : NAV;
    const routes = version === 'v1' ? ROUTES_V1 : ROUTES;

    let classses = classes.leftSidebar;
    if (open) classses += ` ${classes.leftSidebar_open}`;

    const sidebarRef = useClickAwayListener(() => {
        if (open) {
            toggle(false);
        }
    });

    return (
        <aside className={classses} ref={sidebarRef}>
            {/* <Scrollable> */}
            <nav className={classes.leftSidebar__navigation}>
                <Typography variant="body1" margin={false} htmlElement="div">
                    <Accordion title="Getting started" open icon="pocket">
                        <ul
                            className={
                                classes.leftSidebar__navigation__sublist
                            }>
                            <li
                                className={
                                    isActive(`/${routes.home}#installation`)
                                        ? classes.leftSidebar__navigation__sublist__item_active
                                        : classes.leftSidebar__navigation__sublist__item
                                }>
                                <Typography
                                    variant="body1"
                                    margin={false}
                                    htmlElement="span">
                                    <Link
                                        href={`/${routes.home}#installation`}
                                        onClick={() => toggle(false)}
                                        color="inherit">
                                        Installation
                                    </Link>
                                </Typography>
                            </li>
                            <li
                                className={
                                    isActive(`/${routes.home}#example`)
                                        ? classes.leftSidebar__navigation__sublist__item_active
                                        : classes.leftSidebar__navigation__sublist__item
                                }>
                                <Typography
                                    variant="body1"
                                    margin={false}
                                    htmlElement="span">
                                    <Link
                                        href={`/${routes.home}#example`}
                                        onClick={() => toggle(false)}
                                        color="inherit">
                                        Example
                                    </Link>
                                </Typography>
                            </li>
                        </ul>
                    </Accordion>
                </Typography>
                {nav.map((item) =>
                    item.sublist ? (
                        <Typography
                            variant="body1"
                            margin={false}
                            htmlElement="div"
                            key={item.key}>
                            <Accordion title={item.title} open icon={item.icon}>
                                <ul
                                    className={
                                        classes.leftSidebar__navigation__sublist
                                    }>
                                    {item?.sublist?.map((sublistItem) => (
                                        <li
                                            key={sublistItem.key}
                                            className={
                                                isActive(sublistItem.url)
                                                    ? classes.leftSidebar__navigation__sublist__item_active
                                                    : classes.leftSidebar__navigation__sublist__item
                                            }>
                                            <Typography
                                                variant="body1"
                                                margin={false}
                                                htmlElement="span">
                                                <Link
                                                    href={sublistItem.url}
                                                    title={sublistItem.title}
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
                            color={isActive(item.url) && THEMES[theme].primary}
                            key={item.key}>
                            <Link href={item.url} color="inherit">
                                {item.title}
                            </Link>
                        </Typography>
                    )
                )}
            </nav>
            {/* </Scrollable> */}
        </aside>
    );
};

export default LeftSidebar;

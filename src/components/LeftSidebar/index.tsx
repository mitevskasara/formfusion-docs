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
import useIsOnClientSide from '@/hook/useIsOnClientSide';

interface Props {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const LeftSidebar = ({ open, toggle, theme }: Props) => {
    const { asPath } = useRouter();
    const iscsr = useIsOnClientSide();
    const isActive = (url: string) => iscsr && url === asPath;

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
                                    isActive(`/${ROUTES.home}#installation`)
                                        ? classes.leftSidebar__navigation__sublist__item_active
                                        : classes.leftSidebar__navigation__sublist__item
                                }>
                                <Typography
                                    variant="body1"
                                    margin={false}
                                    htmlElement="span">
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
                                    isActive(`/${ROUTES.home}#example`)
                                        ? classes.leftSidebar__navigation__sublist__item_active
                                        : classes.leftSidebar__navigation__sublist__item
                                }>
                                <Typography
                                    variant="body1"
                                    margin={false}
                                    htmlElement="span">
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

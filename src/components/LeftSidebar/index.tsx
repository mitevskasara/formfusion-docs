import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import Typography from 'corelabui/Typography';

import Link from '@/components/Link';
import Accordion from '@/components/Accordion';

import THEMES from '@/core/theme';
import NAV from '@/constants/navigation';
import ROUTES from '@/constants/routes';

import classes from './leftSidebar.module.scss';

interface Props {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const LeftSidebar = ({ open, theme }: Props) => {
    const { asPath } = useRouter();
    const isActive = (url: string) => url === asPath;

    let classses = classes.leftSidebar;
    if (open) classses += ` ${classes.leftSidebar_open}`;
    return (
        <aside className={classses}>
            <nav className={classes.leftSidebar__navigation}>
                <Link href={`/${ROUTES.home}#introduction`}>
                    <Typography
                        variant="body1"
                        htmlElement="span"
                        margin={false}
                        color={
                            isActive(`/${ROUTES.home}#introduction`) &&
                            THEMES[theme].primary
                        }>
                        Introduction
                    </Typography>
                </Link>
                <Typography variant="body1" margin={false} htmlElement="div">
                    <Accordion title="Getting started" open>
                        <ul
                            className={
                                classes.leftSidebar__navigation__sublist
                            }>
                            <li
                                className={
                                    classes.leftSidebar__navigation__sublist__item
                                }>
                                <Link href={`/${ROUTES.home}#installation`}>
                                    <Typography
                                        variant="body1"
                                        margin={false}
                                        htmlElement="span"
                                        color={
                                            isActive(
                                                `/${ROUTES.home}#installation`
                                            ) && THEMES[theme].primary
                                        }>
                                        Installation
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${ROUTES.home}#example`}>
                                    <Typography
                                        variant="body1"
                                        margin={false}
                                        htmlElement="span"
                                        color={
                                            isActive(
                                                `/${ROUTES.home}#example`
                                            ) && THEMES[theme].primary
                                        }>
                                        Example
                                    </Typography>
                                </Link>
                            </li>
                        </ul>
                    </Accordion>
                </Typography>
                <Typography variant="body1" margin={false} htmlElement="div">
                    <Accordion title="API" open>
                        <ul
                            className={
                                classes.leftSidebar__navigation__sublist
                            }>
                            {NAV.map((item) => (
                                <li
                                    key={item.key}
                                    className={
                                        classes.leftSidebar__navigation__sublist__item
                                    }>
                                    <Link href={item.url}>
                                        <Typography
                                            variant="body1"
                                            margin={false}
                                            htmlElement="span"
                                            color={
                                                isActive(item.url) &&
                                                THEMES[theme].primary
                                            }>
                                            {item.title}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Accordion>
                </Typography>
            </nav>
        </aside>
    );
};

export default LeftSidebar;

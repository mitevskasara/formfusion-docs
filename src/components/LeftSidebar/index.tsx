import React, { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { winterTheme } from 'corelabui/Theme';
import Typography from 'corelabui/Typography';

import Link from '@/components/Link';

import NAV from '@/constants/navigation';

import classes from './leftSidebar.module.scss';
import Accordion from '../Accordion';

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
            <nav className={classes.leftSidebar__navigation}>
                <Link href="/forms#introduction">
                    <Typography
                        variant="body1"
                        htmlElement="span"
                        margin={false}
                        color={
                            isActive('/forms#introduction') &&
                            winterTheme.primary
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
                                <Link href="/forms#installation">
                                    <Typography
                                        variant="body1"
                                        margin={false}
                                        htmlElement="span"
                                        color={
                                            isActive('/forms#installation') &&
                                            winterTheme.primary
                                        }>
                                        Installation
                                    </Typography>
                                </Link>
                            </li>
                            <li>
                                <Link href="/forms#example">
                                    <Typography
                                        variant="body1"
                                        margin={false}
                                        htmlElement="span"
                                        color={
                                            isActive('/forms#example') &&
                                            winterTheme.primary
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
                                                winterTheme.primary
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

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
                                            <Link href={sublistItem.url}>
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
                                                    {sublistItem.title}
                                                </Typography>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion>
                        </Typography>
                    ) : (
                        <Link href={item.url} key={item.key}>
                            <Typography
                                variant="body1"
                                htmlElement="span"
                                margin={false}
                                color={
                                    isActive(item.url) && THEMES[theme].primary
                                }>
                                {item.title}
                            </Typography>
                        </Link>
                    )
                )}
            </nav>
        </aside>
    );
};

export default LeftSidebar;

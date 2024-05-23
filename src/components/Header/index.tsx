import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Button from 'corelabui/Button';

import HamburgerMenu from '@/components/HamburgerMenu';
import ClientComponent from '@/components/ClientComponent';

import classes from './header.module.scss';
import Link from '../Link';

interface CustomHeaderProps {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
    showMenu?: boolean;
}

const CustomHeader = ({
    open,
    toggle,
    theme,
    setTheme,
    showMenu = true
}: CustomHeaderProps) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__inner}>
                <div className={classes.header__inner__left}>
                    <a href="https://www.corelabui.com">
                        <span
                            className={`${classes.header__inner__left__logo} icon-formfusion-full`}
                        />
                        <span
                            className={`${classes.header__inner__left__logo_mobile} icon-formfusion`}
                        />
                    </a>
                </div>
                <div className={classes.header__inner__right}>
                    <Link
                        href="/formfusion"
                        className={classes.header__inner__right__link_text}
                        title="Documentation">
                        Docs
                    </Link>
                    <Link
                        href="/blog"
                        className={classes.header__inner__right__link_text}
                        title="Blog"
                        style={{ marginRight: '1em' }}>
                        Blog
                    </Link>
                    <button
                        onClick={() =>
                            setTheme(theme === 'standard' ? 'dark' : 'standard')
                        }
                        aria-label="Theme icon"
                        className={classes.header__inner__right__btn_link}>
                        <span
                            className={`icon-${
                                theme === 'standard' ? 'dark' : 'light'
                            } ${classes.header__inner__right__link}`}
                            title="Change theme"
                        />
                    </button>
                    <Link
                        href="https://github.com/corelabui"
                        target="_blank"
                        icon="github"
                        className={classes.header__inner__right__link_github}
                        title="Github"
                    />
                    {showMenu && (
                        <div className={classes.header__inner__right__menuIcon}>
                            <HamburgerMenu open={open} setIsOpen={toggle} />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default CustomHeader;

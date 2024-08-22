import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Button from 'corelabui/Button';

import HamburgerMenu from '@/components/HamburgerMenu';
import ClientComponent from '@/components/ClientComponent';

import classes from './header.module.scss';
import Link from '../Link';
import { useRouter } from 'next/router';

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
    const { asPath } = useRouter();
    const isActive = (url: string) => {
        return asPath.startsWith(url);
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__inner}>
                <div className={classes.header__inner__left}>
                    <a
                        href="https://www.formfusion.dev"
                        title="Go to Landing page">
                        <span
                            className={`${classes.header__inner__left__logo_mobile} icon-formfusion-circle`}
                        />
                        <span
                            className={`${classes.header__inner__left__logo}`}>
                            FormFusion&nbsp;
                            <span
                                className={`${classes.header__inner__left__logo__version}`}>
                                v1.1.12
                            </span>
                        </span>
                    </a>
                </div>
                <div className={classes.header__inner__right}>
                    <Link
                        href="/docs"
                        className={`${
                            classes.header__inner__right__link_text
                        } ${
                            isActive('/docs')
                                ? classes.header__inner__right__link_text_active
                                : ''
                        }`}
                        title="Documentation">
                        Learn
                    </Link>
                    <Link
                        href="/blog"
                        className={`${
                            classes.header__inner__right__link_text
                        } ${
                            isActive('/blog')
                                ? classes.header__inner__right__link_text_active
                                : ''
                        }`}
                        title="Blog"
                        style={{ marginRight: '1em' }}>
                        Blog
                    </Link>
                    <Link
                        href="/blog"
                        className={`${
                            classes.header__inner__right__link_text
                        } ${
                            isActive('/playground')
                                ? classes.header__inner__right__link_text_active
                                : ''
                        }`}
                        title="Blog"
                        style={{ marginRight: '1em' }}>
                        Playground
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

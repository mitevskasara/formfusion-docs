import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Button from 'corelabui/Button';

import HamburgerMenu from '@/components/HamburgerMenu';
import Link from '@/components/Link';

import classes from './header.module.scss';

interface CustomHeaderProps {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const CustomHeader = ({ open, toggle, theme, setTheme }: CustomHeaderProps) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__left}>
                <Image
                    src={`/assets/logo/${theme}/logo.svg`}
                    width={150}
                    height={39}
                    alt="CoreLab UI logo"
                    className={classes.header__left__logo}
                />
                <Image
                    src={`/assets/logo/${theme}/logo-icon.svg`}
                    width={27}
                    height={39}
                    alt="CoreLab UI logo"
                    className={classes.header__left__logo_mobile}
                />
            </div>
            <div className={classes.header__right}>
                <Button
                    variant="text"
                    onClick={() =>
                        setTheme(theme === 'standard' ? 'dark' : 'standard')
                    }>
                    <span
                        className={`icon-${
                            theme === 'standard' ? 'dark' : 'light'
                        } ${classes.header__right__themeButton}`}
                    />
                </Button>
                <div className={classes.header__right__menuIcon}>
                    <HamburgerMenu open={open} setIsOpen={toggle} />
                </div>
            </div>
        </header>
    );
};

export default CustomHeader;

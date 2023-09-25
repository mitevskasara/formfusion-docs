import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import HamburgerMenu from '@/components/HamburgerMenu';

import classes from './header.module.scss';

interface HeaderProps {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ open, toggle }: HeaderProps) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__left}>
                <div className={classes.header__left__menuIcon}>
                    <HamburgerMenu open={open} setIsOpen={toggle} />
                </div>
                <Image
                    src="/assets/logo/winter/logo.svg"
                    width={150}
                    height={39}
                    alt="CoreLab UI logo"
                />
            </div>
            <div className={classes.header__right}>
                <a
                    href={`https://www.facebook.com/corelabui`}
                    target="_blank"
                    title="Share on Facebook">
                    <span className="icon-facebook" />
                </a>
                <a
                    href={`https://instagram.com/corelabui`}
                    target="_blank"
                    title="Share on whatsapp">
                    <span className="icon-instagram" />
                </a>
                <a
                    href={`https://www.linkedin.com/corelabui`}
                    target="_blank"
                    title="Share on Linkedin">
                    <span className="icon-linkedin" />
                </a>
                <a
                    href={`https://github.com/mitevskasara`}
                    target="_blank"
                    title="Share on Twitter">
                    <span className="icon-github" />
                </a>
            </div>
        </header>
    );
};

export default Header;

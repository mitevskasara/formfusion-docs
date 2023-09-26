import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import HamburgerMenu from '@/components/HamburgerMenu';
import Link from '@/components/Link';

import classes from './header.module.scss';

interface CustomHeaderProps {
    open: boolean;
    toggle: Dispatch<SetStateAction<boolean>>;
}

const CustomHeader = ({ open, toggle }: CustomHeaderProps) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__left}>
                <Image
                    src="/assets/logo/winter/logo.svg"
                    width={150}
                    height={39}
                    alt="CoreLab UI logo"
                    className={classes.header__left__logo}
                />
                <Image
                    src="/assets/logo/winter/logo-icon.svg"
                    width={27}
                    height={39}
                    alt="CoreLab UI logo"
                    className={classes.header__left__logo_mobile}
                />
            </div>
            <div className={classes.header__right}>
                <Link
                    href="https://www.facebook.com/corelabui"
                    target="_blank"
                    title="Share on Facebook"
                    icon="facebook"
                    className={classes.header__right__link}
                />
                <Link
                    href="https://instagram.com/corelabui"
                    target="_blank"
                    title="Share on whatsapp"
                    icon="instagram"
                    className={classes.header__right__link}
                />
                <Link
                    href="https://www.linkedin.com/corelabui"
                    target="_blank"
                    title="Share on Linkedin"
                    icon="linkedin"
                    className={classes.header__right__link}
                />
                <Link
                    href="https://github.com/mitevskasara"
                    target="_blank"
                    title="Share on Twitter"
                    icon="github"
                    className={classes.header__right__link}
                />
                <div className={classes.header__right__menuIcon}>
                    <HamburgerMenu open={open} setIsOpen={toggle} />
                </div>
            </div>
        </header>
    );
};

export default CustomHeader;

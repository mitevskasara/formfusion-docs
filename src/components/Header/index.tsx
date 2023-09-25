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
            </div>
        </header>
    );
};

export default CustomHeader;

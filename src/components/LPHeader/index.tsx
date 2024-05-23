import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './header.module.scss';

const LPHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__inner}>
                <div className={classes.header__inner__left}>
                    <span
                        className={`${classes.header__inner__left__logo} icon-formfusion-full`}
                    />
                    <span
                        className={`${classes.header__inner__left__logo_mobile} icon-formfusion`}
                    />
                </div>
                <div className={classes.header__inner__right}>
                    <div className={classes.header__inner__right__nav}>
                        <Link
                            href="/formfusion"
                            className={classes.header__inner__right__nav__link}>
                            Documentation
                        </Link>
                        <Link
                            href="#demo"
                            className={classes.header__inner__right__nav__link}>
                            Demo
                        </Link>
                        <Link
                            href="/blog"
                            className={classes.header__inner__right__nav__link}>
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default LPHeader;

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './header.module.scss';

const LPHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__inner}>
                <div className={classes.header__inner__left}>
                    <Image
                        src={`/assets/logo/logo-dark.png`}
                        width={150}
                        height={18.36}
                        alt="CoreLab UI logo"
                        className={classes.header__inner__left__logo}
                    />
                    <Image
                        src={`/assets/logo/logo-dark-mobile.png`}
                        width={35}
                        height={49.58}
                        alt="CoreLab UI logo"
                        className={classes.header__inner__left__logo_mobile}
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
                    </div>
                </div>
            </div>
        </header>
    );
};

export default LPHeader;

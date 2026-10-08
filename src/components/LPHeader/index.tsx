import Link from 'next/link';

import classes from './header.module.scss';

const LPHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__inner}>
                <div className={classes.header__inner__left}>
                    <span
                        className={`${classes.header__inner__left__logo_mobile} icon-formfusion-circle`}
                    />
                    <span className={`${classes.header__inner__left__logo}`}>
                        formfusion
                    </span>
                </div>
                <div className={classes.header__inner__right}>
                    <nav className={classes.header__inner__right__nav}>
                        <Link
                            href="/docs"
                            className={classes.header__inner__right__nav__link}>
                            Docs
                        </Link>
                        <Link
                            href="/playground"
                            className={classes.header__inner__right__nav__link}>
                            Playground
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default LPHeader;

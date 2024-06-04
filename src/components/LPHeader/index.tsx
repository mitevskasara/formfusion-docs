import Button from 'corelabui/Button';
import Link from 'next/link';

import classes from './header.module.scss';

const LPHeader = () => {
    const goTo = (link: string) => window?.open(link, '_self');
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
                    <nav className={classes.header__inner__right__nav}>
                        <Link
                            href="/formfusion"
                            className={classes.header__inner__right__nav__link}>
                            Documentation
                        </Link>
                        <Link
                            href="/blog"
                            className={classes.header__inner__right__nav__link}>
                            Blog
                        </Link>
                        <Button
                            size="small"
                            onClick={() => goTo('/formfusion')}>
                            Try it out
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default LPHeader;

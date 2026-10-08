import { Dispatch, SetStateAction } from 'react';

import classes from './hamburgerMenu.module.scss';

interface HamburgerMenuProps {
    open: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = ({ open, setIsOpen }: HamburgerMenuProps) => {
    return (
        <div
            className={`${classes.menu} ${open ? classes.menu_open : ''}`}
            onClick={() => setIsOpen(!open)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsOpen(!open);
            }}
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="hamburger-button-menu"
            id="hamburger-button-menu">
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
        </div>
    );
};

export default HamburgerMenu;

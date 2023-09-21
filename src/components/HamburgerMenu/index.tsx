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
            onClick={() => setIsOpen(!open)}>
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
        </div>
    );
};

export default HamburgerMenu;

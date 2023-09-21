import CUIHeader from 'corelabui/Header';
import Image from 'next/image';
import styles from './header.module.scss';
import headerItems from '@/constants/headerItems';

const Header = ({ theme }: { theme: string }) => {
    return (
        <CUIHeader
            logo={`/assets/logo/${theme}/logo.svg`}
            items={headerItems}
        />
    );
};

export default Header;

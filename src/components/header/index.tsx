import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <a href="/">
                <Image
                    src="/assets/logo.webp"
                    alt="logo.webp"
                    width={60}
                    height={29}
                />
            </a>
            <nav className={styles.header__nav_menu}>
                <Link href="/">Home</Link>
                <Link href="/templates">Templates</Link>
                <Link href="/posts">Archive</Link>
            </nav>
        </header>
    );
};

export default Header;

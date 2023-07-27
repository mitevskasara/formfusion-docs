import Link from 'next/link';
import Container from '@/components/Container';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__block}>
                    <span>
                        Copyright © 2023 SyntaxStream. All rights reserved.
                    </span>
                    <div className={styles.footer__block__social}>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            title="Facebook">
                            <span className="icon-facebook" />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            title="Instagram">
                            <span className="icon-instagram" />
                        </a>
                        <a
                            href="https://www.github.com"
                            target="_blank"
                            title="Github">
                            <span className="icon-github" />
                        </a>
                        <a href="mailto:ssmitevska@gmail.com" title="E-mail">
                            <span className="icon-gmail" />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            title="LinkedIn">
                            <span className="icon-linkedin" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

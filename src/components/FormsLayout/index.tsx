import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import LeftSidebar from '@/components/LeftSidebar';
import PageLayout from '@/components/Layout';
import HamburgerMenu from '@/components/HamburgerMenu';
import classes from './layout.module.scss';

type Props = {
    children?: ReactNode;
};

const FormsLayout = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <PageLayout>
            <header className={classes.header}>
                <div className={classes.header__left}>
                    <div className={classes.header__left__menuIcon}>
                        <HamburgerMenu open={isOpen} setIsOpen={setIsOpen} />
                    </div>
                    <Image
                        src="/assets/logo/winter/logo.svg"
                        width={150}
                        height={39}
                        alt="CoreLab UI logo"
                    />
                </div>
                <div className={classes.header__right}>
                    <a
                        href={`https://www.facebook.com/corelabui`}
                        target="_blank"
                        title="Share on Facebook">
                        <span className="icon-facebook" />
                    </a>
                    <a
                        href={`https://instagram.com/corelabui`}
                        target="_blank"
                        title="Share on whatsapp">
                        <span className="icon-instagram" />
                    </a>
                    <a
                        href={`https://www.linkedin.com/corelabui`}
                        target="_blank"
                        title="Share on Linkedin">
                        <span className="icon-linkedin" />
                    </a>
                    <a
                        href={`https://github.com/mitevskasara`}
                        target="_blank"
                        title="Share on Twitter">
                        <span className="icon-github" />
                    </a>
                </div>
            </header>
            <div className={classes.container}>
                <LeftSidebar open={isOpen} toggle={setIsOpen} />
                <main className={classes.main}>{children}</main>
            </div>
        </PageLayout>
    );
};

export default FormsLayout;

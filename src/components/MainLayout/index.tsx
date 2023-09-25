import React, { ReactNode, useState } from 'react';

import LeftSidebar from '../LeftSidebar';
import Layout from '../PageLayout';
import Header from '../Header';

import classes from './main.module.scss';

type Props = {
    children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <Layout>
            <Header open={isOpen} toggle={setIsOpen} />
            <div className={classes.container}>
                <LeftSidebar open={isOpen} toggle={setIsOpen} />
                <main className={classes.main}>{children}</main>
            </div>
        </Layout>
    );
};

export default MainLayout;

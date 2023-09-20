import React, { ReactNode } from 'react';
import Header from 'corelabui/Header';
import headerItems from '@/constants/headerItems';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import styles from './layout.module.scss';

type Props = {
    children?: ReactNode;
    theme?: any;
    title?: string;
    description?: string;
    image?: string;
    keywords?: string;
    url?: string;
};

const PageLayout = ({ children, theme, ...rest }: Props) => {
    return (
        <Layout {...rest}>
            <div className={styles.layout}>
                <Header
                    logo={`/assets/logo/${
                        theme === 'custom' ? 'default' : theme
                    }/logo.svg`}
                    items={headerItems}
                    classes={{
                        root: styles.layout__header,
                        inner: styles.layout__header__inner
                    }}
                    maxWidth="1200px"
                    spacing="0px"
                />
                <Container>{children}</Container>
            </div>
        </Layout>
    );
};

export default PageLayout;

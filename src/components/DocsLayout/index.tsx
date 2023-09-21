import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from 'corelabui/Header';
import Navigation from 'corelabui/Navigation';
import Flex, { FlexItem } from 'corelabui/Flex';
import TableOfContents from 'corelabui/TableOfContents';
import headerItems from '@/constants/headerItems';
import navigationItems from '@/constants/navigationItems';
import PageLayout from '@/components/PageLayout';
import Container from '../Container';
import styles from './layout.module.scss';

type Props = {
    children?: ReactNode;
    tableOfContents: any[];
    theme?: any;
};

const DocsLayout = ({ children, theme, tableOfContents }: Props) => {
    const router = useRouter();
    const { pathname } = router;
    return (
        <PageLayout>
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
                <Container>
                    <Flex
                        padding="5em 0px"
                        margin="auto"
                        gap={5}
                        className={styles.layout__main}>
                        <FlexItem flex="2">
                            <div className={styles.layout__left}>
                                <Navigation
                                    items={navigationItems(pathname)}
                                    margin="0.3em 0px"
                                    width="250px"
                                />
                            </div>
                        </FlexItem>
                        <FlexItem pt="2em" margin="0px" flex="9">
                            {children}
                        </FlexItem>
                        <FlexItem pt="0px" flex="1">
                            <div className={styles.layout__right}>
                                {tableOfContents.length > 0 && (
                                    <TableOfContents
                                        title="On this page"
                                        items={tableOfContents}
                                    />
                                )}
                            </div>
                        </FlexItem>
                    </Flex>
                </Container>
            </div>
        </PageLayout>
    );
};

export default DocsLayout;

import { useState } from 'react';
import { useRouter } from 'next/router';
import DocsLayout from '@/components/DocsLayout';
import Typography from '@corelabui/classic/Typography';
import Grid, { GridItem } from '@corelabui/classic/Grid';
import Card from '@corelabui/classic/Card';
import navigationItems from '@/constants/navigationItems';
import { COMPONENTS } from '@/constants/tableOfContents';
import styles from './components.module.scss';

const Components = ({ theme }: any) => {
    const { pathname } = useRouter();
    const [code, setCode] = useState<any>('');
    const [buttonProps, setButtonProps] = useState({
        variant: 'primary',
        loading: false,
        size: 'medium',
        disabled: false,
        title: '',
        width: 'fit-content'
    });

    return (
        <DocsLayout
            theme={theme}
            tableOfContents={COMPONENTS(pathname.split('#')[1])}>
            <Typography variant="heading6" htmlElement="h3">
                Components
            </Typography>
            <Typography variant="body1">
                Core Lab UI provides a variety of prebuilt components. Below,
                you'll find an overview of the available components:
            </Typography>
            <br />
            {navigationItems(pathname).map(
                (item, key) =>
                    key > 0 && (
                        <div
                            id={item.title.toLowerCase()}
                            className={styles.section}>
                            <Typography variant="subtitle1" htmlElement="h3">
                                {item.title}
                            </Typography>
                            <Grid rowGap={4} columnGap={2.5}>
                                {item.items.map((subitem, key) => (
                                    <GridItem col={4} md={4} xs={12}>
                                        <Card
                                            key={key}
                                            title={subitem.title}
                                            action={{
                                                title: 'Code',
                                                onClick: () => alert()
                                            }}
                                            image={`/assets/components/${subitem.title.toLowerCase()}.png`}
                                            clickable
                                        />
                                    </GridItem>
                                ))}
                            </Grid>
                        </div>
                    )
            )}
        </DocsLayout>
    );
};

export default Components;

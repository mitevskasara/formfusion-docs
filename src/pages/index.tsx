import PageLayout from '@/components/PageLayout';
import styles from '@/components/layout/layout.module.scss';

const Index = ({ theme }: any) => {
    return (
        <PageLayout theme={theme}>
            <h1 className={styles.title_hidden}>Core Lab UI</h1>
        </PageLayout>
    );
};

export default Index;

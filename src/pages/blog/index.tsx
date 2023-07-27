import { GetServerSideProps } from 'next';
import PageLayout from '@/components/PageLayout';
import List from '@/components/List';
import { API_KEY, API_URL } from '@/constants/api';
import styles from '@/components/layout/layout.module.scss';

type Props = {
    items: Post[];
    theme: any;
};

const Blog = ({ items, theme }: Props) => (
    <PageLayout theme={theme}>
        <h1 className={styles.title_hidden}>Syntax Stream</h1>
        <div className={styles.container}>
            <div className={styles.container_featured}>
                <List items={items?.slice(0, 3)} featured />
                <List
                    items={items?.slice(3, items?.length)}
                    title="Read more"
                />
            </div>
        </div>
    </PageLayout>
);

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
    const response = await fetch(
        `${API_URL}?key=${API_KEY}&fetchImages=true&maxResults=50`
    );
    const jsonData = await response.json();

    return { props: { items: jsonData?.items }, revalidate: 10 };
};

export default Blog;

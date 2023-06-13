import { GetServerSideProps } from 'next';
import Layout from '@/components/layout';
import List from '@/components/list';
import { API_KEY, API_URL } from '@/constants/api';
import styles from '@/components/layout/layout.module.scss';

type Props = {
    items: Post[];
};

const PostsPage = ({ items }: Props) => (
    <Layout>
        <div className={styles.container}>
            <List items={items} />
        </div>
    </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(`${API_URL}?key=${API_KEY}&fetchImages=true&maxResults=50`);
    const jsonData = await response.json();

    return { props: { items: jsonData?.items } };
};

export default PostsPage;

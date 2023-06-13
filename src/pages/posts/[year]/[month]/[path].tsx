import { GetServerSideProps } from 'next';
import Layout from '@/components/layout';
import Details from '@/components/details';
import List from '@/components/list';
import { API_KEY, API_URL, DOMAIN } from '@/constants/api';
import { decode } from '@/utils/general';
import styles from '@/components/layout/layout.module.scss';

type Props = {
    data?: Post & any;
    errors?: string;
    other: Post[];
};

const DetailsPage = ({ data, other }: Props) => {
    const image = data?.images ? data.images[0]?.url : '';
    let plainText = data?.content?.replace(/<[^>]+>/g, '');
    return (
        <Layout
            title={`${data ? data.title : ''} | OurLife`}
            description={plainText?.slice(0, 320)}
            image={image}
            keywords={data.labels?.join(',')}
            url={`${DOMAIN}/posts/${data.id}`}>
            <div className={styles.container}>
                <Details data={data} />
                <List
                    items={other}
                    title="Similar posts"
                    seeMore
                />{' '}
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({
    params
}: any) => {
    const path = decode(params.path);
    const detailsResponse = await fetch(
        `${API_URL}/bypath?path=/${params.year}/${params.month}/${path}&key=${API_KEY}&fetchImages=true`
    );

    const details = await detailsResponse.json();

    const allPostsResponse = await fetch(
        `${API_URL}?key=${API_KEY}&fetchImages=true&maxResults=2`
    );
    const allPosts = await allPostsResponse.json();

    return { props: { data: details, other: allPosts?.items } };
};

export default DetailsPage;

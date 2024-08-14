import { Dispatch, SetStateAction } from 'react';
import { GetServerSideProps } from 'next';
import BlogLayout from '@/components/BlogLayout';
import NewsletterPostDetails from '@/components/NewsletterPostDetails';
import { API_KEY, API_URL } from '@/constants/api';
import { decode, encode } from '@/utils/general';

type Props = {
    data?: any;
    errors?: string;
    other: any[];
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

const DetailsPage = ({ data, other, theme, setTheme }: Props) => {
    const image = data?.images ? data?.images[0]?.url : '';
    let plainText = data ? data.content?.replace(/<[^>]+>/g, '').trim() : '';
    const path = data ? encode(new URL(data.url).pathname) : '';

    return data ? (
        <BlogLayout
            {...{
                url: `https://www.corelabui.com${path}`,
                title: data?.title,
                image: image,
                description: plainText.slice(0, 300),
                keywords:
                    'blog, react blog, javascript blog, react,react form,forms, validation,react hook, form validation, javascript, javascript form',
                canonical: `https://www.corelabui.com${path}`
            }}
            theme={theme}
            setTheme={setTheme}
            sidebar={false}>
            <NewsletterPostDetails data={data} other={other} />
        </BlogLayout>
    ) : null;
};

export async function getStaticPaths() {
    const paths: { params: { year: string; month: string; path: string } }[] =
        [];
    const response = await fetch(
        `${API_URL}?key=${API_KEY}&fetchImages=true&maxResults=50`
    );

    const jsonData = await response.json();
    jsonData.items.forEach((post: any) => {
        const path = encode(new URL(post.url).pathname);
        const params = path.split('/');
        paths.push({
            params: { year: params[1], month: params[2], path: params[3] }
        });
    });
    return {
        paths,
        fallback: true
    };
}

export async function getStaticProps({ params }: any) {
    try {
        const path = decode(params.path);
        const detailsResponse = await fetch(
            `${API_URL}/bypath?path=/${params.year}/${params.month}/${path}&key=${API_KEY}&fetchImages=true`
        );
        const details = await detailsResponse.json();

        const allPostsResponse = await fetch(
            `${API_URL}?key=${API_KEY}&fetchImages=true&maxResults=5`
        );
        const allPosts = await allPostsResponse.json();
        return {
            props: {
                data: details,
                other: allPosts?.items
            }
        };
    } catch (err) {
        console.log(`Error fetching data for post ${params.path}`, err);

        return {
            notFound: true
        };
    }
}

export default DetailsPage;

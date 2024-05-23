import { Dispatch, SetStateAction } from 'react';
import { GetServerSideProps } from 'next';
import BlogLayout from '@/components/BlogLayout';
import NewsletterPostDetails from '@/components/NewsletterPostDetails';
import { API_KEY, API_URL } from '@/constants/api';
import { decode } from '@/utils/general';
import ROUTES from '@/constants/routes';

type Props = {
    data?: any;
    errors?: string;
    other: any[];
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};

const DetailsPage = ({ data, other, theme, setTheme }: Props) => {
    const image = data?.images ? data.images[0]?.url : '';
    let plainText = data?.content?.replace(/<[^>]+>/g, '');
    return (
        <BlogLayout
            {...{
                url: `https://www.corelabui.com/${ROUTES.blog}`,
                title: 'FormFusion: Easy form handling, validation & more',
                image: '/assets/meta-image.png',
                description:
                    'Easily manage and validate forms in your React applications with the FormFusion library. This library provides an efficient solution for handling forms with built-in validation, input masking, full accessibility and completely customizable look simplifying the development process and improving user experience.',
                keywords:
                    'blog, react blog, javascript blog, react,react form,forms, validation,react hook, form validation, javascript, javascript form',
                canonical: 'https://www.corelabui.com/formfusion'
            }}
            theme={theme}
            setTheme={setTheme}
            sidebar={false}>
            <NewsletterPostDetails data={data} other={other} />
        </BlogLayout>
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
        `${API_URL}?key=${API_KEY}&fetchImages=true&maxResults=5`
    );
    const allPosts = await allPostsResponse.json();

    return { props: { data: details, other: allPosts?.items } };
};

export default DetailsPage;

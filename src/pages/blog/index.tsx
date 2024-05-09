import { Dispatch, SetStateAction } from 'react';
import { GetServerSideProps } from 'next';
import ROUTES from '@/constants/routes';
import { API_KEY, API_URL } from '@/constants/api';
import Newsletter from '@/components/Newsletter';
import BlogLayout from '@/components/BlogLayout';

interface IBlogProps {
    posts: any;
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const Blog = ({ posts, theme, setTheme }: IBlogProps) => {
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
            <Newsletter posts={posts} />
        </BlogLayout>
    );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch(
        `${API_URL}?key=${API_KEY}&fetchImages=true&maxResults=50`
    );
    const jsonData = await response.json();

    return { props: { posts: jsonData?.items } };
};

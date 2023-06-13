interface Post {
    id: number;
    published: string;
    title: string;
    content: string;
    url: string;
    selfLink: string;
    labels?: string[];
    images?: { url: string }[];
    image?: any;
    desc?: string;
}

type Props = {
    data: Post;
    image?: string;
    featured?: boolean;
    posts?: Post[];
};

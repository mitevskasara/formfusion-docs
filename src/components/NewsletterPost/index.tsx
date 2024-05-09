import Image from 'next/image';
import Typography from 'corelabui/Typography';
import classes from './newsletterPost.module.scss';
import Link from 'next/link';
import { encode } from '@/utils/general';
import ROUTES from '@/constants/routes';

interface INewsletterPostProps {
    post: any;
    mode?: 'featured' | 'latest' | 'other';
}

const NewsletterPost = ({ post, mode = 'other' }: INewsletterPostProps) => {
    const description = post?.content?.replace(/<[^>]+>|\n/g, '');
    const path = encode(new URL(post.url).pathname);

    return (
        <Link
            href={`/${ROUTES.blog}/[year]/[month]/[path]`}
            as={`/${ROUTES.blog}${path}`}
            className={classes.link}>
            <div className={`${classes.post} ${classes['post_' + mode]}`}>
                <Typography
                    variant="heading5"
                    htmlElement="h2"
                    className={classes.post__title}
                    lines={3}
                    overflow="ellipsis">
                    {post.title}
                </Typography>
                <Typography
                    variant="body1"
                    htmlElement="p"
                    className={classes.post__desc}
                    lines={3}
                    overflow="ellipsis">
                    {description}
                </Typography>
                <div className={classes.post__tags}>
                    {post.labels?.map((label: string, key: number) => (
                        <span key={key} className={classes.post__tags__tag}>
                            {label}
                        </span>
                    ))}
                </div>
                <div className={classes.post__image}>
                    <Image
                        src={post.images[0]?.url}
                        alt={post.images[0]?.url}
                        fill
                        objectFit="cover"
                    />
                </div>
            </div>
        </Link>
    );
};

export default NewsletterPost;

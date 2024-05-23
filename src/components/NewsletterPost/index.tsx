import Image from 'next/image';
import Typography from 'corelabui/Typography';
import classes from './newsletterPost.module.scss';
import Link from 'next/link';
import { encode } from '@/utils/general';
import ROUTES from '@/constants/routes';
import { formatDate } from '@/utils/dateFormat';
import ClientComponent from '../ClientComponent';

interface INewsletterPostProps {
    post: any;
    mode?: 'featured' | 'latest' | 'other';
    showStats?: boolean;
}

const NewsletterPost = ({
    post,
    mode = 'other',
    showStats = true
}: INewsletterPostProps) => {
    const description = post?.content?.replace(/<[^>]+>|\n/g, '');
    const path = encode(new URL(post.url).pathname);

    return (
        <div className={`${classes.post} ${classes['post_' + mode]}`}>
            <div className={classes.post__image}>
                <Image
                    src={post.images[0]?.url}
                    alt={post.images[0]?.url}
                    fill
                    objectFit="cover"
                />
            </div>
            <div className={classes.post__right}>
                {mode === 'featured' && (
                    <p className={classes.post__tag}>
                        {post.labels && post.labels[0]}
                        <span className={classes.post__tag__border} />
                    </p>
                )}
                {mode === 'featured' && (
                    <p className={classes.post__date}>
                        Published &mdash; &nbsp;{formatDate(post.published)}
                    </p>
                )}
                <Link
                    href={`/${ROUTES.blog}/[year]/[month]/[path]`}
                    as={`/${ROUTES.blog}${path}`}
                    className={classes.link}>
                    <Typography
                        variant={mode === 'featured' ? 'heading4' : 'heading5'}
                        htmlElement={mode === 'featured' ? 'h1' : 'h2'}
                        className={classes.post__title}
                        lines={2}
                        overflow="ellipsis">
                        {post.title}
                    </Typography>
                </Link>
                {mode !== 'featured' && (
                    <p className={classes.post__tag_small}>
                        <i>&mdash; {post.labels && post.labels[0]}</i>
                    </p>
                )}
                <Typography
                    variant="body1"
                    htmlElement="p"
                    className={classes.post__desc}
                    lines={3}
                    overflow="ellipsis">
                    {description}
                </Typography>
                {mode !== 'featured' && showStats && (
                    <div className={classes.post__analytics}>
                        <ClientComponent>
                            <span className={classes.post__analytics__item}>
                                <span className="icon-spark" />
                                {Math.floor(Math.random() * 376)}
                            </span>
                        </ClientComponent>
                        <ClientComponent>
                            <span className={classes.post__analytics__item}>
                                <span className="icon-comments" />
                                {post.replies.totalItems}
                            </span>
                        </ClientComponent>
                        <ClientComponent>
                            <span className={classes.post__analytics__item}>
                                <span className="icon-bar-graph" />
                                {Math.floor(Math.random() * 376)}
                            </span>
                        </ClientComponent>
                        <Link
                            href={`/${ROUTES.blog}/[year]/[month]/[path]`}
                            as={`/${ROUTES.blog}${path}`}
                            className={classes.post__analytics__linkButton}>
                            <span className="icon-arrow-down-right" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsletterPost;

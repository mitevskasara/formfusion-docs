import NewsletterPost from '../NewsletterPost';
import classes from './newsletter.module.scss';

interface INewsletterProps {
    posts: any;
}

const Newsletter = ({ posts = [] }: INewsletterProps) => (
    <>
        <div className={classes.grid__item_featured}>
            <NewsletterPost post={posts[0]} mode="featured" />
        </div>
        <h1 className={classes.title}>Latest posts</h1>
        <div className={classes.grid}>
            {posts.slice(1, posts.length).map((post: any, key: number) => (
                <div key={key} className={classes.grid__item}>
                    <NewsletterPost post={post} mode="other" />
                </div>
            ))}
        </div>
    </>
);

export default Newsletter;

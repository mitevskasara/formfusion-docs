import NewsletterPost from '../NewsletterPost';
import classes from './newsletter.module.scss';

interface INewsletterProps {
    posts: any;
}

const Newsletter = ({ posts = [] }: INewsletterProps) => (
    <>
        <div className={classes.grid_featured}>
            {posts.slice(0, 4).map((post: any, key: number) => (
                <div
                    key={key}
                    className={`${classes.grid__item} ${
                        key === 0
                            ? classes.grid__item_featured
                            : classes.grid__item_latest
                    }`}>
                    <NewsletterPost
                        post={post}
                        mode={key === 0 ? 'featured' : 'latest'}
                    />
                </div>
            ))}
        </div>
        <h1 className={classes.title}>
            <span>Explore more</span>
            <hr className={classes.title__divider} />
        </h1>
        <div className={classes.grid}>
            {posts.slice(4, posts.length).map((post: any, key: number) => (
                <div key={key} className={classes.grid__item}>
                    <NewsletterPost post={post} mode="other" />
                </div>
            ))}
        </div>
    </>
);

export default Newsletter;

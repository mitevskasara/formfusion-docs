import Typography from 'corelabui/Typography';
import { formatDate } from '@/utils/dateFormat';
import classes from './newsletterPostDetails.module.scss';
import Prism from 'prismjs';
import { useEffect } from 'react';
import Image from 'next/image';
import { CPM } from '@/constants/general';
import { copy, encode, extractFirstImage } from '@/utils/general';
import Link from 'next/link';
import ROUTES from '@/constants/routes';
import { useRouter } from 'next/router';
import { DOMAIN } from '@/constants/api';
import NewsletterPost from '../NewsletterPost';

interface INewsletterPostDetailsProps {
    data: any;
    other: any;
}

const postUrl = (url: string) => encode(new URL(url).pathname);

const NewsletterPostDetails = ({
    data,
    other
}: INewsletterPostDetailsProps) => {
    const router = useRouter();
    const description = data?.content?.replace(/<[^>]+>|\n/g, '');
    const url = DOMAIN + router.asPath;

    useEffect(() => {
        Prism.highlightAll();
    }, [data]);

    return (
        <>
            <div className={classes.header}>
                <div className={classes.header__inner}>
                    <div className={classes.header__left}>
                        <nav className={classes.breadcrumbs}>
                            <Link href={`/${ROUTES.blog}`}>Blog</Link>
                            <span className={classes.breadcrumbs__divider}>
                                &#8226;
                            </span>
                            <Typography
                                variant="caption"
                                htmlElement="p"
                                margin={false}>
                                {data.labels[0]}
                            </Typography>
                        </nav>
                        <Typography
                            variant="heading3"
                            htmlElement="h1"
                            className={classes.title}>
                            {data.title}
                        </Typography>
                        <div className={classes.author}>
                            <Image
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKdmd-NHmw9_XuY8tKXYDiBwBUeJVopbBp1KnxhMdr6VT_qdBYtpSRN1cBRAcRNIBTQrzp0l0Uy5oTWa_Sd27WmetvZsY_irasKHYKsA7y_RbFWiiKUCTfDOVqS8GDOznNgmgjlG0FzK_kmqqa76jGxThGMEE5UYlIbHPWR-LulrvVyg/s220/IMG_8618.webp"
                                alt={data.author.image}
                                width={35}
                                height={35}
                                className={classes.author__image}
                            />
                            <div>
                                <Typography
                                    variant="caption"
                                    htmlElement="span"
                                    margin={false}>
                                    {data.author.displayName}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    htmlElement="span"
                                    margin={false}
                                    className={classes.author__date_mobile}>
                                    {formatDate(data.published)}
                                </Typography>
                            </div>
                            <span className={classes.author__divider}>
                                &#8226;
                            </span>
                            <Typography
                                variant="caption"
                                htmlElement="span"
                                margin={false}
                                className={classes.author__date}>
                                {formatDate(data.published)}
                            </Typography>
                            <span className={classes.author__divider}>
                                &#8226;
                            </span>
                            <Typography
                                variant="caption"
                                htmlElement="span"
                                margin={false}
                                className={classes.author__reading_time}>
                                <span className="icon-timer" />{' '}
                                {Math.floor(description.length / CPM)} minutes
                                read
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.header__right}>
                        <Image
                            src={data.image}
                            alt={data.image}
                            fill
                            sizes="100"
                        />
                    </div>
                </div>
            </div>
            <div className={classes.details__outter}>
                <Typography variant="body1" htmlElement="div">
                    <div
                        className={classes.details}
                        dangerouslySetInnerHTML={{ __html: data.content }}
                    />
                </Typography>
                <br />
                <br />
                <div className={classes.details__outter__social}>
                    <div className={classes.details__outter__social__icons}>
                        <Link
                            href={`https://www.linkedin.com/sharing/share-offsite/?${url}`}
                            target="_blank"
                            title="Share on LinkedIn"
                            rel="nofollow">
                            <span className="icon-social-linkedin" />
                        </Link>
                        <Link
                            href={`https://www.facebook.com/sharer.php?u=${url}&p[title]=${data.title}`}
                            target="_blank"
                            title="Share on Facebook"
                            rel="nofollow">
                            <span className="icon-social-facebook" />
                        </Link>
                        <Link
                            href={`https://twitter.com/intent/tweet?url=${url}`}
                            target="_blank"
                            title="Share on Twitter">
                            <span className="icon-twitter" />
                        </Link>
                        <Link
                            href={`http://pinterest.com/pin/create/button/?url=${url}`}
                            target="_blank"
                            title="Share on Pinterest"
                            rel="nofollow">
                            <span className="icon-social-pinterest" />
                        </Link>
                        <button
                            className={
                                classes.details__outter__social__icons__link
                            }
                            onClick={() => copy(url)}
                            title="Copy to clipboard">
                            <span className="icon-link" />
                        </button>
                    </div>
                </div>
                <br />
                <br />
                <div className={classes.details__outter__suggested}>
                    {other
                        .filter((p: any) => p.id !== data.id)
                        .splice(0, 3)
                        .map((post: any, key: number) => (
                            <div
                                key={key}
                                className={
                                    classes.details__outter__suggested__item
                                }>
                                <NewsletterPost post={post} mode="other" />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default NewsletterPostDetails;

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
    const image = extractFirstImage(data?.content);
    const url = DOMAIN + router.asPath;

    useEffect(() => {
        Prism.highlightAll();
    }, [data]);

    return (
        <>
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
                        color="var(--text-secondary)"
                        margin={false}
                        className={classes.author__date_mobile}>
                        {formatDate(data.published)}
                    </Typography>
                </div>
                <div className={classes.author__divider} />
                <Typography
                    variant="caption"
                    htmlElement="span"
                    color="var(--text-secondary)"
                    margin={false}
                    className={classes.author__date}>
                    {formatDate(data.published)}
                </Typography>
                <div className={classes.author__divider} />
                <Typography
                    variant="caption"
                    htmlElement="span"
                    color="var(--text-secondary)"
                    margin={false}
                    className={classes.author__reading_time}>
                    <span className="icon-timer" />{' '}
                    {Math.floor(description.length / CPM)} minutes read
                </Typography>
            </div>
            <div className={classes.mainImage}>
                {image && (
                    <Image
                        src={image}
                        alt={image}
                        fill
                        className={classes.mainImage__img}
                    />
                )}
            </div>
            <div className={classes.details__outter}>
                <div className={classes.details__outter__left}>
                    <Typography variant="body1" htmlElement="div">
                        <div
                            className={classes.details}
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                    </Typography>
                    <div className={classes.details__outter__left__social}>
                        <Typography
                            variant="body1"
                            htmlElement="span"
                            color="var(--title)"
                            margin={false}>
                            Share this article
                        </Typography>
                        <div
                            className={
                                classes.details__outter__left__social__icons
                            }>
                            <Link
                                href={`https://www.linkedin.com/shareArticle?url=${url}`}
                                target="_blank"
                                title="Share on LinkedIn">
                                <span
                                    className={`${classes.details__outter__left__social__icons__linkedin} icon-linkedin-circle`}
                                />
                            </Link>
                            <Link
                                href={`https://twitter.com/intent/tweet?url=${url}`}
                                target="_blank"
                                title="Share on Twitter"
                                className={
                                    classes.details__outter__left__social__icons__twitter
                                }>
                                <span className="icon-twitter" />
                            </Link>
                            <Link
                                href={`https://www.facebook.com/sharer.php?u=${url}&p[title]=${data.title}`}
                                target="_blank"
                                title="Share on Facebook">
                                <span
                                    className={`${classes.details__outter__left__social__icons__linkedin} icon-facebook-circle`}
                                />
                            </Link>
                            <Link
                                href={`http://pinterest.com/pin/create/button/?url=${url}`}
                                target="_blank"
                                title="Share on Pinterest">
                                <span
                                    className={`${classes.details__outter__left__social__icons__pinterest} icon-pinterest`}
                                />
                            </Link>
                            <button
                                className={
                                    classes.details__outter__left__social__icons__link
                                }
                                onClick={() => copy(url)}
                                title="Copy to clipboard">
                                <span className="icon-link" />
                            </button>
                        </div>
                    </div>
                    <div className={classes.details__outter__right__category}>
                        <Link href={`/${ROUTES.blog}`}>
                            <div
                                className={
                                    classes.details__outter__right__category__inner
                                }>
                                <Typography
                                    variant="body1"
                                    color="var(--surface)"
                                    margin={false}
                                    align="center"
                                    className={
                                        classes.details__outter__right__category__inner__text
                                    }>
                                    {data.labels[0]}
                                </Typography>
                            </div>
                        </Link>
                    </div>
                    <div className={classes.details__outter__left__suggested}>
                        <Link
                            href={`/${ROUTES.blog}/[year]/[month]/[path]`}
                            as={`/${ROUTES.blog}${postUrl(
                                other && other[0] && other[0].url
                            )}`}
                            className={
                                classes.details__outter__left__suggested__prev
                            }>
                            <Typography
                                variant="caption"
                                htmlElement="span"
                                color="var(--surface)">
                                <span className="icon-arrow-left" />
                                PREVIOUS POST
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                color="var(--surface)">
                                {other && other[0] && other[0].title}
                            </Typography>
                        </Link>
                        <Link
                            href={`/${ROUTES.blog}/[year]/[month]/[path]`}
                            as={`/${ROUTES.blog}${postUrl(
                                other && other[1] && other[1].url
                            )}`}
                            className={
                                classes.details__outter__left__suggested__next
                            }>
                            <Typography
                                variant="caption"
                                htmlElement="span"
                                align="right"
                                color="var(--surface)">
                                NEXT POST
                                <span className="icon-arrow-right" />
                            </Typography>
                            <Typography
                                variant="body1"
                                htmlElement="p"
                                align="right"
                                color="var(--surface)">
                                {other && other[1] && other[1].title}
                            </Typography>
                        </Link>
                    </div>
                </div>
                <div className={classes.details__outter__right}>
                    <div className={classes.details__outter__right__socials}>
                        <Typography variant="heading6" htmlElement="span">
                            Share this post
                        </Typography>
                        <div
                            className={
                                classes.details__outter__right__socials__icons
                            }>
                            <Link
                                href={`https://www.linkedin.com/shareArticle?url=${url}`}
                                target="_blank"
                                title="Share on LinkedIn">
                                <span
                                    className={`${classes.details__outter__right__socials__icons__linkedin} icon-linkedin-circle`}
                                />
                            </Link>
                            <Link
                                href={`https://twitter.com/intent/tweet?url=${url}`}
                                target="_blank"
                                title="Share on Twitter"
                                className={
                                    classes.details__outter__right__socials__icons__twitter
                                }>
                                <span className="icon-twitter" />
                            </Link>
                            <Link
                                href={`https://www.facebook.com/sharer.php?u=${url}&p[title]=${data.title}`}
                                target="_blank"
                                title="Share on Facebook">
                                <span
                                    className={`${classes.details__outter__right__socials__icons__linkedin} icon-facebook-circle`}
                                />
                            </Link>
                            <Link
                                href={`http://pinterest.com/pin/create/button/?url=${url}`}
                                target="_blank"
                                title="Share on Pinterest">
                                <span
                                    className={`${classes.details__outter__right__socials__icons__pinterest} icon-pinterest`}
                                />
                            </Link>
                            <button
                                className={
                                    classes.details__outter__right__socials__icons__link
                                }
                                onClick={() => copy(url)}
                                title="Copy to clipboard">
                                <span className="icon-link" />
                            </button>
                        </div>
                    </div>
                    <div className={classes.details__outter__right__category}>
                        <Typography variant="heading6" htmlElement="span">
                            Category
                        </Typography>
                        <Link href={`/${ROUTES.blog}`}>
                            <div
                                className={
                                    classes.details__outter__right__category__inner
                                }>
                                <Typography
                                    variant="body1"
                                    color="var(--surface)"
                                    margin={false}
                                    align="center"
                                    className={
                                        classes.details__outter__right__category__inner__text
                                    }>
                                    {data.labels[0]}
                                </Typography>
                            </div>
                        </Link>
                    </div>
                    <div className={classes.details__outter__right__similar}>
                        <Typography variant="heading6" htmlElement="span">
                            Similar
                        </Typography>
                        {other
                            ?.filter((o: any) => o.id != data.id)
                            .map((post: any) => (
                                <Link
                                    href={`/${ROUTES.blog}/[year]/[month]/[path]`}
                                    as={`/${ROUTES.blog}${postUrl(post.url)}`}
                                    key={post.id}>
                                    <div
                                        className={
                                            classes.details__outter__right__similar__post
                                        }>
                                        <Image
                                            src={post.images[0].url}
                                            alt={post.images[0].url}
                                            className={
                                                classes.details__outter__right__similar__post__img
                                            }
                                            width={65}
                                            height={65}
                                            objectFit="cover"
                                        />
                                        <div>
                                            <Typography
                                                variant="caption"
                                                htmlElement="span"
                                                lines={2}
                                                overflow="ellipsis"
                                                className={
                                                    classes.details__outter__right__similar__post__title
                                                }>
                                                {post.title}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                htmlElement="span"
                                                color="var(--text-secondary)"
                                                className={
                                                    classes.details__outter__right__similar__post__date
                                                }>
                                                {formatDate(data.published)}
                                            </Typography>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsletterPostDetails;

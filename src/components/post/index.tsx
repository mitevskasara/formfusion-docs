import React from 'react';
import Link from 'next/link';
import Tag from '@/components/tag';
import { formatDate } from '@/utils/date-format';
import { encode } from '@/utils/general';
import styles from './post.module.scss';
import Image from 'next/image';

const Post = ({ data, featured = false }: Props) => {
    const image = data?.images ? data.images[0]?.url : '';
    const description = data?.content?.replace(/<[^>]+>/g, '');
    const path = encode(new URL(data.url).pathname);

    return (
        <Link
            href="/posts/[year]/[month]/[path]"
            as={`/posts${path}`}
            className={styles.link}>
            <div className={styles.container}>
                <Image
                    alt="image"
                    className={
                        featured
                            ? styles.container__image_featured
                            : styles.container__image
                    }
                    src={image}
                    loading={featured ? 'eager' : 'lazy'}
                    width={260}
                    height={420}
                />
                <div className={styles.container__content}>
                    <span className={styles.container__content__date}>
                        {formatDate(data.published)}
                    </span>
                    <h2 className={styles.container__content__title}>
                        {data.title}
                    </h2>
                    <h3
                        className={
                            featured
                                ? styles.container__content__description_featured
                                : styles.container__content__description
                        }>
                        {description.slice(0, 300)}
                    </h3>
                    <div className={styles.container__content__tags}>
                        {data.labels?.slice(0, 2).map((label) => (
                            <Tag key={label} label={label.toLowerCase()} />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Post;

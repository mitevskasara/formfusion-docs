import React from 'react';
// import Tag from '@/components/tag';
import Share from '@/components/share';
import { DOMAIN } from '@/constants/api';
import { formatDate } from '@/utils/date-format';
import styles from './details.module.scss';

const Details = ({ data }: Props) => {
    const image = data?.images ? data.images[0]?.url : '';
    return (
        <div className={styles.container}>
            <p className={styles.container__date}>
                <span>Published</span>
                {formatDate(data.published)}
            </p>
            <h1 className={styles.container__title}>{data.title}</h1>
            {/* <div className={styles.container__tags}>
                {data.labels?.slice(0, 2).map((label) => (
                    <Tag key={label} label={label.toLowerCase()} />
                ))}
            </div> */}
            <p
                className={styles.container__content}
                dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <Share
                link={`${DOMAIN}/posts/${data.id}`}
                image={image}
                text={data.title}
            />
        </div>
    );
};

export default Details;

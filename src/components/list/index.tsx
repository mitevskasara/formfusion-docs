import Post from '@/components/Post';
import Container from '@/components/Container';
import styles from './list.module.scss';

const List = ({ items, title, seeMore = false, featured }: ListProps) => {
    return (
        <Container>
            <div className={styles.actions}>
                {title && (
                    <span className={styles.actions__title}>{title}</span>
                )}
                {seeMore && (
                    <a href="/" className={styles.actions__button}>
                        Read more
                        <span className="icon-arrow-right" />
                    </a>
                )}
            </div>
            <div className={featured ? styles.list_featured : styles.list}>
                {items?.map((item: any, index: number) => (
                    <div
                        key={index}
                        className={
                            featured
                                ? styles[`list_item${index}`]
                                : styles.list_item
                        }>
                        <Post data={item} featured={featured && index === 0} />
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default List;

import styles from './tag.module.scss';

const Tag = ({ text }: { text: string }) => {
    return <span className={styles.container}>{text}</span>;
};

export default Tag;

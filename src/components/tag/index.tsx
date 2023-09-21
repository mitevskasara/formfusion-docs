import styles from './tag.module.scss';

const Tag = ({ label }: Tag) => <h2 className={styles.container}>{label}</h2>;

export default Tag;

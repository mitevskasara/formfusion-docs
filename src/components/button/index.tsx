import styles from './button.module.scss';

const Button = (props: Button & any) => (
    <button className={styles.button}>{props.title}</button>
);

export default Button;

import { copy } from '@/utils/general';
import styles from './share.module.scss';

const Share = ({ link }: IShareProps) => {
    return (
        <div className={styles.container}>
            <a
                href={`https://www.facebook.com/sharer.php?u=${link}`}
                target="_blank"
                title="Share on Facebook">
                <span className="icon-facebook" />
            </a>
            <a
                href={`https://twitter.com/intent/tweet?url=${link}`}
                target="_blank"
                title="Share on Twitter">
                <span className="icon-twitter" />
            </a>
            <a
                href={`whatsapp://send?text=${link}`}
                target="_blank"
                title="Share on whatsapp">
                <span className="icon-whatsapp" />
            </a>
            <a
                href={`https://www.linkedin.com/shareArticle?url=${link}`}
                target="_blank"
                title="Share on Linkedin">
                <span className="icon-linkedin" />
            </a>
            <span
                className={styles.container__copylink}
                title="Copy link"
                onClick={() => copy(link)}>
                <span className="icon-link" />
            </span>
        </div>
    );
};

export default Share;

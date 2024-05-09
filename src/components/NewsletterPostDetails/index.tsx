import Typography from 'corelabui/Typography';
import { formatDate } from '@/utils/dateFormat';
import classes from './newsletterPostDetails.module.scss';

interface INewsletterPostDetailsProps {
    data: any;
}

const NewsletterPostDetails = ({ data }: INewsletterPostDetailsProps) => {
    return (
        <div>
            <div className={classes.tags}>
                {data.labels?.map((label: string, key: number) => (
                    <span key={key} className={classes.tags__tag}>
                        {label}
                    </span>
                ))}
            </div>
            <Typography
                variant="heading4"
                htmlElement="h1"
                lines={3}
                overflow="ellipsis">
                {data.title}
            </Typography>
            <Typography
                variant="caption"
                htmlElement="span"
                color="var(--text-secondary)">
                Published&nbsp;
                <span className={classes.date}>
                    {formatDate(data.published)}
                </span>
            </Typography>
            <Typography variant="body1" htmlElement="div">
                <div
                    className={classes.details}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </Typography>
        </div>
    );
};

export default NewsletterPostDetails;

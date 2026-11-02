import Typography from 'corelabui/Typography';
import Link from 'next/link';

import { download } from '@/utils/general';
import { ShowcaseItem } from '@/data/showcaseExamples';

import classes from './showcaseCard.module.scss';

const ShowcaseCard = ({
    slug,
    title,
    description,
    Component,
    code,
    fileName
}: ShowcaseItem) => {
    const onDownload = () => download(code, fileName);

    return (
        <div className={classes.card}>
            <div className={classes.card__previewWrapper}>
                <div className={classes.card__previewScale}>
                    <Component />
                </div>
                <div className={classes.card__fade} />
            </div>
            <div className={classes.card__body}>
                <Typography variant="heading6" htmlElement="h3" margin={false}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    margin={false}
                    className={classes.card__description}>
                    {description}
                </Typography>
                <div className={classes.card__actions}>
                    <Link
                        href={`/examples/${slug}`}
                        target="_blank"
                        className={classes.card__view}>
                        View full form
                    </Link>
                    <button
                        type="button"
                        onClick={onDownload}
                        className={classes.card__download}>
                        Download source
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseCard;

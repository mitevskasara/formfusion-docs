import Typography from 'corelabui/Typography';
import HTMLText from '@/components/HTMLText';

import classes from './list.module.scss';

interface ListProps extends Partial<HTMLUListElement & any> {
    items: any[];
}

const List = ({ children, className, items = [], ...props }: ListProps) => {
    return (
        <ul className={`${className ?? ''} ${classes.list}`} {...props}>
            {items.map((item, key) => (
                <li className={classes.list__item} key={key}>
                    <Typography variant="body1" margin={false}>
                        <HTMLText text={item} />
                    </Typography>
                </li>
            ))}
        </ul>
    );
};

export default List;

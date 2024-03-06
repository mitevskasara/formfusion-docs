import Typography from 'corelabui/Typography';
import Property from '@/components/Property';

import classes from './gridlist.module.scss';

interface ListProps extends Partial<HTMLUListElement & any> {
    items: any[];
}

const List = ({ children, className, items = [], ...props }: ListProps) => {
    return (
        <ul className={`${className ?? ''} ${classes.list}`} {...props}>
            {items.map((item, key) => (
                <li className={classes.list__item} key={key}>
                    <Typography variant="body1" margin={false}>
                        <Property>{item}</Property>
                    </Typography>
                </li>
            ))}
        </ul>
    );
};

export default List;

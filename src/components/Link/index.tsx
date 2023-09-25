import NextLink from 'next/link';
import classes from './link.module.scss';

interface LinkProps extends Partial<HTMLAnchorElement & any> {
    icon?: string;
}

const Link = ({ href, icon, ...props }: LinkProps) => {
    return (
        <NextLink href={props.href}>
            <a {...props} className={classes.link}>
                {icon && <span className={`icon-${icon}`} />}
            </a>
        </NextLink>
    );
};

export default Link;

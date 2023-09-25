import NextLink from 'next/link';
import classes from './link.module.scss';

interface LinkProps extends Partial<HTMLAnchorElement & any> {
    icon?: string;
}

const Link = ({ icon, href, children, className, ...props }: LinkProps) => {
    return (
        <NextLink href={href} {...props}>
            <span className={`${className} ${classes.link}`}>
                {children}
                {icon && <span className={`icon-${icon}`} />}
            </span>
        </NextLink>
    );
};

export default Link;

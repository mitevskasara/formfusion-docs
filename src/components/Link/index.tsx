import NextLink from 'next/link';
import classes from './link.module.scss';

interface LinkProps extends Partial<HTMLAnchorElement & any> {
    icon?: string;
    internal?: boolean;
    color?: string;
}

const Link = ({
    icon,
    href,
    children,
    className,
    internal = true,
    color,
    ...props
}: LinkProps) => {
    const Component = internal ? NextLink : 'a';
    return (
        <Component
            href={href}
            {...props}
            className={`${className} ${
                !color ? classes.link : classes.link_noColor
            }`}
            style={{ color }}>
            {children}
            {icon && <span className={`icon-${icon}`} />}
        </Component>
    );
};

export default Link;

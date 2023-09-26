import Typography from 'corelabui/Typography';
import Link from '@/components/Link';

import classes from './footerNavigation.module.scss';

interface FooterNavigationProps {
    url: string;
    title: string;
}

const FooterNavigation = ({ url, title }: FooterNavigationProps) => {
    return (
        <footer className={classes.footer}>
            <Typography variant="caption" align="right">
                Next
            </Typography>
            <Link href={url}>{title}</Link>
        </footer>
    );
};

export default FooterNavigation;

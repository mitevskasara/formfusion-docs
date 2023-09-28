import Flex from 'corelabui/Flex';
import Divider from 'corelabui/Divider';
import Typography from 'corelabui/Typography';

import Link from '@/components/Link';

import classes from './footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Divider />
            <Flex justifyContent="center" alignItems="center" margin="3em 0">
                <Link
                    href="https://www.facebook.com/people/Core-Lab-UI/61551623474518"
                    target="_blank"
                    title="Share on Facebook"
                    icon="facebook"
                    className={classes.footer__link}
                />
                <Link
                    href="https://www.instagram.com/corelabui"
                    target="_blank"
                    title="Share on whatsapp"
                    icon="instagram"
                    className={classes.footer__link}
                />
                <Link
                    href="https://www.linkedin.com/corelabui"
                    target="_blank"
                    title="Share on Linkedin"
                    icon="linkedin"
                    className={classes.footer__link}
                />
                <Link
                    href="https://github.com/corelabui"
                    target="_blank"
                    title="Share on Twitter"
                    icon="github"
                    className={classes.footer__link}
                />
            </Flex>
            <Typography variant="caption" align="center">
                Copyright © 2023 CoreLab UI. All rights reserved.
            </Typography>
        </div>
    );
};

export default Footer;

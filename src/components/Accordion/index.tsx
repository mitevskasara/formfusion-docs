import { DetailsHTMLAttributes } from 'react';
import classes from './accordion.module.scss';

interface AccordionProps
    extends Partial<DetailsHTMLAttributes<HTMLDetailsElement>> {
    icon?: string;
}

const Accordion = ({ children, title, icon, ...props }: AccordionProps) => {
    return (
        <details {...props}>
            <summary className={classes.details__summary}>
                <span className={`icon-${icon}`} /> {title}
            </summary>
            {children}
        </details>
    );
};

export default Accordion;

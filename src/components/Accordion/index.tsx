import { DetailsHTMLAttributes } from 'react';
import classes from './accordion.module.scss';

interface AccordionProps
    extends Partial<DetailsHTMLAttributes<HTMLDetailsElement>> {}

const Accordion = ({ children, title, ...props }: AccordionProps) => {
    return (
        <details {...props}>
            <summary className={classes.details__summary}>{title}</summary>
            {children}
        </details>
    );
};

export default Accordion;

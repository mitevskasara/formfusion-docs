import Typography from 'corelabui/Typography';

import classes from './Section.module.scss';
import { HTMLAttributes, LegacyRef, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    margin?: boolean;
    subtitle?: string;
}

const Section = forwardRef(
    (
        {
            children,
            className,
            title,
            subtitle,
            margin = true,
            ...props
        }: SectionProps,
        ref: LegacyRef<HTMLElement>
    ) => {
        return (
            <section
                className={`${className} ${
                    margin ? classes.section : classes.section_noMargin
                }`}
                ref={ref}
                {...props}>
                {title && (
                    <Typography variant="heading4" htmlElement="h2">
                        {title}
                    </Typography>
                )}
                {subtitle && (
                    <Typography variant="heading5" htmlElement="h3">
                        {subtitle}
                    </Typography>
                )}
                {children}
            </section>
        );
    }
);

Section.displayName = 'Section';

export default Section;

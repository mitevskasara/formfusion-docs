import Typography from 'corelabui/Typography';

import classes from './section.module.scss';
import React, { HTMLAttributes, LegacyRef, forwardRef } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    margin?: boolean;
    subtitle?: string;
    badge?: React.ReactNode;
}

const Section = forwardRef(
    (
        {
            children,
            className,
            title,
            subtitle,
            margin = true,
            badge = null,
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
                    <div className={classes.section__title}>
                        <Typography variant="heading4" htmlElement="h2">
                            {title}
                        </Typography>
                        {badge || ''}
                    </div>
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

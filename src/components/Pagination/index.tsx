import Button from 'corelabui/Button';
import classes from './pagination.module.scss';
import { useState } from 'react';

interface PaginationProps {
    pages: number[];
    activePage?: number;
    boundary?: number;
    onChange: (activePage: number) => void;
}

const paginateArray = (
    pages: number[],
    activePage: number,
    boundary: number
) => {
    let startIndex = Math.max(0, activePage - Math.floor(boundary / 2));
    const allowNext = pages.length - Math.floor(boundary / 2);

    if (startIndex === pages.length - boundary) {
        startIndex = pages.length - boundary;
        console.log(startIndex, pages.length - boundary);
    }

    const endIndex = Math.min(pages.length, startIndex + boundary);
    const visibleItems =
        activePage < allowNext
            ? pages.slice(startIndex, endIndex)
            : pages.slice(allowNext - 3, allowNext + 2);

    return visibleItems;
};

const Pagination = ({
    pages,
    activePage = 1,
    boundary = 5,
    onChange
}: PaginationProps) => {
    const allowNext = activePage < pages.length - 1 - Math.floor(boundary / 2);
    const allowPrevious = activePage > 1;

    const handlePrevious = () => {
        if (allowPrevious) onChange(activePage - 1);
    };

    const handleNext = () => {
        if (allowNext) onChange(activePage + 1);
    };

    return (
        <div className={classes.pagination}>
            <span
                className={`icon-chevron-left ${classes.pagination__control} ${
                    !allowPrevious ? classes.pagination__control_disabled : ''
                }`}
                onClick={handlePrevious}
            />
            {paginateArray(pages, activePage, boundary).map((i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    className={`${classes.pagination__page} ${
                        activePage === i ? classes.pagination__page_active : ''
                    }`}>
                    {i}
                </button>
            ))}
            <span
                className={`icon-chevron-right ${classes.pagination__control} ${
                    !allowNext ? classes.pagination__control_disabled : ''
                }`}
                onClick={handleNext}
            />
        </div>
    );
};

export default Pagination;

import classes from './pagination.module.scss';

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
    if (pages.length <= boundary) return pages;

    const half = Math.floor(boundary / 2);
    const maxStart = pages.length - boundary;
    const startIndex = Math.min(Math.max(activePage - 1 - half, 0), maxStart);

    return pages.slice(startIndex, startIndex + boundary);
};

const Pagination = ({
    pages,
    activePage = 1,
    boundary = 6,
    onChange
}: PaginationProps) => {
    const allowNext = activePage < pages.length;
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
                role="button"
                tabIndex={allowPrevious ? 0 : -1}
                aria-label="Previous page"
                className={`icon-chevron-left ${classes.pagination__control} ${
                    !allowPrevious ? classes.pagination__control_disabled : ''
                }`}
                onClick={handlePrevious}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handlePrevious();
                }}
            />
            {paginateArray(pages, activePage, boundary).map((i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    aria-current={activePage === i ? 'page' : undefined}
                    className={`${classes.pagination__page} ${
                        activePage === i ? classes.pagination__page_active : ''
                    }`}>
                    {i}
                </button>
            ))}
            <span
                role="button"
                tabIndex={allowNext ? 0 : -1}
                aria-label="Next page"
                className={`icon-chevron-right ${classes.pagination__control} ${
                    !allowNext ? classes.pagination__control_disabled : ''
                }`}
                onClick={handleNext}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') handleNext();
                }}
            />
        </div>
    );
};

export default Pagination;

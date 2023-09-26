import { useState, useEffect, RefObject } from 'react';

const useIsInViewport = (ref: RefObject<HTMLElement>): boolean => {
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInViewport(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref]);

    return isInViewport;
};

export default useIsInViewport;

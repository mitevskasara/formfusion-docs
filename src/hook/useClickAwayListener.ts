import { useEffect, useRef } from 'react';

const useClickAwayListener = (callback: () => void) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const callbackRef = useRef(callback);

    callbackRef.current = callback;

    useEffect(() => {
        const handleClickAway = (event: MouseEvent) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                callbackRef.current();
            }
        };

        document.addEventListener('mousedown', handleClickAway);

        return () => {
            document.removeEventListener('mousedown', handleClickAway);
        };
    }, []);

    return wrapperRef;
};

export default useClickAwayListener;

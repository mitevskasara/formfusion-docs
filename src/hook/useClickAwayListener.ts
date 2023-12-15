import { useEffect, useRef } from 'react';

const useClickAwayListener = (callback: () => void) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClickAway = (event: MouseEvent) => {
        if (
            wrapperRef.current &&
            !wrapperRef.current.contains(event.target as Node)
        ) {
            callback();
        }
    };

    useEffect(() => {
        if (window != undefined)
            document.addEventListener('mousedown', handleClickAway);
        return () => {
            if (window != undefined)
                document.removeEventListener('mousedown', handleClickAway);
        };
    }, [callback]);

    return wrapperRef;
};

export default useClickAwayListener;

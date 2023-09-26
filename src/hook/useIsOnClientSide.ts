import { useState, useEffect } from 'react';

const useIsOnClientSide = (): boolean => {
    const [isCsr, setIsCsr] = useState(false);

    useEffect(() => {
        setIsCsr(true);
    }, []);

    return isCsr;
};

export default useIsOnClientSide;

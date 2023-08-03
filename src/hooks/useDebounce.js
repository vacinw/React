import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouceValue, serDebounceValue] = useState(value)

    useEffect(() => {
        const hadnler = setTimeout(() => {
            serDebounceValue(value)
        }, delay)

        return () => clearTimeout(hadnler)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debouceValue
}

export default useDebounce;
import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
    const [debouncedVaue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(handle)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debouncedVaue
}

import axios, { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";

function useFetchs<T>(url: string) {
    const [data, setData] = useState<T[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetch = useCallback(async () => {
        if (!url) return;

        setLoading(true)
        setError(null)

        try {
            console.log('👉 fetching:', url)
            const response = await axios.get<T[]>(url);
            setData(response.data)
        } catch (e) {
            const err = e as AxiosError

            if (err.response) {
                console.log('STATUS:', err.response.status)
                console.log('DATA:', err.response.data)
                setError(`Server error ${err.response.status}`)
            }
            else if (err.request) {
                console.log('❌ NETWORK ERROR')
                setError('Network error – không kết nối được server')
            }
            else {
                console.log('ERROR:', err.message)
                setError(err.message)
            }
        } finally {
            setLoading(false);
        }
    }, [url])

    useEffect(() => {
        handleFetch();
    }, [handleFetch])

    return { data, loading, error, refetch: handleFetch }
}

export default useFetchs;

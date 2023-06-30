import { useState, useEffect } from "react";

function useFetch<T>(fetcher: () => any, dep: any[]) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    async function fetchData() {
      return await fetcher();
    }
    try {
      // @ts-ignore
      fetchData().then((res) => setData(res));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, dep);

  return { data, loading, error };
}
export default useFetch;

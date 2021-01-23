import { useEffect, useState } from 'react';

const useFetch = (url, query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url + query);
        const data = await response.json();

        setData(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    if (query) {
      fetchData();
    }
  }, [url, query]);

  return { data, isLoading, isError };
};

export default useFetch;

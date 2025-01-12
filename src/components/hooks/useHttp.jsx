import { useEffect, useState } from "react";

export const useHttp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllMovies();
      setData(data);
    };
    getData();
  }, []);

  return [data, setData];
};

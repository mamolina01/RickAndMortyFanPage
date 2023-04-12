import { useEffect, useState } from "react";

export const useFetchApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [paginationData, setPaginationData] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async (endpoint) => {
    const baseUrl = `https://rickandmortyapi.com/api/${endpoint}`;
    const respuesta = fetch(baseUrl)
      .then((data) => data.json())
      .then((response) => response);

    return await respuesta;
  };

  const getData = async (endpoint) => {
    const newData = await fetchApi(endpoint);
    setData((newData.results)?newData.results:newData)
    setPaginationData((newData.info)?newData.info:[])
    setIsLoading(false);
  };

  useEffect(() => {
    if (endpoint !== "") {
      getData(endpoint);
    }
  }, [endpoint]);

  return { data,paginationData, isLoading };
};

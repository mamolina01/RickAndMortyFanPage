import { useEffect, useState } from "react";

export const useFetchApi = (endpoint='character') => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchApi = async (endpoint) => {
		const baseUrl = `https://rickandmortyapi.com/api/${endpoint}`;
		// console.log(`Base url: ${baseUrl}`)
		const respuesta = fetch(baseUrl)
			.then((data) => data.json())
			.then((response) => response.results);

		return await respuesta;
	};

	const getData = async (endpoint) => {
		const newData = await fetchApi(endpoint);
		// console.log(newData);

		setData(newData);
		setIsLoading(false);
	};

	useEffect(() => {
		getData(endpoint);
	}, []);

	return { data, isLoading };
};

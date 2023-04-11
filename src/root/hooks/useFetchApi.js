import { useEffect, useState } from "react";

export const useFetchApi = (endpoint="character") => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchApi = async () => {
		const baseUrl = `https://rickandmortyapi.com/api/episode`;
		const respuesta = fetch(baseUrl)
			.then((data) => data.json())
			.then((response) => response.results);

		return await respuesta;
	};

	const getData = async () => {
		const newData = await fetchApi();

		setData(newData);
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return { data, isLoading };
};

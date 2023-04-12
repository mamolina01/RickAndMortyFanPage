import { useEffect, useState } from "react";

export const useFetchApi = (endpoint) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchApi = async (endpoint) => {
		const baseUrl = `https://rickandmortyapi.com/api/${endpoint}`;
		// console.log(baseUrl)
		const respuesta = fetch(baseUrl)
			.then((data) => data.json())
			.then((response) => {
				if(response.results){
					return response.results
				}else{
					return response
				}
			});

		return await respuesta;
	};

	const getData = async (endpoint) => {
		const newData = await fetchApi(endpoint);
		// console.log(newData);

		setData(newData);
		setIsLoading(false);
	};

	useEffect(() => {
		if(endpoint!==""){
			getData(endpoint);
		}
	}, [endpoint]);

	return { data, isLoading };
};

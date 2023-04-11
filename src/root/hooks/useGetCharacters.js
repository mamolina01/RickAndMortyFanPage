import { useEffect, useState } from "react";

export const useGetCharacters = (endpoint="character") => {
	const [characters, setCharacters] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getCharacters = async () => {
		const baseUrl = `https://rickandmortyapi.com/api/${endpoint}`;
		const respuesta = fetch(baseUrl)
			.then((data) => data.json())
			.then((response) => response.results);

		return await respuesta;
	};

	const getData = async () => {
		const newCharacters = await getCharacters();

		setCharacters(newCharacters);
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return { characters, isLoading };
};

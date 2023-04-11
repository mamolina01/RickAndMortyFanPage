import { useEffect, useState } from "react";

export const useGetCharacterById = (id) => {
	const [character, setCharacter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getApi = async (id) => {
		const baseUrl = `https://rickandmortyapi.com/api/character/${id}`;
		const respuesta = fetch(baseUrl)
			.then((data) => data.json())
			.then((response) => response);
		return await respuesta;
	};

	const manageData = async () => {
		const newCharacter = await getApi(id);
		setCharacter(newCharacter);
		setIsLoading(false);
	};

	useEffect(() => {
		manageData();
	}, []);

	return { character, isLoading };
};

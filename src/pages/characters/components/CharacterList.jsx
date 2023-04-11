import React from "react";
import { Spinner,useFetchApi } from "../../../root";
// import { useFetchApi } from "../../../root";
import { CharacterItem } from "./CharacterItem";
import styles from "../styles/CharacterList.module.css";
// import { useFetchApi } from "../../../root";

export const CharacterList = () => {
	const { data, isLoading } = useFetchApi("character");

	// console.log(characters)
	return (
		<>
			{!isLoading ? (
				<main className={styles.list_main}>
					<div className={styles.characters_list}>
						{data.map((character) => (
							<CharacterItem key={character.id} character={character} />
						))}
					</div>
				</main>
			) : (
				<Spinner/>
			)}
		</>
	);
};

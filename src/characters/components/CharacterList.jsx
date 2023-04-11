import React from "react";
import { Spinner } from "../../root/components/Spinner";
import { useGetCharacters } from "../../root/hooks/useGetCharacters";
import { CharacterItem } from "./CharacterItem";
import styles from "../styles/CharacterList.module.css";

export const CharacterList = () => {
	const { characters, isLoading } = useGetCharacters("character");

	return (
		<>
			{!isLoading ? (
				<main className={styles.list_main}>
					<div className={styles.characters_list}>
						{characters.map((character) => (
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

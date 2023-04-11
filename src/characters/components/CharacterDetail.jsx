import React from "react";
import styles from "../styles/CharacterDetail.module.css";

export const CharacterDetail = ({ character }) => {
	return (
		<>
			<img src={character.image} alt="" />
			<div className={styles.character_data}>
				<h1>{character.name}</h1>
				<p className={styles.character_item}>
					<strong>Gender: </strong>
					{character.gender}
				</p>
				<p className={styles.character_item}>
					<strong>Species: </strong>
					{character.species}
				</p>
				<p className={styles.character_item}>
					<strong>Status: </strong>
					{character.status}
				</p>
				{character.location && (
					<p className={styles.character_item}>
						<strong>Location: </strong>
						{character.location.name}
					</p>
				)}
			</div>
		</>
	);
};

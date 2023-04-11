import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCharacterById } from "../../../root";
import { CharacterDetail } from "../components/CharacterDetail";
import styles from "../styles/CharacterDetail.module.css";
import { FcLeft } from "react-icons/fc";

export const DetailsPage = () => {
	const { characterId } = useParams();
	const { character, isLoading } = useGetCharacterById(characterId);
	return (
		<>
			{!isLoading ? (
				
				<>
					<Link to="/" className={styles.button_back}>
						<FcLeft className={styles.button_back_icon} />
						<p>Volver atras...</p>
					</Link>
					<main className={styles.detail_main}>
						<CharacterDetail character={character} />
					</main>
				</>
			) : (
				<div className={styles.container_spiner}>
					<div className={styles.spinner}></div>
				</div>
			)}
		</>
	);
};

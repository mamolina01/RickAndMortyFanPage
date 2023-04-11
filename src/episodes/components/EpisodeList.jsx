import React from "react";
import { useFetchApi } from "../../root";
import { Spinner } from "../../root/components/Spinner";
import styles from '../styles/EpisodeList.module.css'
import { EpisodeItem } from "./EpisodeItem";

export const EpisodeList = () => {
	const { data, isLoading } = useFetchApi("episode");
	console.log(data);
	return (
		<>
			{!isLoading ? (
				<main className={styles.list_main}>
						{data.map((episode) => (
							<EpisodeItem key={episode.id} episode={episode}/>
						))}
				</main>
			) : (
				<Spinner />
			)}
		</>
	);
};

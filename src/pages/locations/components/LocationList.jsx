import React from 'react'
import { useFetchApi } from "../../../root";
import { Spinner } from "../../../root/components/Spinner";
import styles from '../styles/LocationList.module.css'
import { LocationItem } from './LocationItem';

export const LocationsList = () => {
    const { data, isLoading } = useFetchApi("location");
	return (
		<>
			{!isLoading ? (
				<main className={styles.list_main}>
						{data.map((location) => (
							<LocationItem key={location.id} location={location}/>
						))}
				</main>
			) : (
				<Spinner />
			)}
		</>
	);
}

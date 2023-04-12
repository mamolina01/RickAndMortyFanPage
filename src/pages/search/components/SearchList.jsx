import React from "react";
import { Spinner } from "../../../root";
import styles from "../styles/SearchList.module.css";
import { SearchItem } from "./SearchItem";

export const SearchList = ({ data, isLoading,selectedValue }) => {
	return (
		<>
			{!isLoading ? (
				<main className={styles.list_main}>
					{/* <div className={styles.characters_list}> */}
					{data.map((item) => (
						// <img src={character.image} alt="" />
						<SearchItem key={item.id} item={item} selectedValue={selectedValue}/>
					))}
					{/* </div> */}
				</main>
			) : (
				<Spinner />
			)}
		</>
	);
};

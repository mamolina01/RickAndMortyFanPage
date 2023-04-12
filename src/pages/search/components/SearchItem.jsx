import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SearchItem.module.css";

export const SearchItem = ({ item,selectedValue }) => {

	return (
		<>
			<Link className={styles.link} to={`/${selectedValue}s/${item.id}`}>
				<div className={styles.search_item}>
					{item.image ? (
						<img className={styles.item_img} src={item.image} alt={item.name} />
					) : (
						""
					)}
					{/* <img src={item.image} alt="" /> */}
					<p className={styles.item_name}>{item.name}</p>
				</div>
			</Link>
		</>
	);
};

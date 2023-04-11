import React from "react";
import styles from "./UpperBar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const UpperBar = () => {
	return (
		<>
			<header className={styles.upperbar_header}>
				<h1 className={styles.upperbar_title}>Rick And Morty</h1>
				<div className={styles.upperbar_filters}>
					<NavLink
						className={({ isActive }) =>
							`${styles.upperbar_filter_item} ${isActive ? styles.active : ""}`
						}
						to="/characters"
					>
						Characters
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`${styles.upperbar_filter_item} ${isActive ? styles.active : ""}`
						}
						to="/episodes"
					>
						Episodes
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`${styles.upperbar_filter_item} ${isActive ? styles.active : ""}`
						}
						to="/locations"
					>
						Locations
					</NavLink>
				</div>
				<div></div>
				<div className={styles.upperbar_input_container}>
					<input
						className={styles.upperbar_input}
						type="text"
						placeholder="Buscar personajes, lugares, capitulos"
					/>
					<BiSearchAlt2 className={styles.upperbar_icon} />
				</div>
			</header>
		</>
	);
};

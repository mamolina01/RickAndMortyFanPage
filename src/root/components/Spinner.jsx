import React from "react";
import styles from "./Spinner.module.css";


export const Spinner = () => {
	return (
		<div className={styles.container_spiner}>
			<div className={styles.spinner}></div>
		</div>
	);
};

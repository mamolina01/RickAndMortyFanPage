import React, { useState } from "react";
import { Spinner, useFetchApi } from "../../../root";
import { SearchBar } from "../components/SearchBar";
import { SearchResultList } from "../components/SearchResultList";
import styles from "../styles/SearchPage.module.css";

export const SearchPage = () => {
	const [selectedValue, setSelectedValue] = useState("Character");
	const [endpoint, setEndpoint] = useState("");
	const { data, isLoading } = useFetchApi(endpoint);

	const onHandleSearch = (parameter) => {
		console.log("Desde onHandleSearch");
		console.log(parameter)
		const newEndpoint = `${selectedValue.toLowerCase()}/?name=${parameter}`;
		setEndpoint(newEndpoint);
	};


	return (
		<>
      <h2 className={styles.title}>Search</h2>

			<div className={styles.search_container}>
				<SearchBar
					selectedValue={selectedValue}
					setSelectedValue={setSelectedValue}
					onHandleSearch={onHandleSearch}
				/>

				{endpoint !== "" ? (
					!isLoading ? (
						(data.length>0)?(
							<SearchResultList data={data} isLoading={isLoading} selectedValue={selectedValue.toLowerCase()} />
						):(<p className={styles.result_notfound}>No se encontraron resultados...</p>)
					) : (
						<Spinner />
					)
				) : (
					""
				)}
			</div>
		</>
	);
};

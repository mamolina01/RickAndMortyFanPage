import React, { useState } from "react";
import { useFetchApi } from "../../../root";
import { Spinner, Pagination } from "../../../root";
import { LocationItem } from "./LocationItem";
import styles from "../styles/LocationList.module.css";

export const LocationsList = () => {
  const [page, setPage] = useState(1);
  const { data, paginationData, isLoading } = useFetchApi(`location/?page=${page}`);
  return (
    <>
      {!isLoading ? (
        <>
          <main className={styles.list_main}>
            {data.map((location) => (
              <LocationItem key={location.id} location={location} />
            ))}
          </main>
          <Pagination
            page={page}
            setPage={setPage}
            paginationData={paginationData}
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

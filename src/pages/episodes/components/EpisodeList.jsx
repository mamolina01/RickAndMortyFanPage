import React, { useState } from "react";
import { useFetchApi } from "../../../root";
import { Spinner, Pagination } from "../../../root";
import { EpisodeItem } from "./EpisodeItem";
import styles from "../styles/EpisodeList.module.css";

export const EpisodeList = () => {
  const [page, setPage] = useState(1);
  const { data, paginationData, isLoading } = useFetchApi(`episode/?page=${page}`);

  return (
    <>
      {!isLoading ? (
        <>
          <main className={styles.list_main}>
            {data.map((episode) => (
              <EpisodeItem key={episode.id} episode={episode} />
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

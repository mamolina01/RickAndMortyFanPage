import React, { useState } from "react";
import { Spinner, useFetchApi, Pagination } from "../../../root";
import { CharacterItem } from "./CharacterItem";
import styles from "../styles/CharacterList.module.css";

export const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { data, paginationData, isLoading } = useFetchApi(`character/?page=${page}`);

  return (
    <>
      {!isLoading ? (
        <>
          <main className={styles.list_main}>
            <div className={styles.characters_list}>
              {data.map((character) => (
                <CharacterItem key={character.id} character={character} />
              ))}
            </div>
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

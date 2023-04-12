import React, { useState } from "react";
import { Spinner } from "../../../root";
import styles from "../styles/SearchResultList.module.css";
import { SearchResultItem } from "./SearchResultItem";

export const SearchResultList = ({ data, isLoading, selectedValue }) => {

  return (
    <>
      {!isLoading ? (
        <main
          className={data[0].image ? styles.container_main_gallery : styles.container_main_list}>
          {data.map((item) => (
            <SearchResultItem
              key={item.id}
              item={item}
              selectedValue={selectedValue}
            />
          ))}
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

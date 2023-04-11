import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { SearchResult } from "../components/SearchResult";
import styles from "../styles/SearchPage.module.css";

export const SearchPage = () => {
  const [selectedValue, setSelectedValue] = useState("Character");
  const [inputValue, setInputValue] = useState("")

  return (
    <>
      <div className={styles.search_container}>
        <SearchBar
          {...selectedValue}
          setSelectedValue={setSelectedValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <SearchResult selectedValue={selectedValue}/>
      </div>
    </>
  );
};

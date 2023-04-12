import React from "react";
import styles from "./Pagination.module.css";

export const Pagination = ({ page, setPage,paginationData }) => {
  const handlePage = (operation) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
    if (operation === "+") {
      setPage(page + 1);
    } else if (operation === "-") {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className={styles.pagination_container}>
        <button
          className={styles.pagination_item}
          style={{ display: paginationData.prev ? "" : "none" }}
          onClick={() => handlePage("-")}
        >
          Previous Page
        </button>
        <p
          className={styles.pagination_item}
          style={{ display: (paginationData.next && paginationData.prev)?  "" :"none" }}
        >
          |
        </p>
        <button
          className={styles.pagination_item}
          style={{ display: paginationData.next ? "" : "none" }}
          onClick={() => handlePage("+")}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SearchResultItem.module.css";

export const SearchResultItem = ({ item, selectedValue }) => {
  return (
    <>
      <Link className={styles.link} to={`/${selectedValue}s/${item.id}`}>
        {item.image ? (
          <div className={styles.search_container_gallery}>
            <p
              className={styles.status}
              style={{backgroundColor:item.status === "Alive"? "green": item.status === "Dead"? "red": "",}}>
              {item.status}
            </p>
            <img className={styles.item_img} src={item.image} alt={item.name} />
            <p className={styles.item_name_gallery}>{item.name}</p>
          </div>
        ) : (
          <div className={styles.search_container_list}>
            <p className={styles.item_name_list}>
              <strong>Name:</strong> {item.name}
            </p>
            {item.air_date ? (
              <p className={styles.item_name_list}>
                <strong>Release Date:</strong> {item.air_date}
              </p>
            ) : (
              ""
            )}
            {item.episode ? (
              <p className={styles.item_name_list}>
                <strong>Episode:</strong> {item.episode}
              </p>
            ) : (
              ""
            )}
            {item.type ? (
              <p className={styles.item_name_list}>
                <strong>Type:</strong> {item.type}
              </p>
            ) : (
              ""
            )}
            {item.dimension ? (
              <p className={styles.item_name_list}>
                <strong>Dimension:</strong> {item.dimension}
              </p>
            ) : (
              ""
            )}
          </div>
        )}
      </Link>
    </>
  );
};

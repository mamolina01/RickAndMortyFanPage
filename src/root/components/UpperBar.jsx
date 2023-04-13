import React, { useState } from "react";
import styles from "./UpperBar.module.css";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export const UpperBar = () => {
  const [hidden, setHidden] = useState(false);
  console.log(hidden);
  return (
    <>
      <header className={styles.upperbar_header}>
        <NavLink className={`${styles.upperbar_title} ${styles.link}`} to="/characters">
          <h1>Rick And Morty</h1>
        </NavLink>
        <div>
          <HiMenu
            className={styles.upperbar_filters_icon}
            onClick={() => setHidden(!hidden)}
          />
        </div>

        <div className={styles.upperbar_filters}>
          <NavLink
            className={({ isActive }) =>
              `${styles.upperbar_filter_item} ${isActive ? styles.active : ""} ${styles.link}`
            }
            to="/characters"
          >
            Characters
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.upperbar_filter_item} ${isActive ? styles.active : ""} ${styles.link}`
            }
            to="/episodes"
          >
            Episodes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.upperbar_filter_item} ${isActive ? styles.active : ""} ${styles.link}`
            }
            to="/locations"
          >
            Locations
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.upperbar_filter_item} ${isActive ? styles.active : ""} ${styles.link}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </header>
      <div
        className={styles.upperbar_hidden_filters}
        style={{ visibility: hidden ? "" : "hidden" }}
      >
        <NavLink to="/characters" className={styles.link}>
          <p
            className={styles.upperbar_hidden_filter_item}
            onClick={() => setHidden(false)}
          >
            Characters
          </p>
        </NavLink>
        <NavLink to="/episodes" className={styles.link}>
          <p
            className={styles.upperbar_hidden_filter_item}
            onClick={() => setHidden(false)}
          >
            Episodes
          </p>
        </NavLink>
        <NavLink to="/locations" className={styles.link}>
          <p
            className={styles.upperbar_hidden_filter_item}
            onClick={() => setHidden(false)}
          >
            Locations
          </p>
        </NavLink>
        <NavLink to="/search" className={styles.link}>
          <p
            className={styles.upperbar_hidden_filter_item}
            onClick={() => setHidden(false)}
          >
            Search
          </p>
        </NavLink>
      </div>
    </>
  );
};

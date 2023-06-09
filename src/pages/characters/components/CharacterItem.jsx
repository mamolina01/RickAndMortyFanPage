import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CharacterItem.module.css";

export const CharacterItem = ({ character }) => {
  return (
    <>
      <Link className={styles.link} to={"/characters/" + character.id}>
        <div className={styles.character_card}>
          <p
            className={styles.status}
            style={{
              backgroundColor:
                character.status === "Alive"
                  ? "green"
                  : character.status === "Dead"
                  ? "red"
                  : "",
            }}
          >
            {character.status}
          </p>
          <img
            className={styles.character_img}
            src={character.image}
            alt={character.name}
          />
          <p className={styles.character_name}>{character.name}</p>
        </div>
      </Link>
    </>
  );
};

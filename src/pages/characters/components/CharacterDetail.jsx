import React from "react";
import styles from "../styles/CharacterDetail.module.css";

export const CharacterDetail = ({ character }) => {
  return (
    <>
      <main className={styles.detail_main}>
        <img src={character.image} alt={character.name} />
        <div className={styles.character_data_container}>
          <p className={styles.character_name}>{character.name}</p>
          <p className={styles.character_item}>
            <strong>Gender: </strong>
            {character.gender}
          </p>
          <p className={styles.character_item}>
            <strong>Species: </strong>
            {character.species}
          </p>
          <p className={styles.character_item}>
            <strong>Status: </strong>
            <div
              className={styles.status}
              style={{
                backgroundColor:
                  character.status === "Alive"
                    ? "green"
                    : character.status === "Dead"
                    ? "red"
                    : "",
              }}
            ></div>
            {character.status}
          </p>
          {character.location && (
            <p className={styles.character_item}>
              <strong>Location: </strong>
              {character.location.name}
            </p>
          )}
        </div>
      </main>
    </>
  );
};

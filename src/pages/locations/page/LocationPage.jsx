import React from "react";
import { LocationsList } from "../components/LocationList";
import styles from '../styles/LocationPage.module.css'

export const LocationPage = () => {
  return (
    <>
      <h2 className={styles.title}>Locations</h2>
      <LocationsList />
    </>
  );
};

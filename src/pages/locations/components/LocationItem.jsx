import React from 'react'
import styles from '../styles/LocationItem.module.css'


export const LocationItem = ({location}) => {
  return (
    <div className={styles.location_card}>
            <p><strong className={styles.location_card_item}>Name: </strong>{location.name}</p>
            <p><strong className={styles.location_card_item}>Type: </strong>{location.type}</p>
            <p><strong className={styles.location_card_item}>Dimension: </strong>{location.dimension}</p>
    </div>
  )
}

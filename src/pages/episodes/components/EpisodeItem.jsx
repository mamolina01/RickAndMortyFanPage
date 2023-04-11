import React from 'react'
import styles from '../styles/EpisodeItem.module.css'

export const EpisodeItem = ({episode}) => {
  return (
   <>
        <div className={styles.episode_card}>
            <p><strong className={styles.episode_card_item}>Title: </strong>{episode.name}</p>
            <p><strong className={styles.episode_card_item}>Episode: </strong>{episode.episode}</p>
            <p><strong className={styles.episode_card_item}>Release date: </strong>{episode.air_date}</p>
        </div>
   </>
  )
}

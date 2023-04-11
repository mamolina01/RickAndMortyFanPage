import React from 'react'
import styles from '../styles/EpisodeCard.module.css'

export const EpisodeItem = ({episode}) => {
  return (
   <>
        <div className={styles.episode_card}>
            <p><strong>Title: </strong>{episode.name}</p>
            <p><strong>Episode: </strong>{episode.episode}</p>
            <p><strong>Release ate: </strong>{episode.air_date}</p>
        </div>
   </>
  )
}

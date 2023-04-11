import React from 'react'
import { EpisodeList } from '../components/EpisodeList'
import styles from '../styles/EpisodePage.module.css'


export const EpisodePage = () => {
  return (
    <>
        <h2 className={styles.title}>Episodes</h2>
        <EpisodeList/>
    </>
  )
}

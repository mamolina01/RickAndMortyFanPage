import React from 'react'
import { CharacterList } from '../components/CharacterList'
import styles from '../styles/CharacterPage.module.css'

export const CharacterPage = () => {
  return (
    <>
        <h2 className={styles.title}>Characters</h2>
        <CharacterList/>
    </>
  )
}

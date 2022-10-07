import React from 'react'
import styles from '../../styles/Home.module.css'

function Search() {
  return (
    <div className={styles.containerSearch}>
        <input className={styles.search} types="text" placeholder="Search..." />
    </div>
  )
}

export default Search
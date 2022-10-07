import React from 'react'
import styles from '../../styles/Home.module.css'
import LoginBtn from './LoginBtn'

function Search() {
  return (
    <div className={styles.containerSearch}>
        <form className={styles.form}>
            <input className={styles.search} types="text" placeholder="Search..." />
        </form>
        <div className={styles.containerCount}>
            <p>Count</p>
            <button className={styles.btnTweet}>Tweet</button>
        </div>
    </div>
  )
}

export default Search
import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCat} from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Home.module.css'
import SignIn from '../loginTasks/SignIn';
import SignUp from '../loginTasks/SignUp';

function Home() {
  return (
    <div>
     <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <aside className={styles.profilLeft}>
        <FontAwesomeIcon icon={faCat} alt="Logo" className={styles.logo} />
        <div className={styles.containerUser}>
          <img src="/image/user1.jpeg" alt="Logo" className={styles.imgUser} />
          <div>
            <h2>Bernard</h2>
            <p>Hastalabista</p>
          </div>
        </div>
        </aside>
        <main className={styles.profilMain}>
            <h1>Home</h1>
        </main>
        <aside className={styles.profilHash}>
          <h1>Trends</h1>
        </aside>
      </div>
    </div>
  );
}

export default Home
import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCat} from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Home.module.css'
import SignIn from '../loginTasks/SignIn';
import SignUp from '../loginTasks/SignUp';
import Search from '../_shared/Search';
import Link from 'next/link';

function Home() {
  const user = useSelector((state) => state.user.value);
  return (
    <div>
     <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <aside className={styles.profilLeft}>
        
          <Link href="/home"><FontAwesomeIcon className={styles.logo} icon={faCat} alt="Logo"/></Link>
        
        <div className={styles.containerUser}>
          <img src="/image/user1.jpeg" alt="Logo" className={styles.imgUser} />
          <div>
            <h2>{user.username}</h2>
            <p>{user.token.lastname}</p>
          </div>
        </div>
        </aside>
        <main className={styles.profilMain}>
          <h3 style={{margin: "20px", fontSize: "25px"}}>Home</h3>
         <Search />
          <div>

          </div>
        </main>
        <aside className={styles.profilHash}>
          <h1>Trendy</h1>
        </aside>
      </div>
    </div>
  );
}

export default Home
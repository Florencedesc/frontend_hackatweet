import React, { useState } from "react";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import SignIn from "../loginTasks/SignIn";
import SignUp from "../loginTasks/SignUp";
import Search from "../_shared/Search";
import Link from "next/link";

function Hashtag() {
  const user = useSelector((state) => state.user.value);

  const [likeCount, setlikeCount] = useState(0);

  return (
    <div>
      <Head>
        <title>Hashtag</title>
      </Head>
      <div className={styles.container}>
        <aside className={styles.profilLeft}>
          <Link href="/home">
            <FontAwesomeIcon className={styles.logo} icon={faCat} alt="Logo" />
          </Link>
          <div className={styles.containerUser}>
            <img
              src="/image/user1.jpeg"
              alt="Logo"
              className={styles.imgUser}
            />
            <div>
              <h2>{user.username}</h2>
              <p>{user.token.lastname}</p>
            </div>
          </div>
        </aside>
        <main className={styles.profilMain}>
          <h1>Hashtag</h1>
          <Search />
          <div className={styles.hashtagresults}>
            <div className={styles.containerUser}>
              <img src="/image/user3.jpeg" alt="Logo" className={styles.imgUser}/>
              <div>
                <h2>{user.username}</h2>
                <p>{user.token.lastname} - 5 hours ago</p>
              </div>
            </div>
            <p>contenu du tweet a puller</p>
            <div className={styles.likeCount}>
              <FontAwesomeIcon className={styles.logoHeart} icon={faHeart} alt="Logo"onClick={() => setlikeCount(likeCount +1)}/>
              <p> {likeCount}</p>
            </div>
          </div>
        </main>
        <aside className={styles.profilHash}>
          <h1>Trendy</h1>
          <div className={styles.hashContainer}>
            <h2>#topTrends </h2>
            <h3>(number of) Tweet</h3>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Hashtag;

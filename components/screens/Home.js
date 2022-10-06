import React from 'react'
import styles from '../../styles/Home.module.css'

function Home() {
  return (
    <div>
     <Head>
        <title>Home</title>
      </Head>
     <main className={styles.container}>
        <aside className={styles.asideLeft} >
          <div>
            <p className={styles.logo}  >Logo</p>
          </div>
          <div>
            <p className={styles.profil}  >Profil</p>
          </div>
        </aside>
        <aside className={styles.asideCenter} >
        </aside>
        <aside className={styles.asideRight}>
          <div className={styles.containerLogin}>
            <p className={styles.logo}  >Logo</p>
            <div>
              <h1>Welcome to Kelton and Florence's Social Network</h1>
              <h2>Signup today and get a free ice-cream </h2>
            </div>
            <div className={styles.containerBtn}>
                <SignIn/>
                <SignUp/>
            </div>
          </div>
        </aside>
     </main>
    </div>
  );
}

export default Home
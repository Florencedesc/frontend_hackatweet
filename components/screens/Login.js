import React from "react";
import Head from 'next/head'
import styles from '../../styles/Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCat} from '@fortawesome/free-solid-svg-icons';
import SignIn from "../loginTasks/SignIn";
import SignUp from "../loginTasks/SignUp";
import LoginBtn from "../_shared/LoginBtn";


function Login() {



  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
     <main className={styles.container}>
        <aside className={styles.asideLeft} >
        </aside>
        <aside className={styles.asideRight}>
          <div className={styles.containerLogin}>
           
            <FontAwesomeIcon icon={faCat} alt="Logo" className={styles.logo} />
            <div>
              <h1>Welcome to Kelton and Florence's Social Network</h1>
              <h2>Signup today and get a free ice-cream </h2>
            </div>
            <div className={styles.containerBtn}>
              <LoginBtn text="Sign up"/>
              <LoginBtn text="Sign in"/>
            </div>
          </div>
          <button onClick={() => openModal()}>Open</button>
          <SignUp setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}/>
          <SignIn setIsOpen={setIsOpen} modalIsOpen={modalIsOpen}/>
        </aside>
     </main>
    </div>
  );
}

export default Login;

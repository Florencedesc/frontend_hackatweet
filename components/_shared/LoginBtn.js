import React from 'react'
import styles from '../../styles/Login.module.css'

function LoginBtn({text, onClick, setIsOpen }) {

  
  return (
    <div>
        <button onClick={() => setIsOpen()} className={styles.button}>{text}</button>
    </div>
  )
}

export default LoginBtn
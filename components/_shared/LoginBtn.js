import React from 'react'
import styles from '../../styles/Login.module.css'

function LoginBtn({text}) {
  return (
    <div>
        <button className={styles.button}>{text}</button>
    </div>
    
  )
}

export default LoginBtn
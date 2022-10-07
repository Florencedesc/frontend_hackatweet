import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../reducers/users';

function SignIn({modalIsOpen, setIsOpen}) {
  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  const [signInUsername, setSignInUsername] = useState("")
  const [signInPassword, setSignInPassword] = useState("")

	const handleConnection = () => {
    console.log(signInPassword)
    console.log(signInUsername)
		fetch('http://localhost:3001/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({lastname: data.lastname, username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
          setIsOpen(false);
					window.location.href = "/home";
				}
			});
	};

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          width: '400px',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    let subtitle;

  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
            <div>
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello SignIn</h2>
              <button onClick={closeModal}>close</button>
            </div>
            <form className={styles.formSignin}>
              <input className={styles.usernameStyle} type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
              <input className={styles.usernameStyle} type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
            </form>
              <button onClick={handleConnection}>Connexion</button>
        </Modal>
    </div>
    
  )
}

export default SignIn
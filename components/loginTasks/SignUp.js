import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../reducers/users';

function SignUp({modalIsOpen, setIsOpen}) {
  const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

  const [signUpLastname, setSignUpLastname] = useState("")
  const [signUpUsername, setSignUpUsername] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")

  const handleInscription = () => {
    console.log(signUpLastname);
    console.log(signUpUsername);
    console.log(signUpPassword);
		fetch('http://localhost:3001/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ lastname: signUpLastname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ lastname: signUpLastname, username: signUpUsername, token: data.token }));
					setSignUpUsername('');
					setSignUpPassword('');
          setIsOpen(false);
          window.location.href = "/home";

				}
			});
	};

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    let subtitle;
    Modal.setAppElement(document.getElementById('root'));
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div id='root'>
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
            <form className={styles.formSignup}>
              <input className={styles.usernameStyle} type="text" placeholder="lastname" id="signUpLastname" onChange={(e) => setSignUpLastname(e.target.value)} value={signUpLastname} />
              <input className={styles.usernameStyle} type="text" placeholder="username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
              <input className={styles.usernameStyle} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            </form>
              <button onClick={() => handleInscription()}>Inscription</button>
        </Modal>
    </div>
  )
}

export default SignUp
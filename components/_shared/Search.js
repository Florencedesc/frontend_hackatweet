import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { newTweet, removeTweet } from '../../reducers/tweet';
import LoginBtn from './LoginBtn'

function Search() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const tweet = useSelector((state) => state.tweet.value);


    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
        setCount(text.length);
    },[text])

	const handleTweet = () => {
        console.log(text)
        console.log(user)
        console.log("tweet: " + tweet)
            fetch('http://localhost:3001/tweet/tweet', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: text, user: user.token._id }),
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.result) {
                        dispatch(newTweet({content: data.content, username: data.username, date: data.date, token: data.token }));
                        setText('');
                    }
                });
        };

    

  return (
    <div className={styles.containerSearch}>
        <form className={styles.form}>
            <input className={styles.search} maxlength="280" types="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} value={text}/>
        </form>
        <div className={styles.containerCount}>
            <p>{count}/280</p>
            <button className={styles.btnTweet} onClick={() => handleTweet()}>Tweet</button>
        </div>
    </div>
  )
}

export default Search
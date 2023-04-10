import React from 'react';
import styles from './Error404.module.scss'
import error404 from '../../assets/image/404.gif'
import {useNavigate} from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate()
    const onClickHandler = () => {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <img src={error404} alt={'Page not found'} className={styles.image}/>
            <button onClick={onClickHandler} className={styles.button}>Back to home page</button>
        </div>
    );
};

export default Error404;
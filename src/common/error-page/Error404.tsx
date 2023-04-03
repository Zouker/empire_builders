import React from 'react';
import styles from './Error404.module.scss'
import error404 from '../../assets/image/404.gif'

const Error404 = () => {

    return (
        <div className={styles.container}>
            <img src={error404} alt={'Page not found'} className={styles.image}/>
        </div>
    );
};

export default Error404;
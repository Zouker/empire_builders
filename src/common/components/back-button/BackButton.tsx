import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from './BackButton.module.scss'

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
        navigate('..', {replace: true});
    }
    return (
        <div className={styles.container}>
            <button onClick={goBack} className={styles.backButton}>
              <span className={styles.arrow}>←</span>
              <span>Back</span>
            </button>
        </div>
    );
};

export default BackButton;
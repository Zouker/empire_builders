import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from './BackButton.module.scss'
import backButton from '../../../assets/image/back-arrow.svg'

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
        navigate('/');
    }
    return (
        <div className={styles.container}>
            <button onClick={goBack} className={styles.backButton}>
                <img className={styles.image} src={backButton} alt={'back button'} />
            </button>
        </div>
    );
};

export default BackButton;
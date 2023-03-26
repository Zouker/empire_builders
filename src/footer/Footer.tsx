import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={styles.container}>
                <div className={styles.copyright}>© 2023 All Rights Reserved</div>
            </div>
        </div>
    );
};
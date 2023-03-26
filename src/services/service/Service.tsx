import React from 'react';
import styles from './Service.module.scss'

type ServicePropsType = {
    id: string
    title: string
    description: string
    backgroundImage: string
}

const Service: React.FC<ServicePropsType> = ({title, description, backgroundImage}) => {
    return (
        <div className={styles.service}>
            <div className={styles.icon} style={{backgroundImage}}></div>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <span className={styles.description}>
              {description}
            </span>
        </div>
    );
};

export default Service;
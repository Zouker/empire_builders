import React from 'react';
import styles from './Project.module.scss'
import {NavLink} from "react-router-dom";

type ProjectPropsType = {
    id: string
    title: string
    backgroundImage: string
    link: string
}

const Project: React.FC<ProjectPropsType> = ({title, backgroundImage, link}) => {
    return (
        <div className={styles.project}>
            <div className={styles.image} style={{backgroundImage}}>
                <NavLink to={link} className={styles.viewBtn}>View the slideshow</NavLink>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{title}</h3>
            </div>
        </div>
    );
};

export default Project;
import React from 'react';
import styles from './Portfolio.module.scss'
import Project from "./project/Project";
import {projectsData} from '../common/data/projects-data';
import {Title} from '../common/components/title/Title';

const Portfolio = () => {
    return (
        <div id={'portfolio'} className={styles.portfolioBlock}>
            <div className={styles.container}>
                <Title text={'Portfolio'}/>
                <div className={styles.projects}>
                    {projectsData.map(p =>
                        <Project key={p.id}
                                 id={p.id}
                                 title={p.title}
                                 backgroundImage={p.backgroundImage}
                                 link={p.link}
                        />)}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
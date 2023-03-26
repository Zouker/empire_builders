import React from 'react';
import styles from './Services.module.scss'
import Service from "./service/Service";
import {servicesData} from "../common/data/service-data";
import {Title} from '../common/components/title/Title';

const Services = () => {
    return (
        <div className={styles.servicesBlock}>
            <div className={styles.container}>
               <Title text={'Services'}/>
                <div className={styles.services}>
                    {servicesData.map(s =>
                        <Service key={s.id}
                                 id={s.id}
                                 title={s.title}
                                 description={s.description}
                                 backgroundImage={s.backgroundImage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
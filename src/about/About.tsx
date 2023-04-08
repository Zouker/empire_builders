import React from 'react';
import styles from "./About.module.scss";
import {Title} from "../common/components/title/Title";

const About = () => {
    return (
        <div id={'about'} className={styles.about}>
            <div className={styles.container}>
                <Title text={'About'}/>
                <div className={styles.info}>
                    <div className={styles.left}>
                        <h2>Eugene Shubin</h2>
                        <h3>Construction Company</h3>
                        <h3>Nantucket Island</h3>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.right}>
                        <h3>GC Services</h3>
                        <h3>New Builds</h3>
                        <h3>Renovations</h3>
                        <h3>Custom Cabinetry</h3>
                        <h3>Wood Countertops</h3>
                        <h3>CNC Work</h3>
                        <h3>Signs</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
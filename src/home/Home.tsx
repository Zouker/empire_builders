import React from 'react';
import Main from "../main/Main";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contacts from "../contacts/Contacts";
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.container}>
            <Main/>
            <About/>
            <Portfolio/>
            <Contacts/>
        </div>
    );
};

export default Home;
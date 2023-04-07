import React from 'react';
import Home from "../home/Home";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contacts from "../contacts/Contacts";
import styles from './Page.module.scss'

const Page = () => {
    return (
        <div className={styles.container}>
            <Home/>
            <About/>
            <Portfolio/>
            <Contacts/>
        </div>
    );
};

export default Page;
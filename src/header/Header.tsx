import React from 'react';
import styles from './Header.module.scss'
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Empire builders LOGO</div>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};

export default Header;
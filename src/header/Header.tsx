import React from 'react';
import styles from './Header.module.scss'
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";
import {useLocation} from "react-router-dom";

export const Header = () => {

    const location = useLocation();

    return (
        <div className={styles.header}>
            <div className={styles.logo}>Empire builders LOGO</div>

            {location.pathname !== '/'
                ? ''
                : <>
                    <Nav/>
                    <BurgerNav/>
                </>}
        </div>
    );
};
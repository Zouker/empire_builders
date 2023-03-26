import React from 'react';
import styles from './Nav.module.scss'
import {Link} from 'react-scroll';


export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link
                activeClass={styles.active}
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Home</Link>
            <Link
                activeClass={styles.active}
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >About</Link>
            <Link
                activeClass={styles.active}
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Portfolio</Link>
            <Link
                activeClass={styles.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contacts</Link>
        </div>
    );
};
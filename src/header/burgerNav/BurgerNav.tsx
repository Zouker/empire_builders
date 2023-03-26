import React, {useState} from 'react';
import styles from './BurgerNav.module.scss'
import {Link} from 'react-scroll';
import {Turn as Hamburger} from 'hamburger-react'


export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <div className={styles.burgerNav}>
            <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                <Link
                    activeClass={styles.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setMenuIsOpen(false)}
                >Home</Link>
                <Link
                    activeClass={styles.active}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setMenuIsOpen(false)}
                >About</Link>
                <Link
                    activeClass={styles.active}
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => setMenuIsOpen(false)}
                >Portfolio</Link>
                <Link
                    activeClass={styles.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setMenuIsOpen(false)}
                >Contacts</Link>
            </div>
            <div className={styles.burgerBtn}>
                <Hamburger color='#fc9900'
                           size={30}
                           toggled={menuIsOpen}
                           toggle={() => setMenuIsOpen(!menuIsOpen)}
                           duration={0.8}
                           onToggle={toggled => {
                               if (toggled) {
                                   setMenuIsOpen(true)
                               } else {
                                   setMenuIsOpen(false)
                               }
                           }}/>
            </div>
        </div>
    );
};
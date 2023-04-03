import React, {useState} from 'react';
import styles from './BurgerNav.module.scss'
import {Turn as Hamburger} from 'hamburger-react'
import {useNavigate} from "react-router-dom";

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0)

    const links = ['Home', 'About', 'Portfolio', 'Contacts'];
    const href = ['/', '/#about', '/#portfolio', '/#contacts']

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
        navigate(href[index]);
        setMenuIsOpen(false);
    };

    const link = links.map((el, index) => {
        return (
            <a
                key={index}
                href={href[index]}
                onClick={() => handleOnClick(index)}
                className={activeIndex === index ? styles.active : ''}
            >
                {el}
            </a>
        );
    });

    return (
        <div className={styles.burgerNav}>
            <div className={menuIsOpen ? `${styles.burgerNavItems} ${styles.show}` : styles.burgerNavItems}>
                {link}
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
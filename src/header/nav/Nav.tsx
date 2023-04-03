import React, {useState} from 'react';
import styles from './Nav.module.scss'
import {useNavigate} from "react-router-dom";

export const Nav = () => {

    const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0)

    const links = ['Home', 'About', 'Portfolio', 'Contacts'];
    const href = ['/', '/#about', '/#portfolio', '/#contacts']

    const handleOnClick = (index: number) => {
        setActiveIndex(index);
        navigate(href[index]);
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
        <div className={styles.nav}>
            {link}
        </div>
    );
};
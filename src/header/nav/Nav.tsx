import React from 'react';
import styles from './Nav.module.scss'
import {Link} from 'react-scroll';

export const Nav = () => {

    const links = ['Home', 'About', 'Portfolio', 'Contacts'];
    const href = ['main', 'about', 'portfolio', 'contacts']

    const link = links.map((el, index) => {
        return (
            <Link key={index}
                  activeClass={styles.active}
                  to={href[index]}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
            >
                {el}
            </Link>
        );
    });


    return (
        <div className={styles.nav}>
            {link}
        </div>
    );
};
import React from 'react';
import styles from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import Map from "../common/components/map/Map";
import instagram from '../assets/image/instagram.svg'
import email from '../assets/image/email.svg'
import phone from '../assets/image/phone.svg'
import office from '../assets/image/office.svg'

const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contacts}>
            <div className={styles.container}>
                <Title text={'Contacts'}/>
                <div className={styles.contactsInfo}>
                    <div>
                        <h2>Empire builders Nantucket</h2>
                        <h3> Eugene Shubin</h3>
                        <h3><a href={'mailto:empirebuilders.nantucket@gmail.com'}>
                            <img src={email} alt={'email'}
                                 className={styles.image}/>empirebuilders.nantucket@gmail.com</a>
                        </h3>
                        <h3><a href="tel:1-774-236-9258">
                            <img src={phone} alt={'phone'} className={styles.image}/>(774)
                            236-9258</a></h3>
                        <h3><img src={office} alt={'office'} className={styles.image}/>
                            <span>OFFICE: 48 Bartlett Rd, Nantucket, MA 02554</span></h3>
                        <h3>Follow us <a href='https://www.instagram.com/empire_builders_inc/' target="_blank"
                                         rel="noreferrer">
                            <img src={instagram} alt={'Instagram'} className={styles.image}
                                 style={{paddingLeft: '10px'}}/></a></h3>
                    </div>
                    <div>
                        <Map/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
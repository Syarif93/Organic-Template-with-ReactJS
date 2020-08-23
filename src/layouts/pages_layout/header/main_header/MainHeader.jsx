import React from 'react'
import styles from './MainHeader.module.scss'
import { IconContext } from 'react-icons/lib';

// Icons
import { FaUser } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Redux
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <div className={styles.mainHeader}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <div className={styles.email}>
                        <a href="//">
                            <IconContext.Provider value={{ size: 16, className: styles.emailIcon }}>
                                <MdEmail />
                            </IconContext.Provider>
                            Hello@ogani.com
                        </a>
                    </div>
                    <div className={styles.informations}>
                        <p>Free Shipping for all Order of $99</p>
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <ul>
                        <li className={`${styles.items} ${styles.socialMedia}`}>
                            <ul>
                                <li>
                                    <a href="//">
                                        <IconContext.Provider value={{ size: 16, className: styles.emailIcon }}>
                                            <FaFacebookF />
                                        </IconContext.Provider>
                                    </a>
                                </li>
                                <li>
                                    <a href="//">
                                        <IconContext.Provider value={{ size: 16, className: styles.emailIcon }}>
                                            <FaInstagram />
                                        </IconContext.Provider>
                                    </a>
                                </li>
                                <li>
                                    <a href="//">
                                        <IconContext.Provider value={{ size: 16, className: styles.emailIcon }}>
                                            <FaTwitter />
                                        </IconContext.Provider>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className={`${styles.items} ${styles.authentication}`}>
                            <Link to="/login">
                                <IconContext.Provider value={{ size: 16, className: styles.userIcon }}>
                                    <FaUser />
                                </IconContext.Provider>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MainHeader

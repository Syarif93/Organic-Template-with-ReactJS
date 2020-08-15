import React from 'react'
import styles from './Footer.module.scss'
import logo from '../../image/logo.png'
import { IconContext } from 'react-icons/lib'

// Icons
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <section className={styles.abouts}>
                    <div className={styles.logo}>
                        <a href="//"><img src={logo} alt="Logo"/></a>
                    </div>
                    <ul>
                        <li>Address: 60-49 Road 11378 New York</li>
                        <li>Phone: +65 11.188.888</li>
                        <li>Email: hello@colorlib.com</li>
                    </ul>
                </section>
                <section className={styles.links}>
                    <h6>Useful Links</h6>
                    <div className={styles.linksWrapper}>
                        <ul>
                            <li><a href="//">About Us</a></li>
                            <li><a href="//">About Our Shop</a></li>
                            <li><a href="//">Secure Shopping</a></li>
                            <li><a href="//">Delivery infomation</a></li>
                            <li><a href="//">Privacy Policy</a></li>
                            <li><a href="//">Our Sitemap</a></li>
                        </ul>
                        <ul>
                            <li><a href="//">Who We Are</a></li>
                            <li><a href="//">Our Services</a></li>
                            <li><a href="//">Projects</a></li>
                            <li><a href="//">Contact</a></li>
                            <li><a href="//">Innovation</a></li>
                            <li><a href="//">Testimonials</a></li>
                        </ul>
                    </div>
                </section>
                <section className={styles.contacts}>
                    <h6>Join Our Newsletter Now</h6>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <form>
                        <input type="text" placeholder="Enter your mail"/>
                        <button type="button">SUBSCRIBE</button>
                    </form>
                    <ul>
                        <li>
                            <a href="//">
                                <IconContext.Provider value={{ size: 16, className: styles.icon }}>
                                    <FaFacebookF />
                                </IconContext.Provider>
                            </a>
                        </li>
                        <li>
                            <a href="//">
                                <IconContext.Provider value={{ size: 16, className: styles.icon }}>
                                    <FaInstagram />
                                </IconContext.Provider>
                            </a>
                        </li>
                        <li>
                            <a href="//">
                                <IconContext.Provider value={{ size: 16, className: styles.icon }}>
                                    <FaTwitter />
                                </IconContext.Provider>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer

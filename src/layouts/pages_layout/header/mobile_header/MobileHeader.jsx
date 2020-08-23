import React, { useState, useRef, useEffect } from 'react'
import styles from './MobileHeader.module.scss'
import logo from '../../../../image/logo.png'
import { IconContext } from 'react-icons/lib'
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import './Transitions.scss'

// Icons
import { FaBars } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const MobileHeader = () => {
    const [showMenus, setShowMenus] = useState(false)
    const showMenusRef = useRef(null)

    const handleClick = (e) => {
        if(showMenusRef.current && showMenusRef.current.contains(e.target)) {
            return
        }

        setShowMenus(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div className={styles.mobileHeader}>
            <div className={styles.container}>
                <div className={styles.LogoAndHamburger}>
                    <div className={styles.logo}>
                        <a href="//">
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>
                    <div className={styles.hamburgerMenu}>
                        <a href="//" onClick={(e) => {
                            e.preventDefault()
                            setShowMenus(true)
                        }}>
                            <IconContext.Provider value={{ size: 22, className: styles.hamburgerMenuIcon }}>
                                <FaBars />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
                <div className={styles.cartsAndLikes}>
                    <div className={styles.likes}>
                        <a href="//">
                            <IconContext.Provider value={{ size: 20, className: styles.likesIcon }}>
                                <IoMdHeart />
                            </IconContext.Provider>
                            <span><p>3</p></span>
                        </a>
                    </div>
                    <div className={styles.carts}>
                        <a href="//">
                            <IconContext.Provider value={{ size: 17, className: styles.cartsIcon }}>
                                <FaShoppingBag />
                            </IconContext.Provider>
                            <span><p>2</p></span>
                            <div className={styles.soppingCount}>
                                <p>$150.00</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {
                showMenus && (
                    <div className={styles.activeMenus}></div>
                )
            }
            <CSSTransition in={showMenus} timeout={300} nodeRef={showMenusRef} unmountOnExit classNames="showMenus">
                <div className={styles.navMenus} ref={showMenusRef}>
                    <div className={styles.logo}>
                        <a href="//">
                            <img src={logo} alt="Logo"/>
                        </a>
                        <a href="//" onClick={(e) => {
                            e.preventDefault()
                            setShowMenus(false)}
                            }>
                            <IconContext.Provider value={{ color: "#DC143C", size: 35, className: styles.closeIcon }}>
                                <AiOutlineCloseSquare />
                            </IconContext.Provider>
                        </a>
                    </div>
                    <div className={styles.cartsAndLikes}>
                        <div className={styles.likes}>
                            <a href="//">
                                <IconContext.Provider value={{ size: 20, className: styles.likesIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                                <span><p>3</p></span>
                            </a>
                        </div>
                        <div className={styles.carts}>
                            <a href="//">
                                <IconContext.Provider value={{ size: 17, className: styles.cartsIcon }}>
                                    <FaShoppingBag />
                                </IconContext.Provider>
                                <span><p>2</p></span>
                                <div className={styles.soppingCount}>
                                    <p>$150.00</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className={styles.authentications}>
                        <a href="//">
                            <IconContext.Provider value={{ size: 16, className: styles.userIcon }}>
                                <FaUser />
                            </IconContext.Provider>
                            Login
                        </a>
                    </div>
                    <div className={styles.navigations}>
                        <ul>
                            <li>
                                <NavLink exact to="/" activeClassName={styles.active} onClick={() => setShowMenus(false)}>HOME</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/shop" activeClassName={styles.active} onClick={() => setShowMenus(false)}>SHOP</NavLink>
                            </li>
                            <li><a href="//">PAGES</a></li>
                            <li><a href="//">BLOG</a></li>
                            <li><a href="//">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className={styles.socialMedia}>
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
                    </div>
                    <div className={styles.contact}>
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
                </div>
            </CSSTransition>
        </div>
    )
}

export default MobileHeader

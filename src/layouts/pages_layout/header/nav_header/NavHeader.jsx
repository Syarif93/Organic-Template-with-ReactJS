import React from 'react'
import logo from '../../../../image/logo.png'
import { NavLink } from 'react-router-dom';
import styles from './NavHeader.module.scss'
import { IconContext } from 'react-icons/lib';

// Icons
import { IoMdHeart } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';

const NavHeader = () => {
    return (
        <div className={styles.navHeader}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="//">
                        <img src={logo} alt="Logo"/>
                    </a>
                </div>
                <div className={styles.navigations}>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName={styles.active}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/shop" activeClassName={styles.active}>SHOP</NavLink>
                        </li>
                        <li><a href="//">PAGES</a></li>
                        <li><a href="//">BLOG</a></li>
                        <li><a href="//">CONTACT</a></li>
                    </ul>
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
        </div>
    )
}

export default NavHeader

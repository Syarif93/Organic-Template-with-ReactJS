import React, { useState, useEffect, useRef } from 'react'
import styles from './SearchHeader.module.scss'
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './Transitions.scss'

// Icons
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import banner from '../../../../image/banner.jpg'

const SearchHeader = (props) => {
    const [toggleCatList, setToggleCatList] = useState(false)
    const [removeBanner, setRemoveBanner] = useState(false)
    const toggleCatListRef = useRef(null)

    let location = useLocation()
    useEffect(() => {
        if(location.pathname === "/" && props.matches !== true) {
            setToggleCatList(true)
        }
        if (location.pathname === "/") {
            setRemoveBanner(true)
        }
        return () => {
            setToggleCatList(false)
            setRemoveBanner(false)
        }
    }, [location, props.matches])

    useEffect(() => {
        props.matches && setToggleCatList(false)
        return () => {
            setToggleCatList(true)
        }
    }, [props.matches])

    return (
        <div className={styles.searchHeader}>
            <div className={styles.container}>
                <div className={styles.categories}>
                    <a href="/#/" onClick={(e) => {
                        e.preventDefault()
                        setToggleCatList(!toggleCatList)
                        }}>
                        <div className={styles.titleWrapper}>
                            <IconContext.Provider value={{ size: 16, className: styles.barsIcon }}>
                                <FaBars />
                            </IconContext.Provider>
                            <h4 className={styles.title}>Categories</h4>
                        </div>
                        <IconContext.Provider value={{ size: 20, className: styles.arrowDownIcon }}>
                            <MdKeyboardArrowDown />
                        </IconContext.Provider>
                    </a>
                    <CSSTransition in={toggleCatList} timeout={300} nodeRef={toggleCatListRef} unmountOnExit classNames="toggleCatList">
                        <ul className={styles.categoryList} ref={toggleCatListRef}>
                            <li><a href="/#/">Fresh Meat</a></li>
                            <li><a href="/#/">Vegetables</a></li>
                            <li><a href="/#/">Fruit & Nut Gifts</a></li>
                            <li><a href="/#/">Fresh Berries</a></li>
                            <li><a href="/#/">Ocean Food</a></li>
                            <li><a href="/#/">Butter & Eggs</a></li>
                            <li><a href="/#/">Fast Foods</a></li>
                            <li><a href="/#/">Fresh Union</a></li>
                            <li><a href="/#/">Papaya & Crisps</a></li>
                            <li><a href="/#/">Oatmeal</a></li>
                            <li><a href="/#/">Fresh Bananas</a></li>
                        </ul>
                    </CSSTransition>
                </div>
                <div className={styles.searchBanner}>
                    <div className={styles.searchPhone}>
                        <div className={styles.search}>
                            <div className={styles.inputWrapper}>
                                <input type="search" placeholder="What do you need?" />
                            </div>
                            <button type="submit">Search</button>
                        </div>
                        <div className={styles.phone}>
                            <div className={styles.phoneIconWrapper}>
                                <IconContext.Provider value={{ size: 15, className: styles.phoneIcon }}>
                                    <FaPhoneAlt />
                                </IconContext.Provider>
                            </div>
                            <div className={styles.phoneInfo}>
                                <h4 className={styles.phoneNumber}>+65 11.188.888</h4>
                                <span className={styles.phoneDesc}>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    {
                        removeBanner && (
                            <div className={styles.bannerWrapper}>
                                <div className={styles.banner} style={{backgroundImage: `url(${banner})`}}>
                                    <div className={styles.bannerText}>
                                        <span>FRUIT FRESH</span>
                                        <h2>Vegetable<br/>100% Organic</h2>
                                        <p>Free Pickup and Delivery Available</p>
                                        <a href="/#/" className={styles.btnShop}>SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchHeader

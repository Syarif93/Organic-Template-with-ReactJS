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

const SearchHeader = () => {
    const [toggleCatList, setToggleCatList] = useState(false)
    const toggleCatListRef = useRef(null)

    let location = useLocation()
    useEffect(() => {
        if(location.pathname === "/") {
            setToggleCatList(true)
        }
        return () => {
            setToggleCatList(false)
        }
    }, [location])

    return (
        <div className={styles.searchHeader}>
            <div className={styles.container}>
                <div className={styles.categories}>
                    <a href="//" onClick={() => setToggleCatList(!toggleCatList)}>
                        <IconContext.Provider value={{ size: 16, className: styles.barsIcon }}>
                            <FaBars />
                        </IconContext.Provider>
                        <h4 className={styles.title}>Categories</h4>
                        <IconContext.Provider value={{ size: 20, className: styles.arrowDownIcon }}>
                            <MdKeyboardArrowDown />
                        </IconContext.Provider>
                    </a>
                    <CSSTransition in={toggleCatList} timeout={300} nodeRef={toggleCatListRef} unmountOnExit classNames="toggleCatList">
                        <ul className={styles.categoryList} ref={toggleCatListRef}>
                            <li><a href="//">Fresh Meat</a></li>
                            <li><a href="//">Vegetables</a></li>
                            <li><a href="//">Fruit & Nut Gifts</a></li>
                            <li><a href="//">Fresh Berries</a></li>
                            <li><a href="//">Ocean Food</a></li>
                            <li><a href="//">Butter & Eggs</a></li>
                            <li><a href="//">Fast Foods</a></li>
                            <li><a href="//">Fresh Union</a></li>
                            <li><a href="//">Papaya & Crisps</a></li>
                            <li><a href="//">Oatmeal</a></li>
                            <li><a href="//">Fresh Bananas</a></li>
                        </ul>
                    </CSSTransition>
                </div>
                <div className={styles.search}>
                    <div className={styles.inputWrapper}>
                        <select name="" id="">
                            <option value="">All Categories</option>
                            <option value="">Test</option>
                            <option value="">Test 2</option>
                        </select>
                        <IconContext.Provider value={{ size: 20, className: styles.arrowDownIcon }}>
                            <MdKeyboardArrowDown />
                        </IconContext.Provider>
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
        </div>
    )
}

export default SearchHeader

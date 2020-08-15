import React from 'react'
import styles from './Header.module.scss'
import MainHeader from './main_header/MainHeader';
import NavHeader from './nav_header/NavHeader';
import SearchHeader from './search_header/SearchHeader';

const Header = () => {
    return (
        <header className={styles.header}>
            <MainHeader />
            <NavHeader />
            <SearchHeader />
        </header>
    )
}

export default Header

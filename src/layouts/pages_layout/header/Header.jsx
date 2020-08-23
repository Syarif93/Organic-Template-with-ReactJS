import React, { useState, useEffect, Fragment } from 'react'
import MainHeader from './main_header/MainHeader';
import NavHeader from './nav_header/NavHeader';
import SearchHeader from './search_header/SearchHeader';
import MobileHeader from './mobile_header/MobileHeader';

const Header = () => {
    const [matches, setMatches] = useState(window.matchMedia('(max-width: 900px)').matches)
    
    useEffect(() => {
        const handler = e => setMatches(e.matches)
        window.matchMedia('(max-width: 900px)').addListener(handler)
    }, [])
    return (
        <header>
            {
                !matches ? (
                    <Fragment>
                        <MainHeader />
                        <NavHeader />
                    </Fragment>
                ) : (
                    <MobileHeader />
                )
            }
            <SearchHeader matches={matches} />
        </header>
    )
}

export default Header

import React, { useState, useEffect, useRef } from 'react'
import styles from './Homepage.module.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
import { CSSTransition } from 'react-transition-group';
import { AllItems, OrangesItems, FreshMeatsItems, VegetablesItems, FastFoodItems } from './FeaturedProductItems';
import { IconContext } from 'react-icons/lib';

// Image
import cat1 from '../../image/cat-1.jpg'
import cat2 from '../../image/cat-2.jpg'
import cat3 from '../../image/cat-3.jpg'
import cat4 from '../../image/cat-4.jpg'
import cat5 from '../../image/cat-5.jpg'
import banner1 from '../../image/Banners/banner-1.jpg'
import banner2 from '../../image/Banners/banner-2.jpg'
import blog1 from '../../image/Blog/blog-1.jpg'
import blog2 from '../../image/Blog/blog-2.jpg'
import blog3 from '../../image/Blog/blog-3.jpg'

// Icons
import { FaRegCalendar } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';

const Homepage = () => {
    const [activNav, setActivNav] = useState('all')
    const navRef = useRef(null)
    const defaultActiveNavRef = useRef(null)
    const cssTransitionsRef = useRef(null)
    
    const [defaultNav, setDefaultNav] = useState({
        width: null,
        left: null
    })
    useEffect(() => {
        setDefaultNav({
            width: defaultActiveNavRef.current.offsetWidth,
            left: defaultActiveNavRef.current.offsetLeft
        })
    }, [])

    const [navLeft, setNavLeft] = useState(null)
    const [navWidth, setNavWidth] = useState(null)
    useEffect(() => {
        setNavLeft(navRef.current?.firstChild.offsetLeft)
        setNavWidth(navRef.current?.firstChild.offsetWidth)
    }, [])
    const calcLeft = (e) => {
        const left = e.offsetLeft
        setNavLeft(left)
    }
    const calcWidth = (e) => {
        const width = e.offsetWidth
        setNavWidth(width)
    }

    const NavItem = (props) => {
        return (
            <li >
                <a 
                    href="//" 
                    onClick={(e) => {
                        props.goToItem && setActivNav(props.goToItem)
                        calcLeft(e.target)
                        calcWidth(e.target)
                    }}
                    ref={props.defaultActiveNav}>
                    {props.children}
                </a>
            </li>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.sliders}>
                <Slider 
                    dots={true}
                    infinite={true}
                    slidesToShow={4}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={5000}
                    pauseOnHover={true} >
                        <div className={styles.slider}>
                            <img src={cat1} alt="Item"/>
                            <h5>
                                <a href="//">Vegetables</a>
                            </h5>
                        </div>
                        <div className={styles.slider}>
                            <img src={cat2} alt="Item"/>
                            <h5>
                                <a href="//">Dried Fruit</a>
                            </h5>
                        </div>
                        <div className={styles.slider}>
                            <img src={cat3} alt="Item"/>
                            <h5>
                                <a href="//">Vegetables</a>
                            </h5>
                        </div>
                        <div className={styles.slider}>
                            <img src={cat4} alt="Item"/>
                            <h5>
                                <a href="//">Vegetables</a>
                            </h5>
                        </div>
                        <div className={styles.slider}>
                            <img src={cat5} alt="Item"/>
                            <h5>
                                <a href="//">Fresh Meat</a>
                            </h5>
                        </div>
                        <div className={styles.slider}>
                            <img src={cat1} alt="Item"/>
                            <h5>
                                <a href="//">Fresh Fruit</a>
                            </h5>
                        </div>
                </Slider>
            </div>

            <div className={styles.featuredProduct}>
                <div className={styles.title}>
                    <h2>Featured Product</h2>
                </div>
                <div className={styles.featuredWrapper}>
                    <ul className={styles.featuredControls}>
                        <div 
                            className={styles.marker} 
                            style={
                                activNav === 'all' ? {width: defaultNav.width, left: defaultNav.left} : {width: navWidth, left: navLeft}
                            }
                        ></div>
                        <NavItem goToItem="all" defaultActiveNav={defaultActiveNavRef}>
                            All
                        </NavItem>
                        <NavItem goToItem="oranges">
                            Oranges
                        </NavItem>
                        <NavItem goToItem="freshMeat">
                            Fresh Meat
                        </NavItem>
                        <NavItem goToItem="vegetables">
                            Vegetables
                        </NavItem>
                        <NavItem goToItem="fastfood">
                            Fastfood
                        </NavItem>
                    </ul>
                    <ul className={styles.featuredItems}>
                        <div style={{width: '100%'}}>
                            <CSSTransition
                                in={activNav === 'all'}
                                timeout={300}
                                classNames="featuredItems"
                                unmountOnExit
                                nodeRef={cssTransitionsRef} >
                                    <AllItems cssTransitionsRef={cssTransitionsRef} />
                            </CSSTransition>
                            <CSSTransition
                                in={activNav === 'oranges'}
                                timeout={300}
                                classNames="featuredItems"
                                unmountOnExit
                                nodeRef={cssTransitionsRef} >
                                    <OrangesItems cssTransitionsRef={cssTransitionsRef} />
                            </CSSTransition>
                            <CSSTransition
                                in={activNav === 'freshMeat'}
                                timeout={300}
                                classNames="featuredItems"
                                unmountOnExit
                                nodeRef={cssTransitionsRef} >
                                    <FreshMeatsItems cssTransitionsRef={cssTransitionsRef} />
                            </CSSTransition>
                            <CSSTransition
                                in={activNav === 'vegetables'}
                                timeout={300}
                                classNames="featuredItems"
                                unmountOnExit
                                nodeRef={cssTransitionsRef} >
                                    <VegetablesItems cssTransitionsRef={cssTransitionsRef} />
                            </CSSTransition>
                            <CSSTransition
                                in={activNav === 'fastfood'}
                                timeout={300}
                                classNames="featuredItems"
                                unmountOnExit
                                nodeRef={cssTransitionsRef} >
                                    <FastFoodItems cssTransitionsRef={cssTransitionsRef} />
                            </CSSTransition>
                        </div>
                    </ul>
                </div>
            </div>

            <div className={styles.banners}>
                <div className={styles.banner}>
                    <img src={banner1} alt="Banner1"/>
                    <div className={styles.bannerText}>
                        <h3>Summer Fruit</h3>
                        <p>100% Pure Nature Fruit Juice</p>
                        <a href="//">SHOP NOW</a>
                    </div>
                </div>
                <div className={styles.banner}>
                    <img src={banner2} alt="Banner2"/>
                    <div className={styles.bannerText}>
                        <h3>Dried & Drink Fruits</h3>
                        <p>With 25% off All Teas</p>
                        <a href="//">SHOP NOW</a>
                    </div>
                </div>
            </div>

            <div className={styles.fromTheBlog}>
                <div className={styles.title}>
                    <h2>From The Blog</h2>
                </div>
                <div className={styles.blogContents}>
                    <div className={styles.blogContent}>
                        <div className={styles.blogImage}>
                            <img src={blog1} alt="Blog1"/>
                        </div>
                        <div className={styles.blogText}>
                            <ul>
                                <li>
                                    <IconContext.Provider value={{ size: 16, className: styles.calendatIcon }}>
                                        <FaRegCalendar />
                                    </IconContext.Provider>
                                    May 4,2019
                                </li>
                                <li>
                                    <IconContext.Provider value={{ size: 16, className: styles.commentIcon }}>
                                        <FaRegComment />
                                    </IconContext.Provider>
                                    5
                                </li>
                            </ul>
                            <h5><a href="//">Cooking tips make cooking simple</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                    <div className={styles.blogContent}>
                        <div className={styles.blogImage}>
                            <img src={blog2} alt="Blog2"/>
                        </div>
                        <div className={styles.blogText}>
                            <ul>
                                <li>
                                    <IconContext.Provider value={{ size: 20, className: styles.calendatIcon }}>
                                        <FaRegCalendar />
                                    </IconContext.Provider>
                                    May 4,2019
                                </li>
                                <li>
                                    <IconContext.Provider value={{ size: 20, className: styles.commentIcon }}>
                                        <FaRegComment />
                                    </IconContext.Provider>
                                    5
                                </li>
                            </ul>
                            <h5><a href="//">6 ways to prepare breakfast for 30</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                    <div className={styles.blogContent}>
                        <div className={styles.blogImage}>
                            <img src={blog3} alt="blog3"/>
                        </div>
                        <div className={styles.blogText}>
                            <ul>
                                <li>
                                    <IconContext.Provider value={{ size: 20, className: styles.calendatIcon }}>
                                        <FaRegCalendar />
                                    </IconContext.Provider>
                                    May 4,2019
                                </li>
                                <li>
                                    <IconContext.Provider value={{ size: 20, className: styles.commentIcon }}>
                                        <FaRegComment />
                                    </IconContext.Provider>
                                    5
                                </li>
                            </ul>
                            <h5><a href="//">Visit the clean farm in the US</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage

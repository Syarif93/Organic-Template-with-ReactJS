import React from 'react'
import styles from './Homepage.module.scss'
import { IconContext } from 'react-icons/lib'

// Images
import feature1 from '../../image/Featured/feature-1.jpg'
import feature2 from '../../image/Featured/feature-2.jpg'
import feature3 from '../../image/Featured/feature-3.jpg'
import feature4 from '../../image/Featured/feature-4.jpg'
import feature5 from '../../image/Featured/feature-5.jpg'
import feature6 from '../../image/Featured/feature-6.jpg'
import feature7 from '../../image/Featured/feature-7.jpg'
import feature8 from '../../image/Featured/feature-8.jpg'

// Icons
import { IoMdHeart } from 'react-icons/io';

export const AllItems = (props) => {
    return (
        <li className={styles.allItems} ref={props.cssTransitionsRef}>
            <ul>
                <li>
                    <div className={styles.image}>
                        <img src={feature1} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature2} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature3} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature4} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature5} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature6} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature7} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature8} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
            </ul>
        </li>
    )
}

export const OrangesItems = (props) => {
    return (
        <li className={styles.allItems} ref={props.cssTransitionsRef}>
            <ul>
                <li>
                    <div className={styles.image}>
                        <img src={feature1} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature4} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature6} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
            </ul>
        </li>
    )
}

export const FreshMeatsItems = (props) => {
    return (
        <li className={styles.allItems} ref={props.cssTransitionsRef}>
            <ul>
                <li>
                    <div className={styles.image}>
                        <img src={feature1} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature3} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature5} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature7} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
            </ul>
        </li>
    )
}

export const VegetablesItems = (props) => {
    return (
        <li className={styles.allItems} ref={props.cssTransitionsRef}>
            <ul>
                <li>
                    <div className={styles.image}>
                        <img src={feature2} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature3} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature5} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature7} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
            </ul>
        </li>
    )
}

export const FastFoodItems = (props) => {
    return (
        <li className={styles.allItems} ref={props.cssTransitionsRef}>
            <ul>
                <li>
                    <div className={styles.image}>
                        <img src={feature2} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature4} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature6} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6 className="productName">
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5 className="price">
                            $30.00
                        </h5>
                    </div>
                </li>
                <li>
                    <div className={styles.image}>
                        <img src={feature8} alt=""/>
                        <div className={styles.actions}>
                            <a href="//" className={styles.addToCart}>Add to Cart</a>
                            <a href="//" className={styles.favorite}>
                                <IconContext.Provider value={{ color: '#cccccc', size: 20, className: styles.likeIcon }}>
                                    <IoMdHeart />
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className={styles.itemText}>
                        <h6>
                            <a href="//">Crab Pool Security</a>
                        </h6>
                        <h5>
                            $30.00
                        </h5>
                    </div>
                </li>
            </ul>
        </li>
    )
}
import React from 'react'
import styles from './Shop.module.scss'
import TinySlider from 'tiny-slider-react'

// Images
import feature1 from '../../image/Featured/feature-1.jpg'
import feature2 from '../../image/Featured/feature-2.jpg'
import feature3 from '../../image/Featured/feature-3.jpg'
import feature4 from '../../image/Featured/feature-4.jpg'
import feature5 from '../../image/Featured/feature-5.jpg'
import feature6 from '../../image/Featured/feature-6.jpg'
import feature7 from '../../image/Featured/feature-7.jpg'
import feature8 from '../../image/Featured/feature-8.jpg'
import cat1 from '../../image/cat-1.jpg'
import cat2 from '../../image/cat-2.jpg'
import cat3 from '../../image/cat-3.jpg'
import cat4 from '../../image/cat-4.jpg'
import cat5 from '../../image/cat-5.jpg'

// Icons
import { IoMdHeart } from 'react-icons/io';
import { IconContext } from 'react-icons/lib'

const Shop = () => {
    const settings = {
        nav: false,
        mouseDrag: true,
        items: 1,
        gutter: 20,
        center: true,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        lazyload: true,
        responsive: {
            '700' : {
                items: 2,
                center: false
            },
            '1025' : {
                items: 3
            }
        }
    }

    return (
        <div className={styles.shop}>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <section className={styles.categories}>
                        <h4>Categories</h4>
                        <ul>
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
                        </ul>
                    </section>
                </aside>
                <main className={styles.products}>
                    <div className={styles.sliders}>
                        <TinySlider settings={settings}>
                            <div className="item" style={{position: "relative"}}>
                                <div className={styles.img}>
                                    <img src={cat1} alt="" />
                                    <div className={styles.discount}><span>-20%</span></div>
                                </div>
                                <div className={styles.productText}>
                                    <div className={styles.textWrap}>
                                        <h5><a href="//">Vegetables’package</a></h5>
                                        <p>$35.00 <span>$36.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{position: "relative"}}>
                                <div className={styles.img}>
                                    <img src={cat2} alt="" />
                                    <div className={styles.discount}><span>-20%</span></div>
                                </div>
                                <div className={styles.productText}>
                                    <div className={styles.textWrap}>
                                        <h5><a href="//">Vegetables’package</a></h5>
                                        <p>$35.00 <span>$36.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{position: "relative"}}>
                                <div className={styles.img}>
                                    <img src={cat3} alt="" />
                                    <div className={styles.discount}><span>-20%</span></div>
                                </div>
                                <div className={styles.productText}>
                                    <div className={styles.textWrap}>
                                        <h5><a href="//">Vegetables’package</a></h5>
                                        <p>$35.00 <span>$36.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{position: "relative"}}>
                                <div className={styles.img}>
                                    <img src={cat4} alt="" />
                                    <div className={styles.discount}><span>-20%</span></div>
                                </div>
                                <div className={styles.productText}>
                                    <div className={styles.textWrap}>
                                        <h5><a href="//">Vegetables’package</a></h5>
                                        <p>$35.00 <span>$36.00</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="item" style={{position: "relative"}}>
                                <div className={styles.img}>
                                    <img src={cat5} alt="" />
                                    <div className={styles.discount}><span>-20%</span></div>
                                </div>
                                <div className={styles.productText}>
                                    <div className={styles.textWrap}>
                                        <h5><a href="//">Vegetables’package</a></h5>
                                        <p>$35.00 <span>$36.00</span></p>
                                    </div>
                                </div>
                            </div>
                        </TinySlider>
                    </div>
                    <div className={styles.productsList}>
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
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Shop

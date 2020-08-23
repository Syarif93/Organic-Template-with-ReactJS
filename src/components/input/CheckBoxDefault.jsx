import React from 'react'
import styles from './CheckBoxDefault.module.scss'
import { IconContext } from 'react-icons/lib';

// Icon
import { FaCheck } from 'react-icons/fa';

const CheckBoxDefault = ({ name, className, title }) => {
    return (
        <div className={`${styles.checkBoxDefault} ${className}`}>
            <input type="checkbox" name={name} id="remember" />
            <div className={styles.checkBoxWrapper}>
                <IconContext.Provider value={{ size: 15, className: styles.checkmark }}>
                    <FaCheck />
                </IconContext.Provider>
            </div>
            <label htmlFor="remember">{title}</label>
        </div>
    )
}

export default CheckBoxDefault

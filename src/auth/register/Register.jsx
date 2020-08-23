import React from 'react'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className={styles.register}>
            <div className={styles.contentWrapper}>
                <h2>Register</h2>
                <form>
                    <input type="text" name="name" placeholder="Full Name" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="password" name="passwordConfirm" placeholder="Confirm Password" />
                    <button type="submit">Login</button>
                </form>
                <span>Already have an account? <Link to="/login">Sign in now</Link> </span>
            </div>
        </div>
    )
}

export default Register

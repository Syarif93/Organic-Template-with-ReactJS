import React from 'react'
import styles from './Login.module.scss'
import CheckBoxDefault from '../../components/input/CheckBoxDefault'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.contentWrapper}>
                <h2>Login</h2>
                <form>
                    <input type="text" name="username" placeholder="Username / Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <CheckBoxDefault name="rememberMe" title="Remember me" />
                    <button type="submit">Login</button>
                </form>
                <span>Not a member? <Link to="/register">Sign up now</Link> </span>
            </div>
        </div>
    )
}

export default Login

import React from 'react';
import styles from './App.module.scss'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// Layouts
import AppRoute from './layouts/AppRoute';
import pagesLayout from './layouts/pages_layout/pagesLayout';
import authLayout from './layouts/auth_layout/authLayout';

// Pages
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

// Authentications
import Login from './auth/login/Login'
import Register from './auth/register/Register'

function App() {
  
  return (
    <Router basename="Organic-Template-with-ReactJS">
      <div className={styles.App}>
        <Switch>
          <AppRoute exact path="/" layout={pagesLayout} component={Homepage} />
          <AppRoute exact path="/shop" layout={pagesLayout} component={Shop} />
          <AppRoute exact path="/login" layout={authLayout} component={Login} />
          <AppRoute exact path="/register" layout={authLayout} component={Register} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;

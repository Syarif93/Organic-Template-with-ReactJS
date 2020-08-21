import React from 'react';
import styles from './App.module.scss'
import Header from './layouts/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './layouts/footer/Footer';

// Pages
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';

function App() {
  return (
    <Router basename="Organic-Template-with-ReactJS">
      <div className={styles.App}>
        <Header />

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
        </Switch>

        <Footer />
      </div>

    </Router>
  );
}

export default App;

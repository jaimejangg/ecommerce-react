import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/Sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>  
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

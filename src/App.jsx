import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Classify from './pages/Classify/Classify';
import Topic from './pages/Topic/Topic';
import ShopCart from './pages/ShopCart/ShopCart';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Authuser from './pages/Authuser';
import KeyContnet from './pages/KeyContent/KeyContent';

import AppFooter from './components/AppFooter/AppFooter';

import './App.styl';


class App extends Component {
  render() {
    return (
      <div id="app">
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route path="/home" component={Home} />
        <Route path="/classify" component={Classify} />
        <Route path="/topic" component={Topic} />
        <Route path="/shopcart" component={ShopCart} />
        <Authuser path="/profile" component={Profile} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/keycontent" component={KeyContnet} />
        <Route component={NotFound} />
      </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;

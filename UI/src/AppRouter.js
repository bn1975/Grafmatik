import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';

import About from './components/about';
import Contact from './components/contact';
import Feed from './components/feed';
import MapView from './components/mapview';
// import Stats from './components/stats';
import Login from './components/login';
import FStack from './components/FStackContainer';
import Profile from './components/profile';
import User from './components/user';

const AppRouter = () =>
  <Router history={hashHistory}>

    <Route path="/" component={App}>
      <Route path="/About" component={About}></Route>
      <Route path="/Contact" component={Contact}></Route>
      {/* <Route path="/Stats" component={Stats}></Route> */}
      <Route path="/Login" component={Login}></Route>
      <Route path="/Upload" component={FStack}></Route>
    </Route>

    <Route path="/user" component={User}>
      <Route path="/user/profile" component={Profile}></Route>
      <Route path="/user/map" component={MapView}></Route>
      <Route path="/user/feed" component={Feed}></Route>
    </Route>

  </Router>


export default AppRouter;

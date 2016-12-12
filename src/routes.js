import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Artists from './components/Artists/Artists.jsx';
import Header from './components/Header/Header.jsx';
import Users from './components/Users/Users.jsx';
import UserAuth from './components/UserAuth/UserAuth.jsx';

module.exports = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path='/UserAuth' component={UserAuth} />
  <Route path='/app'>
    <IndexRoute component={App} />
    <Route path='/users' component={Users} />
    <Route path='/artists' component={Artists} />
    <Route path='/Header' component={Header} />
  </Route>
  </Route>
);

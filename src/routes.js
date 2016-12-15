import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Artists from './components/Artists/Artists.jsx';
import Header from './components/Header/Header.jsx';
import Users from './components/Users/Users.jsx';
import FairList from './components/Header/Fairs/FairsList/FairsList.jsx';

module.exports = (
  <Route path='/'>
    <IndexRoute component={HomePage} />
    <Route path='/app' component={App}>
      <Route path='/users' component={Users} />
      <Route path='/artists' component={Artists} />
      <Route path='/fair' component={FairList} />
    </Route>
  </Route>
);
      // <IndexRoute component={App} />

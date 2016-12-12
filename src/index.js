import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
import { browserHistory, Router } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} />,
  document.querySelector('#root-container')
);

import React, { Component } from 'react';
import Fairs from './Fairs/Fairs.jsx';
import styles from './Header.css';

class Header extends Component {

  render() {
    return (
      <div className="header-container">
      <h1>ARTrade</h1>
      <Fairs />
      </div>
    )
  }
}

export default Header;

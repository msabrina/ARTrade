import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Fairs from './Fairs/Fairs.jsx';
import styles from './Header.css';
import FairList from './Fairs/FairsList/FairsList.jsx'

class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fairs: this.props.fairs,
  //   }
  // }

  render() {
    return (
      <div className={styles["header-container"]}>
        <div className={styles["home-header"]}>
          <img src="" alt="" />
          <h1 className={styles["ARTrade"]}>ARTrade: &#x2765; </h1>
        </div>
      <Fairs
        fairs={this.props.fairs}
        changeFair={this.props.changeFair}
      />
      <Link to='/artists'>Create Post</Link>
      </div>
    )
  }
}

export default Header;

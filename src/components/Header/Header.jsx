import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Fairs from './Fairs/Fairs.jsx';
import styles from './Header.css';
import FairList from './Fairs/FairsList/FairsList.jsx'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFair: {},
    }
  }

  render() {
    // const fairsArr = this.props.fairs.map((item, i) =>
    //   <div key={i} onClick={() => this.props.changeFair(i)}>{item.title}</div>
    // )
    return (
      <div className={styles["header-container"]}>
        <div className={styles["home-header"]}>
          <img src="" alt="" />
          <h1 className={styles["ARTrade"]}>ARTrade: &#x2765; </h1>
        </div>
      <Fairs
        merged={this.props.merged}
        changeFair={this.props.changeFair}
        activeFair={this.props.activeFair}
        // {fairsArr}
      />
      <Link to='/artists'>Create Post</Link>
      </div>
    );
  }
}

export default Header;

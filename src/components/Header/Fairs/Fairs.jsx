import React, { Component } from 'react';
import FairsList from './FairsList/FairsList.jsx';
import styles from './Fairs.css';

class Fairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // activeFair: {},
    }
  }


  render() {
      const fairsArr = this.props.merged.map((item, i) =>
      <div key={i} onClick={() => this.props.changeFair(i)}>{item.fair.title}</div>
    );

    return(
      <div className={styles["nav"]}>
        <div className={styles["nav-content"]}>
          {fairsArr}
        </div>
      </div>
    );
  }
}

export default Fairs;

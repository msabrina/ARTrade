import React, { Component } from 'react';
import FairsList from './FairsList/FairsList.jsx';
import styles from './Fairs.css';

class Fairs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fairs: [],
    }
  }

  displayFairsList() {
    return this.props.fairs.map((item, i) =>
      <FairsList
        key={i}
        title={item.title}
        // images={item.images}
        // description={item.description}
        // id={item.post_id}
        // product={item.product}
        // item={item}
        clickMethod={this.props.changeFair}
      />
      );
  }


  render() {
    return(
      <div className={styles["nav"]}>
      {this.displayFairsList()}
      </div>
    );
  }
}

export default Fairs;

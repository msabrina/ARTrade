import React, { Component } from 'react';
import FairsList from './FairsList/FairsList.jsx';
import styles from './Fairs.jsx';

class Fairs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fairs: [],
    }
  }

  // displayFairsList() {
  //   return this.props.fairs.map((item, i) =>
  //     <FairsList
  //       key={i}
  //       title={item.title}
  //       onClick={this.props.}
  //     />
  //     )
  // }

  render() {
    return(
      <div className="nav">
      <FairsList />
      </div>
    );
  }
}

export default Fairs;
      // {this.displayFairsList()}

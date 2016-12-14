import React, { Component } from 'react';
import FairsList from './FairsList/FairsList.jsx';
import styles from './Fairs.css';

class Fairs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    activeFair: {},
    }
  }


  // displayFairsList() {
  //   console.log(this.props, 'hayy');
  //   return this.props.fairsArr.map((item, i) =>
  //     <FairsList
  //       key={i}
  //       title={item.title}
  //       // images={item.images}
  //       images={['test']}
  //       // description={item.description}
  //       // id={item.post_id}
  //       // product={item.product}
  //       // item={item}
  //       clickMethod={this.props.changeFair}
  //     />
  //     );
  // }


  render() {
     const fairsArr = this.props.merged.map((item, i) =>
      <div key={i} onClick={() => this.props.changeFair(i)}>{item.fair.title}</div>
    );

     // const postArr = this.props.post.map((item, i) =>
     //  <div key={i} onClick={() => this.props.changeFair(i)}>{item.image_url}</div>


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

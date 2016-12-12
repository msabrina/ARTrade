import React, { Component } from 'react';
import styles from './Artists.css';
import CreatePost from './CreatePost/CreatePost.jsx';

class Artists extends Component {
  render() {
    return (
      <div>
        <div className={styles["app"]}>
          <CreatePost
            appendNewProduct={this.props.appendNewProduct}
          />
        </div>
      </div>
    );
  }
}

export default Artists;

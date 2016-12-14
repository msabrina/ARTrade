import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import styles from './Artists.css';
import CreatePost from './CreatePost/CreatePost.jsx';

class Artists extends Component {
  render() {
    return (
      <div>
        <div className={styles["app"]}>
          <CreatePost
            fairs={this.props.fairs}
            appendNewImage={this.props.appendNewImage}
          />
          <Link className="myPost" to="/MyPost" />
        </div>
      </div>
    );
  }
}

export default Artists;

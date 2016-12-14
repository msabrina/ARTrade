import React, { Component } from 'react';
import styles from './FairsList.css';

const FairsList = props => {
  const posts = props.activeFair.posts.map((post, i) => {
    return (
      <div key={i}>
        <img src={post.image_url} alt=""/>
        <p>{post.title}</p>
      </div>
    )
  })

  return (
    <div className={styles["fair-list"]}>
      <div className={styles["fair-item"]} >
        <h2>{props.activeFair.fair.title}</h2>
        <p id={styles['desc']}>{props.activeFair.fair.description}</p>
        <img src={props.activeFair.fair.image} alt=""/>
        {posts}
      </div>
    </div>
  );
}

export default FairsList;
        // <img src={props.images[0].url} alt={props.images[0].alt_text} />

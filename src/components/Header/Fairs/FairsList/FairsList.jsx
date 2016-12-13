import React, { Component } from 'react';
import styles from './FairsList.css';

const FairsList = props => (
  <div className={styles["fair-list"]}>
    <div className={styles["fair-item"]} >
      <h2>{props.activeFair.title}</h2>
      <p id={styles['desc']}>{props.activeFair.description}</p>
      <div className={styles['post-img']}>
      </div>
    </div>
  </div>
);

export default FairsList;
        // <img src={props.images[0].url} alt={props.images[0].alt_text} />

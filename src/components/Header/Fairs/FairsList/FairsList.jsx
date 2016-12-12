import React, { Component } from 'react';
import styles from './FairsList.css';

const FairsList = props => (
  <div className={styles["fair-list"]}>
    <div className={styles["fair-item"]} onClick={() => props.clickMethod(props.item)}>
      <h2>{props.title}</h2>
      <p id={styles['desc']}>{props.description}</p>
      <div className={styles['post-img']}>
        <img src={props.images[0].url} alt={props.images[0].alt_text} />
      </div>
    </div>
  </div>
);

export default FairsList;

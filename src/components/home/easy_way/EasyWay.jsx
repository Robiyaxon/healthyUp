import React from "react";
import styles from "./EasyWay.module.css";

function EasyWay() {
  return (
    <div className={styles.header}>
      <h2 className={styles.header_title}>
        Vazin yo`qotishning eng sodda va oson yollari
      </h2>
      <div className={styles.header_sport}></div>
      <div className={styles.header_food}></div>
    </div>
  );
}

export default EasyWay;

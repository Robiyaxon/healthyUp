import React from "react";

import p1 from '../../../assets/home/specialists/p1.png'

import styles from './Specialists.module.css'

export const Specialists = () => {
  return (
    <div className={styles.specialists}>
      <h1 className={styles.title}>Mutaxassislar</h1>
      <p className={styles.desc}>Saytimiz orqali eng yaxshi mutaxassislar orasiga qo'shiling</p>
      <div className={styles.block}>
        <div className={styles.box}>
           <div className={styles.img}></div>
        </div>
        <div className={styles.box}>
            <img src={p1} alt="" />
        </div>
        <div className={styles.box}>
            <img src={p1} alt="" />
        </div>
      </div>
    </div>
  );
};

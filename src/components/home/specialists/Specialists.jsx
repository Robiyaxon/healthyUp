import { Rate } from "antd";
import React, { useState } from "react";

import p1 from "../../../assets/home/specialists/p1.png";

import styles from "./Specialists.module.css";

export const Specialists = () => {

  const [data, setData] = useState([])

  return (
    <div className={styles.specialists}>
      <h1 className={styles.title}>Mutaxassislar</h1>
      <p className={styles.desc}>
        Saytimiz orqali eng yaxshi mutaxassislar orasiga qo'shiling
      </p>
      <div className={styles.block}>
        <div className={styles.box}>
          <div className={styles.img}>
            <div className={styles.textInImg}>
            <h2><Rate disabled defaultValue={4} /></h2>
            <h1>Karimberdi Qodirov</h1>
            <p>Treyner</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.img}>
            <div className={styles.textInImg}>
            <h2><Rate disabled defaultValue={4} /></h2>
            <h1>Karimberdi Qodirov</h1>
            <p>Treyner</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.img}>
            <div className={styles.textInImg}>
            <h2><Rate disabled defaultValue={4} /></h2>
            <h1>Karimberdi Qodirov</h1>
            <p>Treyner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

import main from '../../../assets/home/laseWeightFast/main.png'

import styles from "./LoseWeightFast.module.css";

const LoseWeightFast = () => {
  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        TEZ OZISH UCHUN PARHEZLARNING 10 TA ENG SAMARALISI
      </h1>
      <div className={styles.main__block}>
          <img src={main} alt="" />
        <div className={styles.blocks}>
          <div className={styles.blocks__box}>
              bir
          </div>
          <div>
              bir
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoseWeightFast;

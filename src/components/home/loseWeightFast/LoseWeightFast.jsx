import React, { useEffect, useState } from "react";

import { instance } from "./../../../api/api";

import main from "../../../assets/home/main.png";

import styles from "./LoseWeightFast.module.css";


const LoseWeightFast = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance.get("advice/").then((response) => setData(response.data));
  }, []);

  const dataMap = data.map((d) => {
    return (
      <div className={styles.blocks__box} key={d.id}>
        <h1>{d.id === 10 ? d.id : "0" + d.id}</h1>
        <p>{d.en_text}</p>
      </div>
    );
  });

  return (
    <div>
      <h1 className={styles.title}>
        TEZ OZISH UCHUN PARHEZLARNING ENG SAMARALILASRI
      </h1>
      <div className={styles.main__block}>
        <img src={main} alt="" />
        <div className={styles.blocks}>{dataMap}</div>
      </div>
    </div>
  );
};

export default LoseWeightFast;

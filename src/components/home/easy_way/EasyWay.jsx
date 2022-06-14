import React, { useEffect, useState } from "react";

import lenta1 from "./../../../assets/home/easy_way/metr1.png";
import meal from "./../../../assets/home/easy_way/food1.png";
import lenta2 from "./../../../assets/home/easy_way/metr2.png";

import styles from "./EasyWay.module.css";
import { instance } from "../../../api/api";

const EasyWay = () => {
  const [data, setData] = useState([]);

  const [lenta, setLenta] = useState(1);

  useEffect(() => {
    instance.get("home_card/").then((response) => setData(response.data));
  }, []);

  console.log(data);
  const dataMap = data.map((d) => {
    return (
      <div className={styles.header_sport_wrapper} key={d.id}>
        <div className={styles.header_sport}>
          <div className={styles.header__text}>
            <h1>{d.title_en}</h1>
            <p>{d.text_uz}</p>
          </div>
          <div className={styles.Boy}>
            <img src={d.img} alt="boy" />
          </div>
        </div>
        <div className={styles.header_lenta_wrapper}>
          <div className={styles.header_lenta}></div>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.header}>
      <h2 className={styles.header_title}>
        Vazin yo`qotishning eng sodda va oson yollari
      </h2>
      {dataMap}
    </div>
  );
};

export default EasyWay;

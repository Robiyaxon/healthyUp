import React, { useEffect, useState } from "react"

import styles from "./EasyWay.module.css";
import { instance } from "../../../api/api";
import AOS from "aos"
import "aos/dist/aos.css"
const EasyWay =  React.memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({duration:2000})
    instance.get("home_card/").then((response) => setData(response.data));
  }, [setData]);

  const dataMap = data.map((d) => {
    return (
      <div className={styles.header_sport_wrapper} key={d.id} data-aos="flip-up">
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
    <div className={styles.header} >
      <h2 className={styles.header_title}>
        Vazin yo`qotishning eng sodda va oson yollari
      </h2>
      {dataMap}
    </div>
  );
})

export default EasyWay;

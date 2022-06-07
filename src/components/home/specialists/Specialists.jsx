import { Rate } from "antd";
import React, { useEffect, useState } from "react";


import styles from "./Specialists.module.css";
import axios from "axios";

var config = {
  method: "get",
  url: "http://10.10.8.35:8000/expert/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const Specialists = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  const dataMap = data.map((d) => {
    console.log('http://10.10.8.46:8000' + d.image);
    let image = 'http://10.10.8.46:8000' + d.image
    console.log(image)
    return(
    <div className={styles.box} key={d.id}>
      <div
        className={styles.img}
        style={{
          backgroundImage:` url(${image})`,
          border: "2px solid red",
        }}
      >
        <div className={styles.textInImg}>
          <h2>
            <Rate disabled defaultValue={d.reyting / d.reyting_count} />
          </h2>
          <h1>{d.first_name + " " + d.last_name}</h1>
          <p>{d.expert_type === 1 ? "dietolog" : "Treyner"}</p>
        </div>
      </div>
    </div>
  )}
  
  );
  return (
    <div className={styles.specialists}>
      <h1 className={styles.title}>Mutaxassislar</h1>
      <p className={styles.desc}>
        Saytimiz orqali eng yaxshi mutaxassislar orasiga qo'shiling
      </p>
      <div className={styles.block}>
        {dataMap}
        <div className={styles.box}>
          <div className={styles.img}>
            <div className={styles.textInImg}>
              <h2>
                <Rate disabled defaultValue={4} />
              </h2>
              <h1>Karimberdi Qodirov</h1>
              <p>Treyner</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.img}>
            <div className={styles.textInImg}>
              <h2>
                <Rate disabled defaultValue={4} />
              </h2>
              <h1>Karimberdi Qodirov</h1>
              <p>Treyner</p>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.img}>
            <div className={styles.textInImg}>
              <h2>
                <Rate disabled defaultValue={4} />
              </h2>
              <h1>Karimberdi Qodirov</h1>
              <p>Treyner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

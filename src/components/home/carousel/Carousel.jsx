import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useTranslation } from "react-i18next";

import main from "../../../assets/home/carousel/main.png";
import { BtnAnimation } from "./../../../helpers/BtnAnimation";
import styles from "./Carousel.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

var config = {
  method: "get",
  url: "http://10.10.8.46:8000/new/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const MyCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  console.log(data);

  const { t } = useTranslation();
  return (
    <div className={styles.carousel}>
      <Carousel>
        <Item
          picture={data && data[0] && data[0].img}
          title={data && data[0] && data[0].title}
          text={data && data[0] && data[0].text}
        />
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </div>
  );
};

const Item = ({ picture, title, text = "dssdsergrdg" }) => {
  return (
    <div className={styles.item}>
      <img src={picture} alt="" />
      <div className={styles.item__text}>
        <h1>{title}</h1>
        <p>
          {window.innerWidth > 801
            ? text.substring(0, 750)
            : text.substring(0, 300)}
        </p>
      </div>
    </div>
  );
};

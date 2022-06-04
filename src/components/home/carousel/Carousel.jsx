import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Carousel from "react-elastic-carousel";
import { useSelector } from "react-redux";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import main from "../../../assets/home/carousel/main.png";

import LoseWeightFast from "../loseWeightFast/LoseWeightFast";

import styles from "./Carousel.module.css";
import "aos/dist/aos.css";

var config = {
  method: "get",
  url: "http://10.10.8.46:8000/new/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const MyCarousel = () => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);

  useEffect(() => {
    Aos.init();
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  // const { t } = useTranslation();

  return (
    <div className={styles.carousel}data-aos="zoom-in">
      <Carousel  >
        <Item
          picture={(data && data[0] && data[0].img) || main}
          title={
            data && data[0] && data[0].title && language === "uz"
              ? data && data[0] && data[0].title
              : language === "eng"
              ? data && data[0] && data[0].en_title
              : language === "ru"
              ? data && data[0] && data[0].ru_title
              : "bir"
          }
          text={data && data[0] && data[0].text}
        />
        <Item
          picture={data && data[0] && data[0].img}
          title={
            data && data[0] && data[0].title && language === "uz"
              ? data && data[0] && data[0].title
              : language === "eng"
              ? data && data[0] && data[0].en_title
              : language === "ru"
              ? data && data[0] && data[0].ru_title
              : "bir"
          }
          text={data && data[0] && data[0].text}
        />
      </Carousel>
      <LoseWeightFast />
    </div>
  );
};

const Item = ({
  picture = main,
  title = "Qalqonsimon bez bilan bog‘liq muammo",
  text = "Gipoterioz vazn ortishining sabablaridan biri bo‘lishi mumkin. Agar qalqonsimon bezdan yetarli miqdorda gormon ajralib chiqmasa, metabolizm sekinlashadi va bu vazn to‘plashga olib keladi. Shuningdek, doimiy charchoqni his qilish, haroratning o‘zgarishi kuzatilishi mumkin. Ma’lumotlarga qaraganda, ayollar gipoteriozga erkaklarga nisbatan 8 marta ko‘proq chalinadi.",
}) => {
  return (
    <div className={styles.item}>
      <img src={picture} alt="" />
      <div className={styles.item__text}>
        <h1>{title}</h1>
        <p>{window.innerWidth > 801 ? text : text.substring(0, 250) + "..."}</p>
      </div>
    </div>
  );
};

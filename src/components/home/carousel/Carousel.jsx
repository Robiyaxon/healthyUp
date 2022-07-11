import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Carousel from "react-elastic-carousel";
// import { useSelector } from "react-redux";
import main from "../../../assets/home/carousel/main.webp";
import AOS from "aos"
import "aos/dist/aos.css"
import LoseWeightFast from "../loseWeightFast/LoseWeightFast";
import { useSelector } from "react-redux";

import styles from "./Carousel.module.css";
import { instance } from './../../../api/api';

export const MyCarousel =  React.memo(() => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("new/").then((response) => setData(response.data));
    AOS.init({duration:2000})
  }, [setData]);
  const dataMap = data.map((d) => (
    <Item key={d.id}
      picture={(d.img) || main}
      title={
        language === "uz" ? (
          d.title
        ) : language === "en" ? (
          d.en_title
        ) : language === "ru" ? (
         d.ru_title
        ) : (
          "Vazin yo‘qotish qiyin emas"
        )
      }
      text={ language === "uz" ? (
        d.text
      ) : language === "en" ? (
        d.en_text
      ) : language === "ru" ? (
        d.ru_text
      ) : (
        "Vazin yo‘qotish qiyin emas"
      )}
    />
  ));
  return (
    <div className={styles.carousel}  data-aos="zoom-out">
      <Carousel>
        {dataMap}
      </Carousel>
      <LoseWeightFast />
    </div>
  );
})

const Item = ({
  picture = main,
  title = "Qalqonsimon bez bilan bog‘liq muammo",
  text = "Gipoterioz vazn ortishining sabablaridan biri bo‘lishi mumkin. Agar qalqonsimon bezdan yetarli miqdorda gormon ajralib chiqmasa, metabolizm sekinlashadi va bu vazn to‘plashga olib keladi. Shuningdek, doimiy charchoqni his qilish, haroratning o‘zgarishi kuzatilishi mumkin. Ma’lumotlarga qaraganda, ayollar gipoteriozga erkaklarga nisbatan 8 marta ko‘proq chalinadi.",
}) => {
  return (
    <div className={styles.item}>
      <img src={picture} alt="rasm bor edi!" />
      <div className={styles.item__text}>
        <h1>{title}</h1>
        <p>
          {window.innerWidth > 801 ? text : window.innerWidth < 430 ? text.substring(0, 100) + "..." : text.substring(0, 200) + "..."}
        
        </p>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react"

import styles from "./EasyWay.module.css";
import { instance } from "../../../api/api";
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
const EasyWay = React.memo(() => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);

  const { t } = useTranslation()
  useEffect(() => {
    AOS.init({ duration: 2000 })
    instance.get("home_card/").then((response) => setData(response.data));
  }, [setData]);

  const dataMap = data.map((d) => {
    return (
      <div className={styles.header_sport_wrapper} key={d.id} data-aos="flip-up">
        <div className={styles.header_sport}>
          <div className={styles.header__text}>
            <h1> {language === "uz" ? (
             d.title_uz
            ) : language === "en" ? (
            d.title_en
            ) : language === "ru" ? (
             d.title_ru
            ) : (
              <>Vazin yo‘qotish qiyin emas</>
            )}</h1>
            <p>{language === "uz" ? (
              window.innerWidth > 801 ? d.text_uz : d.text_uz.substring(0, 250) + "..."
            ) : language === "en" ? (
              window.innerWidth > 801 ? d.text_en : d.text_en.substring(0, 250) + "..." 
            ) : language === "ru" ? (
              window.innerWidth > 801 ? d.text_ru : d.text_ru.substring(0, 250) + "..."
            ) : (
              <>Vazin yo‘qotish qiyin emas</>
            )}</p>
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
        {t("route")}
      </h2>
      {dataMap}
    </div>
  );
})

export default EasyWay;

import React, { useEffect, useState } from "react";

import { instance } from "./../../../api/api";

import main from "../../../assets/home/main.webp";
import AOS from "aos"
import "aos/dist/aos.css"
import styles from "./LoseWeightFast.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
const LoseWeightFast =  React.memo(() => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.langReducer);

  useEffect(() => {
    AOS.init({ duration: 2000 })
    instance.get("advice/").then((response) => setData(response.data));
  }, [setData]);

  const dataMap = data.map((d) => {
    return (
      <div className={styles.blocks__box} data-aos="flip-right" key={d.id}>
        <h1>{d.id === 10 ? d.id : "0" + d.id || "01"}</h1>
        <p>{language === "uz" ? d.uz_text : language === "en" ? d.en_text : language === "ru" ? d.ru_text : 'salom'}</p>
        <div className="go-corner" href="#">
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1 className={styles.title}>
        {t("loseWeightFast")}
      </h1>
      <div className={styles.main__block}>
        <img src={main} alt="rasm bor edi!" />
        <div className={styles.blocks}>{dataMap}</div>
      </div>
    </div>
  );
})

export default LoseWeightFast;

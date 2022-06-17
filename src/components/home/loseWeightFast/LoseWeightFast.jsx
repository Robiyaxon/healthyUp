import React, { useEffect, useState } from "react";

import { instance } from "./../../../api/api";

import main from "../../../assets/home/main.png";

import styles from "./LoseWeightFast.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';


const LoseWeightFast = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.langReducer);

  useEffect(() => {
    instance.get("advice/").then((response) => setData(response.data));
  }, []);

  const dataMap = data.map((d) => {
    return (
      <div className={styles.blocks__box} key={d.id}>
        <h1>{d.id === 10 ? d.id : "0" + d.id}</h1>
        <p>{language === "uz" ? d.uz_text  : language === "en" ? d.en_text : language === "ru" ?  d.ru_text : null}</p>
      </div>
    );
  });

  return (
    <div>
      <h1 className={styles.title}>
        {t("loseWeightFast")}
      </h1>
      <div className={styles.main__block}>
        <img src={main} alt="" />
        <div className={styles.blocks}>{dataMap}</div>
      </div>
    </div>
  );
};

export default LoseWeightFast;

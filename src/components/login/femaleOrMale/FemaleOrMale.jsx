import React from "react";
import { useTranslation } from "react-i18next";
import erkak from "../../../assets/login/femaleOrMale/erkak.svg";
import ayol from "../../../assets/login/femaleOrMale/ayol.svg";

import style from "./FemaleOrMale.module.css";

const FemaleOrMale = () => {
  const { t } = useTranslation();
  const women = () => {
    alert("Ayolni tanladingiz!");
  };
  const man = () => {
    alert("Ayolni tanladingiz!");
  };
  return (
    <div className={style.jinsi}>
      <h1>{t("gender")}</h1>
      <img src="" alt="" />
      <div className={style.Wrapper_Card}>
        <div className={style.Card} onClick={man}>
          <img src={erkak} alt="rasm bor edi!" />
          <p>{t("man")}</p>
        </div>
        <div className={style.Card} onClick={women}>
          <img src={ayol} alt="rasm bor edi!" />
          <p>{t("woman")}</p>
        </div>
      </div>
    </div>
  );
};
export default FemaleOrMale;

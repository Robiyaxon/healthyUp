import React from "react";
// import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import erkak from "../../../assets/login/erkak.svg";
import ayol from "../../../assets/login/ayol.svg";
import style from "./FemaleOrMale.module.css";
const FemaleOrMale = (props) => {
  const { t } = useTranslation();
  const women = () => {
  props.setGender("2")
  props.SignApp("2")
  };

  const man = () => {
    props.setGender("1")
    props.SignApp("1")
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

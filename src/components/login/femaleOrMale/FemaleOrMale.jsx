import React from "react";
// import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import erkak from "../../../assets/login/erkak.webp";
import ayol from "../../../assets/login/ayol.webp";
import style from "./FemaleOrMale.module.css";
import { useNavigate } from "react-router-dom";
const FemaleOrMale =  React.memo((props) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const women = () => {
    props.setGender("2")
    props.SignApp("2")
    navigate("/loader")
  };

  const man = () => {
    props.setGender("1")
    props.SignApp("1")
    navigate("/loader")
  };

  return (
    <div className={style.jinsi}>
      <h1>{t("gender")}</h1>
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
})
export default FemaleOrMale;

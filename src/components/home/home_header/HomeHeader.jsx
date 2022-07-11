import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { instance } from "../../../api/api";
import girl from "../../../assets/home/header/girl.png"
import style from "./HomeHeader.module.css";
import AOS from "aos"
import "aos/dist/aos.css"
export const HomeHeader =  React.memo(() => {

  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  const map = data.map((a) => (
    <div className={style.Block} key={a.id}>
      {" "}
      <div className={style.Block__Title}>
        <h1>
          {language === "uz" ? (
            <>{a.title_uz}</>
          ) : language === "en" ? (
            <>{a.title_en}</>
          ) : language === "ru" ? (
            <>{a.title_ru}</>
          ) : (
            <>Vazin yo‘qotish qiyin emas</>
          )}
        </h1>
        <p>
          {language === "uz" ? (
            <>{a.text_uz}</>
          ) : language === "en" ? (
            <>{a.text_en}</>
          ) : language === "ru" ? (
            <>{a.text_ru}</>
          ) : (
            <>Saytimiz orqali ozishni istagan insonlarga bepul yordam beriliadi</>
          )}
        </p>
        <button
          type="button"
          className={style.SignUp}
        >
          <NavLink to="whoIsTheUser">
          {language === "uz" ? (
            <>{a.text2_uz}</>
          ) : language === "en" ? (
            <>{a.text2_en}</>
          ) : language === "ru" ? (
            <>{a.text2_ru}</>
          ) : (
            <>Ro`yhatdan o`tish</>
          )}
          </NavLink>
        </button>
      </div>
      <img
        src={girl}
        alt="rasm bor edi"
      />
    </div>
  ));
  useEffect(() => {
    AOS.init({duration:2000})
    instance.get("homeheader/").then((response) => setData(response.data));
  }, [setData]);
  return <div className={style.HomeHeader} data-aos="zoom-out">{map}</div>;
})

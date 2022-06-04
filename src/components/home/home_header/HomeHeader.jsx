import React, { useEffect, useState } from "react";
import style from "./HomeHeader.module.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import axios from "axios";
import { useSelector } from "react-redux";
var config = {
  method: "get",
  url: "http://10.10.8.46:8000/homeheader/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const HomeHeader = () => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  const map = data.map((a) => (
    <div className={style.Block}>
      {" "}
      <div className={style.Block__Title}>
        <h1 data-aos="fade-up" data-aos-duration="1000">
          {language === "uz" ? (
            <>{a.title_uz}</>
          ) : language === "eng" ? (
            <>{a.title_en}</>
          ) : language === "ru" ? (
            <>{a.title_ru}</>
          ) : (
            <>Vazin yo‘qotish qiyin emas</>
          )}
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000">
          {language === "uz" ? (
            <>{a.text_uz}</>
          ) : language === "eng" ? (
            <>{a.text_en}</>
          ) : language === "ru" ? (
            <>{a.text_ru}</>
          ) : (
            <>Saytimiz orqali ozishni istagan insonlarga bepul yordam beriliadi</>
          )}
        </p>
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          type="button"
          className={style.SignUp}
        >
          <NavLink to="signUp">
          {language === "uz" ? (
            <>{a.text2_uz}</>
          ) : language === "eng" ? (
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
        data-aos="fade-up"
        data-aos-duration="1000"
        src={a.img}
        alt="rasm bor edi"
      />
    </div>
  ));
   Aos.init();
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  return <div className={style.HomeHeader}>{map}</div>;
};

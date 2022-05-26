import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import video from "../../../assets/home/header/video.mp4"
import { BtnAnimation } from "./../../../helpers/BtnAnimation";
import { useSelector } from "react-redux";
import axios from "axios";

var config = {
  method: "get",
  url: "http://10.10.8.46:8000/homeheader/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const Header = () => {
  const { language } = useSelector((state) => state.langReducer);
  const [Home, setHome] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setHome(response.data);
      })
      .catch(function (error) {});
  }, []);
  const map = Home.map((a, index) => (
    <img
      key={"http://10.10.8.46:8000" + index}
      src={a.img}
      alt=""
      data-aos="fade-down"
      data-aos-duration="1000"
    />
  ));
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__img}>
          {/* {map} */}
        <video  autoPlay muted loop >
        <source src={video} type="video/mp4"/>
       </video>
       </div>
        <div className={styles.header__text_block}>
          <h1
            className={styles.header__text_block__title}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {language === "uz" ? (
              Home.map((a, index) => <span key={index}> {a.title_uz} </span>)
            ) : language === "eng" ? (
              Home.map((a, index) => <span key={index}> {a.title_en} </span>)
            ) : language === "ru" ? (
              Home.map((a, index) => <span key={index}> {a.title_ru} </span>)
            ) : (
              <>...</>
            )}
          </h1>
          <p
            className={styles.header__text_block__text}
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {language === "uz" ? (
              Home.map((a, index) => <span key={index}> {a.text_uz} </span>)
            ) : language === "eng" ? (
              Home.map((a, index) => <span key={index}> {a.text_en} </span>)
            ) : language === "ru" ? (
              Home.map((a, index) => <span key={index}> {a.text_ru} </span>)
            ) : (
              <>...</>
            )}
          </p>
          <div className={styles.header__text_block__btn}>
            <BtnAnimation
              text={t("homeHeaderBtn1")}
              link={"login"}
              classes={" firstContainer"}
            />
            <BtnAnimation text={t("homeHeaderBtn2")} link="/signUp" />
          </div>
        </div>
        <p
          className={styles.endText}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {language === "uz" ? (
            Home.map((a, index) => <span key={index}> {a.text2_uz} </span>)
          ) : language === "eng" ? (
            Home.map((a, index) => <span key={index}> {a.text2_en} </span>)
          ) : language === "ru" ? (
            Home.map((a, index) => <span key={index}> {a.text2_ru} </span>)
          ) : (
            <>...</>
          )}
        </p>
      </div>
    </>
  );
};

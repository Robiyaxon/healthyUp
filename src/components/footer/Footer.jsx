import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo2 from "../../assets/home/search/logo2.png";
import facebook from "../../assets/home/footer/f.webp";
import instagram from "../../assets/home/footer/i.webp";
import google from "../../assets/home/footer/googleplay.webp";
import chiziq from "../../assets/home/footer/chiziq.webp";
import telegram from "../../assets/home/footer/telegram.webp";

import { instance } from "./../../api/api";

import style from "./Footer.module.css";

export const Footer = React.memo(() => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {instance.get("footer/").then((response) => setData(response.data));
  }, []);
  const map = data.map((a) => (
    <div className={style.Footer} key={a.id}>
      <div className={style.Block1}>
        <img src={logo2} alt="rasm bor edi!" /> <br />
        <a href={a.email}>{a.email}</a>
        <a href={"tel:" + a.phone}>{a.phone}</a>
        <a href="/">{a.address}</a>
        <p>www.health.uz</p>
      </div>
      <div className={style.Block2}>
        <NavLink
          to="about_us"
          className={({ isActive }) => (isActive ? "active2" : "Navlink2")}
        >
         {t("navbar1")}
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "active2" : "Navlink2")}
        >
       {t("navbar2")}
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active2" : "Navlink2")}
        >
         {t("navbar5")}
        </NavLink>
      </div>
      <div className={style.Block3}>
        <a href={a.facebook} className={style.facebook_icon}>
          <img src={facebook} alt="rasm bor edi!" />
        </a>
        <a href={a.instagram} className={style.instagram_icon}>
          <img src={instagram} alt="rasm bor edi!" />
        </a>
        <a href={a.telegram} className={style.telegram_icon}>
          <img src={telegram} alt="rasm bor edi!" />
        </a>

        <a href={a.application}>
          <img src={google} alt="rasm bor edi!" />
        </a>
      </div>
    </div>
  ));
  return (
    <div className={style.Wrapper}>
      {map}
      <img src={chiziq} alt="rasm bor edi!" className={style.chiziq} />
      <p className={style.Title}>{t("footer")}</p>
    </div>
  );
});

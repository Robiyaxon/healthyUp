import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import logo2 from "../../assets/home/search/logo2.svg";
import facebook from "../../assets/home/footer/f.svg";
import instagram from "../../assets/home/footer/i.svg";
import google from "../../assets/home/footer/googleplay.svg";
import chiziq from "../../assets/home/footer/chiziq.svg";
import telegram from "../../assets/home/footer/telegram.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
var config = {
  method: "get",
  url: "http://10.10.8.35:8000/footer/",
  headers: {
    "Content-Type": "application/json",
  },
};
export const Footer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
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
        <NavLink to="about_us">Biz haqimizda</NavLink>
        <NavLink to="contact">Bog'lanish</NavLink>
        <NavLink to="/">Foydali maslahat</NavLink>
      </div>
      <div className={style.Block3}>
        <a href={a.facebook} className={style.facebook_icon}>
          <img src={facebook} alt="" />
        </a>
        <a href={a.instagram} className={style.instagram_icon}>
          <img src={instagram} alt="" />
        </a>
        <a href={a.telegram} className={style.telegram_icon}>
          <img src={telegram} alt="" />
        </a>
        <a href={a.application}>
          <img src={google} alt="" />
        </a>
      </div>
    </div>
  ));
  return (
    <div className={style.Wrapper}>
      {map}
      <center>
        <img src={chiziq} alt="" className={style.chiziq} />
      </center>
      <p className={style.Title}>Platforma ROC tomonidan ishlab chiqilgan.</p>
    </div>
  );
};

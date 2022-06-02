import React, { useEffect } from "react";
import style from "./Footer.module.css";
import logo2 from "../../assets/home/search/logo2.svg";
import twitter from "../../assets/home/footer/t.svg";
import facebook from "../../assets/home/footer/f.svg";
import instagram from "../../assets/home/footer/i.svg";
import google from "../../assets/home/footer/googleplay.svg";
import chiziq from "../../assets/home/footer/chiziq.svg";
import telegram from "../../assets/home/footer/telegram.svg";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
export const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={style.Wrapper}>
      <div className={style.Footer}>
        <div className={style.Block1}>
          <img src={logo2} data-aos="fade-up" data-aos-duration="1000" alt="rasm bor edi!" /> <br />
          <a href="/" data-aos="fade-up" data-aos-duration="1000">healthuz@gmail.com</a>
          <a href="/" data-aos="fade-up" data-aos-duration="1000">+998552012121</a>
          <a href="/" data-aos="fade-up" data-aos-duration="1000">Andijon sh, Boburshox 2</a>
          <p data-aos="fade-up" data-aos-duration="1000">www.health.uz</p>
        </div>
        <div className={style.Block2}>
          <NavLink data-aos="fade-up" data-aos-duration="1000" to="about_us">Biz haqimizda</NavLink>
          <NavLink data-aos="fade-up" data-aos-duration="1000" to="contact">Bog'lanish</NavLink>
          <NavLink data-aos="fade-up" data-aos-duration="1000" to="/">Foydali maslahat</NavLink>
        </div>
        <div className={style.Block3}>
          <a data-aos="fade-up" data-aos-duration="1000" href="https://telegram.org/" className={style.telegram_icon}>
            <img src={twitter} alt="" />
          </a>
          <a
            href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C355278594478%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=355278594478&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwnNyUBhCZARIsAI9AYlGDd_lRJby5k0l6I9-Dw81hxf-pMa3tUMUbyadHAodD_NOgR-aL-E8aAtFgEALw_wcB"
            className={style.facebook_icon}
          >
             <img src={facebook} alt="" data-aos="fade-up" data-aos-duration="1000" />
          </a>
          <a href="https://www.instagram.com/" className={style.instagram_icon}>
            <img src={instagram} alt="" data-aos="fade-up" data-aos-duration="1000" />
          </a>
          <a href="https://telegram.org/" className={style.telegram_icon}>
            <img src={telegram} alt="" data-aos="fade-up" data-aos-duration="1000" />
          </a>
          <a href="https://play.google.com/store/games">
            <img src={google} alt="" data-aos="fade-up" data-aos-duration="1000" />
          </a>
        </div>
      </div>{" "}
      <center>
              <img src={chiziq} alt="" className={style.chiziq}  />

      </center>
      <p data-aos="fade-up" data-aos-duration="1000"git add className={style.Title}>Platforma digitalcityandijan tomonidan ishlab chiqilgan.</p>
    </div>
  );
};

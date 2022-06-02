import React, { useEffect } from "react";
import style from "./HomeHeader.module.css";
import img from "../../../assets/home/header/girl.svg";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export const HomeHeader = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={style.HomeHeader}>
      <div className={style.Block}>
        <div className={style.Block__Title}>
          <h1 data-aos="fade-up" data-aos-duration="1000">Vazin yo‘qotish qiyin emas</h1>
          <p data-aos="fade-up" data-aos-duration="1000">
            Saytimiz orqali ozishni istagan insonlarga bepul yordam beriliadi
          </p>
          <button data-aos="fade-up" data-aos-duration="1000" type="button" className={style.SignUp}>
            <NavLink to="signUp">Ro‘yhatdan otish</NavLink>
          </button>
        </div>
        <img data-aos="fade-up" data-aos-duration="1000" src={img} alt="rasm bor edi" />
      </div>
    </div>
  );
};

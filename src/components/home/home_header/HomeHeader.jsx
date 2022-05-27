import React from "react";
import style from "./HomeHeader.module.css";
import img from "../../../assets/home/header/girl.svg";
import { NavLink } from "react-router-dom";
export const HomeHeader = () => {
  return (
    <div className={style.HomeHeader}>
      <div className={style.Block}>
        <div className={style.Block__Title}>
          <h1>Vazin yo‘qotish qiyin emas</h1>
          <p>
            Saytimiz orqali ozishni istagan insonlarga bepul yordam beriliadi
          </p>
          <button type="button" className={style.SignUp}>
            <NavLink to="signUp">Ro‘yhatdan otish</NavLink>
          </button>
        </div>
        <img src={img} alt="rasm bor edi" />
      </div>
    </div>
  );
};

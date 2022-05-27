import React from "react";
import style from "./aboutUz.module.css"
import { NavLink } from 'react-router-dom';
export const AboutUs = () => {
  return <div className={style.wrapper}>

<div className={style.Block}>
        <div className={style.Block__Title}>
          <h1>Vazin yo‘qotish qiyin emas</h1>
          <p>Saytimiz orqali ozishni istagan insonlarga bepul yordam beriliadi</p>
          <NavLink to="/">Ro‘yhatdan otish</NavLink>
        </div>
        </div>
  </div>;
};

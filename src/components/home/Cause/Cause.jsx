import React, { useEffect } from "react";
import style from "./Cause.module.css";
import chek from "../../../assets/home/header/chek.svg";
import img from "../../../assets/home/cause/boy.svg";
import Aos from "aos";
import "aos/dist/aos.css";
export const Cause = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={style.Cause}>

      <h1 data-aos="fade-up" data-aos-duration="1000">O‘z-o‘zidan semirib ketishning 5 sababi</h1>
      <div className={style.Chek}>
        <img src={chek} alt="rasm bor edi!" />
        <h2 data-aos="fade-up" data-aos-duration="1000">Polikistoz</h2>
      </div>
      <div className={style.diseases}>
        <div className={style.diseases__block2}>
          <div  className={style.advice + " " + style.advice3}>
            <h2 data-aos="fade-up" data-aos-duration="1000">Depressiya</h2>
            <img data-aos="fade-up" data-aos-duration="1000" src={chek} alt="rasm bor edi!" />
          </div>
          <div className={style.advice + " " + style.advice3}>
            <h2 data-aos="fade-up" data-aos-duration="1000">Preparatlar</h2>
            <img data-aos="fade-up" data-aos-duration="1000" src={chek} alt="rasm bor edi!" />
          </div>
        </div>
        <img src={img} alt="" data-aos="fade-up" data-aos-duration="1000" className={style.img} />
        <div className={style.diseases__block}>
          <div className={style.advice + " " + style.advice2}>
            <img data-aos="fade-up" data-aos-duration="1000" src={chek} alt="rasm bor edi!" />
            <h2 data-aos="fade-up" data-aos-duration="1000" className={style.advice_h2}>
              Qalqonsimon bez bilan bog‘liq muammo
            </h2>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className={style.advice + " " + style.advice2}>
            <img data-aos="fade-up" data-aos-duration="1000" src={chek} alt="rasm bor edi!" />
            <h2 data-aos="fade-up" data-aos-duration="1000">Kushing sindromi</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

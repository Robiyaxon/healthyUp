import React, { useEffect, useState } from "react";
import style from "./Cause.module.css";
import chek from "../../../assets/home/header/chek.svg";
// import img from "../../../assets/home/cause/boy.svg";
import Aos from "aos";
import axios from "axios";
import { useSelector } from "react-redux";
var config = {
  method: "get",
  url: "http://10.10.8.46:8000/ill/",
  headers: {
    "Content-Type": "application/json",
  },
};
export const Cause = () => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
  
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  const map = data.map((a) => (
    <h1 data-aos="fade-up" data-aos-duration="1000">
      {language === "uz" ? (
        <>{a.title_uz}</>
      ) : language === "eng" ? (
        <>{a.title_en}</>
      ) : language === "ru" ? (
        <>{a.title_ru}</>
      ) : (
        <>...</>
      )}
    </h1>
  ));
    Aos.init();
  return (
    <div className={style.Cause}>
      {map}
      <div className={style.Chek}>
        <img src={chek} alt="rasm bor edi!" />
        {data.map((a) => (
          <h2 data-aos="fade-up" data-aos-duration="1000">
            {language === "uz" ? (
              <>{a.text2_uz}</>
            ) : language === "eng" ? (
              <>{a.text2_en}</>
            ) : language === "ru" ? (
              <>{a.text2_ru}</>
            ) : (
              <>Depressiya</>
            )}
          </h2>
        ))}
      </div>
      <div className={style.diseases}>
        <div className={style.diseases__block2}>
          <div className={style.advice + " " + style.advice3}>
            {data.map((a) => (
              <h2 data-aos="fade-up" data-aos-duration="1000">
                {language === "uz" ? (
                  <>{a.text1_uz}</>
                ) : language === "eng" ? (
                  <>{a.text1_en}</>
                ) : language === "ru" ? (
                  <>{a.text1_ru}</>
                ) : (
                  <>Depressiya</>
                )}
              </h2>
            ))}

            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={chek}
              alt="rasm bor edi!"
            />
          </div>
          <div className={style.advice + " " + style.advice3}>
            {data.map((a) => (
              <h2 data-aos="fade-up" data-aos-duration="1000">
                {language === "uz" ? (
                  <>{a.text4_uz}</>
                ) : language === "eng" ? (
                  <>{a.text4_en}</>
                ) : language === "ru" ? (
                  <>{a.text4_ru}</>
                ) : (
                  <>Preparatlar</>
                )}
              </h2>
            ))}
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={chek}
              alt="rasm bor edi!"
            />
          </div>
        </div>
        {data.map((a) => (
          <img
            src={a.img}
            alt=""
            data-aos="fade-up"
            data-aos-duration="1000"
            className={style.img}
          />
        ))}

        <div className={style.diseases__block}>
          <div className={style.advice + " " + style.advice2}>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={chek}
              alt="rasm bor edi!"
            />
            {data.map((a) => (
              <h2
                className={style.advice_h2}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {language === "uz" ? (
                  <>{a.text3_uz}</>
                ) : language === "eng" ? (
                  <>{a.text3_en}</>
                ) : language === "ru" ? (
                  <>{a.text3_ru}</>
                ) : (
                  <>Qalqonsimon bez bilan bog‘liq muammo</>
                )}
              </h2>
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className={style.advice + " " + style.advice2}
          >
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={chek}
              alt="rasm bor edi!"
            />
            {data.map((a) => (
              <h2 data-aos="fade-up" data-aos-duration="1000">
                {language === "uz" ? (
                  <>{a.text5_uz}</>
                ) : language === "eng" ? (
                  <>{a.text5_en}</>
                ) : language === "ru" ? (
                  <>{a.text5_ru}</>
                ) : (
                  <>Kushing sindromi</>
                )}
              </h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import style from "./aboutUz.module.css";
import man from "./../../assets/about_us/man.png";
import girl from "./../../assets/about_us/girl.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

var config = {
  method: "get",
  url: "http://10.10.8.46:8000/aboutus/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const AboutUs = () => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    Aos.init({ once: true });
    axios(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {});
  }, []);

  const map = data.map((d) => {
    return (
      <div data-aos="zoom-in-up" className={style.first} key={d.id}>
        <div data-aos="fade-up-right" className={style.manWrapper}>
          <img src={d.img1} alt="man img" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={style.first_content}
        >
          <h2>{d.title_uz}</h2>
          <p>{d.uz_text1}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={style.header_wrapper}>
      <div id={style.app}>
        <div className={style.title}>
          <div className={style.title_inner}>
            <div className={style.cafe}>
              <div className={style.cafe_inner}>Keyframé</div>
            </div>
            <div className={style.mozart}>
              <div className={style.mozart_inner}>Artistes</div>
            </div>
          </div>
        </div>

        <div className={style.image}>
          <img
            src="https://denverweightlossclinic.com/wp-content/uploads/2.png"
            alt=""
          />
        </div>
      </div>
      <div classNameName={style.header}>
        {/* first */}
        {map}
        {/* <div data-aos="zoom-in-up" className={style.first}>
          <div data-aos="fade-up-right" className={style.manWrapper}>
            <img src={man} alt="man img" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={style.first_content}
          >
            <h2>Biz haqimizda</h2>
            <p>
              Maqsad bilan ozishga intilish, xatarli intilishdir. Chunki bunday
              ozishda nimanidir noto‘g‘ri qilsangiz, natija yomon bo‘lishi
              mumkinki, undan ko‘ra hech narsa qilmaganingiz yaxshi edi. Agar
              bunday ozishni uddalay olmay harakatni to‘xtatsangiz, yaxshi
              holatda oldingi vazningizni ustiga yana 3 – 4 kg yuk olasiz. Yomon
              holatda bunday ochlik va stress tufayli gastrit yoki oshqozon
              yarasi va depressiya kasalligi paydo bo‘lishi mumkin.
            </p>
          </div>
        </div> */}

        {/* second  */}
        <div data-aos="zoom-in-down" className={style.second}>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className={style.second_content}
          >
            <p>
              Shu sababli biz tog`ri ozishga yordam beruvchi bepul sayt
              yaratishga qaror qildik. bundan tashqari satimiz dietolog va
              treynerlarni oz ozini bant qilishu uchun ham juda katta yordam
              beradi.
            </p>
          </div>
          <div data-aos="fade-up-left" className={style.girlWrapper}>
            <img src={girl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

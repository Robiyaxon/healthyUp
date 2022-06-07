import React from "react";
import style from "./aboutUz.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NumberSec } from './NumberSec';
var config = {
  method: "get",
  url: "http://10.10.8.35:8000/aboutus/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const AboutUs = () => {
  const [data, setData] = useState([]);
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
          <img src={d.img} alt="man img" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={style.first_content}
        >
          <h2>{d.title_uz}</h2>
          <p>{d.uz_text}</p>
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
              <div className={style.cafe_inner}>About</div>
            </div>
            <div className={style.mozart}>
              <div className={style.mozart_inner}>Healthy Up</div>
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
      <div className={style.header}>
        {/* first */}
        {map}
      </div>
    <NumberSec />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { NumberSec } from "./NumberSec";
import style from "./AboutUs.module.css";
import { instance } from './../../api/api';
import AOS from "aos"
import "aos/dist/aos.css"
import { Spin } from 'antd';

const AboutUs = React.memo(() => {

  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 })
    instance.get("aboutus/").then((response) => setData(response.data));
  }, [setData]);
  if (data) {
    <div className="SpinStyle">
      <Spin />
    </div>
  }
  
  const map = data.map((d) => {
    return (
      <div className={style.first} key={d.id} data-aos="flip-right">
        <div className={style.manWrapper}>
          <img src={d.img} alt="man img" />
        </div>
        <div className={style.first_content}>
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
            alt="rasm bor edi!"
          />
        </div>
      </div>
      <div className={style.header}>{map}</div>
      <NumberSec />
    </div>
  );
})
export default AboutUs;

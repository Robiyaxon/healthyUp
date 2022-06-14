import React, { useEffect, useState }  from "react";
import axios from "axios";

import { NumberSec } from "./NumberSec";

import style from "./aboutUz.module.css";

var config = {
  method: "get",
  url: "http://10.10.8.46:8000/aboutus/",
  headers: {
    "Content-Type": "application/json",
  },
};

const AboutUs = () => {
  const [data, setData] = useState([]);
  // const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);

  const map = data.map((d) => {
    return (
      <div className={style.first} key={d.id}>
        <div className={style.manWrapper}>
          <img src={d.img1} alt="man img" />
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
            alt=""
          />
        </div>
      </div>
      <div className={style.header}>{map}</div>
      <NumberSec />
    </div>
  );
};
export default AboutUs;

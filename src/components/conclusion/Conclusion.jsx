import React, { memo, useState } from "react";
import style from "./Conclusion.module.css";
import { useNavigate } from "react-router-dom";
// import img from "../../assets/about_us/header.png";
import { useEffect } from "react";

import axios from "axios";

const Conclusion = memo(() => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // const [video, setVideo] = useState([]);
  const qidiruv = () => {
    navigate("/search_person");
  };
  const profile = () => {
    navigate("/foods");
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://ehealthuz.pythonanywhere.com/user/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const days = data.weekly_task && data.weekly_task.dushanba;

  if (data.task_sport_can_not) {
    console.log(data.task_sport_can_not);
  } else if (data.task_dieta_can_not) {
    console.log(data.task_dieta_can_not);
  }

  return (
    <div className={style.Conclusion}>
      <h1 className={style.Title}>Profilingizning xulosasi</h1>
      <div className={style.Profile}>
        <div className={style.Block}>
          <p>Statistik vazin</p>
          <h1>{data.weight} kg </h1>
        </div>
        <div className={style.Block}>
          <p>Kunlik yeyilishi kerak bolgan KK</p>
          <h1>{data.week_result} kk </h1>
        </div>
        <div className={style.Block}>
          <p>Kunlik yo‘qotilyotgan vazin</p>
          <h1>{days} kg </h1>
        </div>
      </div>
      <div className={style.navigate}>
        <button onClick={qidiruv} className={style.button1}>
          Mutaxassis qidirish
        </button>
        <button onClick={profile} className={style.button2}>
          Mening profilim
        </button>
      </div>
      <h1 className={style.Title}>Topshiriqlar</h1>
      <p className={style.p}>
        Siz uchun kunlik topshiriqlar. Topshiriqni bajargach belgilashni
        unutmang!
      </p>
      <div className={style.topshiriq}>
        {data.task_sport_can_not ? (
          <iframe
            width="420"
            height="345"
            title="video"
            src={data.task_sport_can_not[0].video}
          />
        ) : data.task_dieta_can_not ? (
          <iframe
            width="420"
            height="345"
            title="video"
            src={data.task_dieta_can_not[0].video}
          />
        ) : null}

        <div className={style.Topshiriq2}>
          <p>1-topshiriq</p>
        </div>
        <label className={style.checkbox}>
          <input type="checkbox" className={style.checkbox__input} />
          <span className={style.checkbox__inner}></span>
        </label>
      </div>
    </div>
  );
});
export default Conclusion;

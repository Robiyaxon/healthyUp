import React, { memo, useState, useEffect } from "react";
import axios from "axios";

import style from "./Conclusion.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Conclusion = memo(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  console.log(data);
  const qidiruv = () => {
    navigate("/search_person");
  };
  const settings = () => {
    navigate("/userSettings");
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

  const days = data.weight + data.height;
  const week_result =  Math.abs(data.weight - data.height)

  if (data.task_sport_can_not) {
  }

  return (
    <div className={style.Conclusion}>
      <h1 className={style.Title}>{t("xulosasi")}</h1>
      <div className={style.Profile}>
        <div className={style.Block}>
          <p>{t("vazin")}</p>
          <h1>{data.weight} kg </h1>
        </div>
        <div className={style.Block}>
          <p>{t("dayEat")}</p>
          <h1>{week_result} kk </h1>
        </div>
        <div className={style.Block}>
          <p>{t("dayLose")}</p>
          <h1>{days} kk </h1>
        </div>
      </div>
      <div className={style.navigate}>
        <button onClick={qidiruv} className={style.button1}>
          {t("qidirish")}
        </button>
        <button onClick={settings} className={style.button1}>
          {t("settings")}
        </button>
      </div>

      <div className={style.topshiriq}>
        {data &&
        data.task_sport_can_not &&
        data.task_sport_can_not[0] &&
        data.task_sport_can_not[0].video ? (
          <>
            <h1 className={style.Title}>{t("Topshiriqlar")}</h1>
            <p className={style.p}>{t("unutmang")}</p>
            <div className={style.topshiriq}>
              <iframe
                width="420"
                height="345"
                title="video"
                src={data.task_sport_can_not[0].video}
              />
              <div className={style.Topshiriq2}>
                <p>{t("firstTask")}</p>
              </div>
              <label className={style.checkbox}>
                <input type="checkbox" className={style.checkbox__input} />
                <span className={style.checkbox__inner}></span>
              </label>
            </div>
          </>
        ) : data &&
          data.task_dieta_can_not &&
          data.task_dieta_can_not[0] &&
          data.task_dieta_can_not[0].video ? (
          <>
            <h1 className={style.Title}>{t("tasks")}</h1>
            <p className={style.p}>
              {t('noteTask')}
            </p>
            <div className={style.topshiriq}>
              <iframe
                width="420"
                height="345"
                title="video"
                src={data.task_dieta_can_not[0].video}
              />
              <div className={style.Topshiriq2}>
                <p>{t("firstTask")}</p>
              </div>
              <label className={style.checkbox}>
                <input type="checkbox" className={style.checkbox__input} />
                <span className={style.checkbox__inner}></span>
              </label>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
});
export default Conclusion;

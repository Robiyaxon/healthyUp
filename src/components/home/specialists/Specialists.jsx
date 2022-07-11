import React, { useEffect, useState } from "react";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Rate } from "antd";
import axios from "axios";

import person from "../../../assets/home/specialists/person.webp";

import styles from "./Specialists.module.css";
import "./Specialists.css";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

var config = {
  method: "get",
  url: "http://ehealthuz.pythonanywhere.com/expert/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const Specialists = React.memo(() => {
  const {t}=useTranslation()
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) { });
  }, [setData]);
  const dataMap = data
    .filter((item) => item.image && item.reyting > 0)
    .sort((a, b) => b.reyting - a.reyting)
    .slice(0, 4)
    .map((d, index) => {
      let img = d.image
        ? "http://ehealthuz.pythonanywhere.com/" + d.image
        : person;
      // let image = "http://ehealthuz.pythonanywhere.com/" + img;
      return (
        <NavLink to={"/singilur/" + d.id} className="cards cards--three" key={index}>

          <img src={img} className="img-responsive" alt="rasm bor edi!" />
          <Rate disabled defaultValue={d.reyting / d.reyting_count} />

          <span className="cards--three__rect-1">
            <span className="shadow-1"></span>
            <h2>{d.first_name + " " + d.last_name}</h2>
            <p>{d.expert_type === 1 ? "dietolog" : "Treyner"}</p>
          </span>
          <span className="cards--three__rect-2">
            <span className="shadow-2"></span>
          </span>
          <span className="cards--three__circle"></span>
          <ul className="cards--three__list">
            <li>

              <FacebookFilled />

            </li>
            <li>
              {" "}
              <InstagramFilled />
            </li>
          </ul>
        </NavLink>
      );
    });
  return (
    <div className={styles.specialists}>
      <h1 className={styles.title}>{t("Specialists")}</h1>
      <p className={styles.desc}>
     {t("Our_site")}
      </p>
      <div className={styles.block}>
        <div className="card__collection clear-fix">{dataMap}</div>
      </div>
    </div>
  );
})

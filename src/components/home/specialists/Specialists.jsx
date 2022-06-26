/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import { Rate } from "antd";
import axios from "axios";

import person from "../../../assets/home/specialists/person.png";

import styles from "./Specialists.module.css";
import "./Specialists.css";

var config = {
  method: "get",
  url: "http://ehealthuz.pythonanywhere.com/expert/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const Specialists = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  console.log(data);
  const dataMap = data
    .filter((item) => item.image && item.reyting > 0)
    .sort((a, b) => b.reyting - a.reyting)
    .slice(0, 4)
    .map((d, index) => {
      let img = d.image
        ? "http://ehealthuz.pythonanywhere.com/" + d.image
        : person;
      // let image = "http://ehealthuz.pythonanywhere.com/" + img;
      console.log(img);
      return (
        <div className="cards cards--three" key={index}>
          <img src={img} className="img-responsive" alt="" />
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
              <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313665994039%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=313665994039&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwtcCVBhA0EiwAT1fY7zwwxLeO9390VnGUarqwnk5WG0PF1ROEdvR-rjnw1TQBFFSjmLsL6hoCeCkQAvD_BwE">
                <FacebookFilled />
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.instagram.com/accounts/login/">
                <InstagramFilled />
              </a>
            </li>
          </ul>
        </div>
      );
    });
  return (
    <div className={styles.specialists}>
      <h1 className={styles.title}>Mutaxassislar</h1>
      <p className={styles.desc}>
        Saytimiz orqali eng yaxshi mutaxassislar orasiga qo'shiling
      </p>
      <div className={styles.block}>
        <div className="card__collection clear-fix">{dataMap}</div>
      </div>
    </div>
  );
};

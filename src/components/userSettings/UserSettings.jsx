import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import InputFormUser from "./InputFormUser";

import style from "./UserSettings.module.css";

const UserSettings = ({ first_name, last_name, type }) => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

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

  return (
    <div className={style.body}>
      <h1 className={style.body__title}>
        {t("hello")} {data.first_name} {data.last_name}
      </h1>
      <p className={style.body__text}>
        {t("AccountSettings")}
      </p>
      <div className={style.__main}>
        <div>
          <InputFormUser type={type} data={data} />
        </div>
      </div>
    </div>
  );
};

export default UserSettings;

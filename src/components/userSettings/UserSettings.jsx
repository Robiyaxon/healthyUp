import React, { Component, useEffect } from "react";
import UploadImg from "./UploadImg";

import style from "./UserSettings.module.css";
import InputForm from "./InputForm";
import { useState } from "react";
import { instance } from './../../api/api';
import axios from 'axios';


const UserSettings = ({ first_name, last_name, type }) => {
  const [img, setImg] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // instance.get('user/')
    //   .then(function (response) {
    //     setData(response.data);
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
      var config = {
        method: "get",
        url: "http://ehealthuz.pythonanywhere.com/user/",
        headers: {
          "Content-Type": "application/json",
          "Authentication": "token " + localStorage.getItem("token")
        },
      };
  
      axios(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }, []);
  console.log(data);
  return (
    <div className={style.body}>
      <h1 className={style.body__title}>
        Salom {data.first_name} {data.last_name}
      </h1>
      <p className={style.body__text}>
        O‘zingiz haqingizda ma'lumotlarni tahrirlang
      </p>
      <div>
        <UploadImg setImg={setImg} />
        <div>
          <InputForm type={type} img={img} data={data}/>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
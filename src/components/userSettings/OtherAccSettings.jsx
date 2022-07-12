import React, { useState, useEffect } from "react";
import UploadImg from "./UploadImg";

import style from "./UserSettings.module.css";
import InputForm from "./InputForm";
import axios from 'axios';


const OtherAccSettings = ({ first_name, last_name, type }) => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState(null)

  useEffect(() => {
    // instance.get('user/')
    //   .then(function (response) {
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
      var config = {
        method: "get",
        url: "http://ehealthuz.pythonanywhere.com/user/",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "token " + localStorage.getItem("token")
        },
      };

      console.log(
        localStorage.getItem("token")
      );
  
      axios(config)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
        setImg(response.data ? response.data.image : null)
      })
      .catch(function (error) {
        console.log(error);
      });
  
  }, []);

  // console.log(img);

  if (!data) {
    return <>Some wait...</>
  }
  
// console.log(data.image);



  console.log(data);
  return (
    <div className={style.body}>
      <h1 className={style.body__title}>
        Salom {data.first_name} {data.last_name}
      </h1>
      <p className={style.body__text}>
        O‘zingiz haqingizda ma'lumotlarni tahrirlang
      </p>
      <div className={style.__main}>
        <UploadImg setImg={setImg} img={img} />
        <div>
          <InputForm type={type} img={img} data={data}/>
        </div>
      </div>
    </div>
  );
};

export default OtherAccSettings;

import React from "react";
import UploadImg from "./UploadImg";

import style from "./OtherCreateAccount.module.css";
import InputForm from "./InputForm";
import { useState } from "react";

import axios from "axios";
import { Button } from "antd";

const OtherCreateAccount = ({ first_name, last_name }) => {
  const [img, setImg] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name1, setFirst_name] = useState("");
  const [last_name1, setLast_name] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState("");
  const [addres, setAddres] = useState("");
  const [info, setInfo] = useState("");
  
  // var myArray = [{'id':'73','foo':'bar'},{'id':'45','foo':'bar'},{'id':'74','foo':'bar'}];

// console.log(myArray.sort((a,b)=>b.id-a.id))

  var data = new FormData();
  data.append("username", userName);
  data.append("password", password);
  data.append("email", email);
  data.append("first_name", first_name1);
  data.append("last_name", last_name1);
  data.append("bio", bio);
  data.append("age", age);
  // sdfdsfgsdg
  data.append("experience", "1");
  data.append("birthday", "1975-05-22");
  data.append("addres", addres);
  data.append("information", info);
  data.append("phone", "+998997777799");
  // data.append('pic', img ? img : '');
  data.append("type", "2");
  data.append("gender", "2");

  var config = {
    method: "post",
    url: "http://10.10.8.46:8000/register/",

    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className={style.body}>
      <h1 className={style.body__title}>
        Salom {first_name} {last_name}
      </h1>
      <p className={style.body__text}>
        O‘zingiz haqingizda ma'lumotlarni to‘ldiring
      </p>
      <div className={style.body__img_and_inp}>
        <UploadImg setImg={setImg} />
        <div>
          <InputForm
            setUserName={setUserName}
            setPassword={setPassword}
            setEmail={setEmail}
            setFirst_name={setFirst_name}
            setLast_name={setLast_name}
            setBio={setBio}
            setAge={setAge}
            setAddres={setAddres}
            setInfo={setInfo}
          />
        </div>
        <input type={"range"} />
      </div>
    </div>
  );
};

export default OtherCreateAccount;

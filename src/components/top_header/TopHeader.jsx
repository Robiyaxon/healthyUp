import React, { useEffect, useState } from "react";
import style from "./TopHeader.module.css";
import logo from "../../assets/TopHeader/logo.svg";
import navbarOpen from "../../assets/TopHeader/navbaricon.svg";
import i18n from "./../../i18n";
import { Drawer } from "antd";
import { Navbar } from "../navbar/Navbar";
import { instance } from "../../api/api";
import  axios  from 'axios';
var config = {
  method: 'get',
  url: 'http://10.10.8.46:8000/product/',
  headers: { 
  'Content-Type': 'application/json'
  }
};
export const TopHeader = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }, []);
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    setLang(value.target.value);
    localStorage.setItem("lang", value.target.value);
    i18n.changeLanguage(value.target.value);
  }
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={style.Wrapper}>
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <Navbar onClose={onClose} />
      </Drawer>
      <img src={logo} alt="" />
      <div className={style.Drawer}>
        <div className={style.select}>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
          </select>
        </div>
        <img
          src={navbarOpen}
          className={style.NavbarIcon}
          alt=""
          onClick={showDrawer}
        />
      </div>
    </div>
  );
};

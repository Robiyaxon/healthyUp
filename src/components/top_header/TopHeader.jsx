import React, { useEffect, useState } from "react";
import style from "./TopHeader.module.css";
import "./scroll.css";
import logo from "../../assets/TopHeader/logo.svg";
import navbarOpen from "../../assets/TopHeader/navbaricon.svg";
import i18n from "./../../i18n";
import { Drawer } from "antd";
import { useDispatch } from "react-redux";

import { Navbar } from "../navbar/Navbar";
// import { instance } from "../../api/api";
import axios from "axios";

import { NavLink } from "react-router-dom";

var config = {
  method: "get",
  url: "http://10.10.8.46:8000/homeheader/",
  headers: {
    "Content-Type": "application/json",
  },
};
export const TopHeader = () => {
  // const [image, setImage] = useState([]);
  const [scroll, setScroll] = useState("");
  window.addEventListener("scroll", () => {
    if (window.scrollY < 600) {
      setScroll("");
    } else {
      setScroll("scroll23");
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => {});
      axios(config)
        .then(function (response) {
          // setImage(response.data);
        })
        .catch(function (error) {});
    };
  }, []);
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  function handleChange(value) {
    setLang(value.target.value);
    localStorage.setItem("lang", value.target.value);
    i18n.changeLanguage(value.target.value);
    dispatch({ type: "LANG_CHANGED", payload: value.target.value });
  }
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={"Wrapper" + scroll}>
      <Drawer
        placement="right"
        onClose={onClose}
        visible={visible}
        className={style.Drawer__navbar}
      >
        <Navbar onClose={onClose} />
      </Drawer>
      <NavLink to="/">
        {" "}
        <img src={logo} alt="" />
      </NavLink>

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

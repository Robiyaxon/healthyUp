import React, { useState } from "react";
import style from "./TopHeader.module.css";
import logo from "../../assets/TopHeader/logo.svg";
import i18n from "./../../i18n";
export const TopHeader = () => {
  const defaultLang = localStorage.getItem("lang") || "uz";
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    setLang(value.target.value);
    localStorage.setItem("lang", value.target.value);
    i18n.changeLanguage(value.target.value);
  }
  const [lang, setLang] = useState(defaultLang);

  return (
    <div className={style.Wrapper}>
      <img src={logo} alt="" />
      <div>
        <div className={style.select}>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="eng">EN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

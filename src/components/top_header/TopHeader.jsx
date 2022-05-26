import React, { useState } from "react";
import i18n from "./../../i18n";
import style from "./TopHeader.module.css";
import { useDispatch } from "react-redux";
import logo from "../../assets/TopHeader/logo.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const TopHeader = () => {
  const dispatch = useDispatch();
  const defaultLang = localStorage.getItem("lang") || "uz";
  const { t } = useTranslation();
  const [lang, setLang] = useState(defaultLang);
  function handleChange(value) {
    setLang(value.target.value);
    localStorage.setItem("lang", value.target.value);
    i18n.changeLanguage(value.target.value);
    dispatch({ type: "LANG_CHANGED", payload: value.target.value });
  }
  const map = [
    { id: 2, name: t("navbar1"), url: "about_us" },
    { id: 3, name: t("navbar2"), url: "contact" },
  ];
  const map2 = map.map((a) => (
    <NavLink
      key={a.id}
      className={({ isActive }) => (isActive ? "active" : "Navlink")}
      to={a.url}
    >
      {a.name}
    </NavLink>
  ));
  return (
    <div className={style.Wrapper}>
      <div className={style.Block}>
        <NavLink to="/"> <img src={logo} alt="" /></NavLink>
        <div className={style.Menu__link}>
          <div className={style.Navlink}>{map2}</div>
          <button  className={style.Navlink_href}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <NavLink to='/'>Kirish</NavLink>
            
          </button>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
          </select>
          
        </div>
      </div>
    </div>
  );
};

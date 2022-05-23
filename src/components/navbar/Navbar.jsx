import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Navbar = (props) => {
  const { t } = useTranslation();
  const map = [
    { id: 1, name: t("navbar5"), url: "/" },
    { id: 2, name: t("navbar1"), url: "my_cabinets" },
    { id: 3, name: t("navbar2"), url: "news" },
    { id: 4, name: t("navbar3"), url: "about_us" },
    { id: 5, name: t("navbar4"), url: "contact" },
  ];
  const map2 = map.map((a) => (
    <NavLink key={a.id}
      onClick={props.onClose}
      className={({ isActive }) => (isActive ? "active" : "Navlink")}
      to={a.url}
    >
      {a.name}
    </NavLink>
  ));
  return (
    <div className={style.Wrapper}>
      <NavLink
        onClick={props.onClose}
        className={({ isActive }) => (isActive ? "active" : "Navlink")}
        to={"/"}
      >
        {t("navbar5")}
      </NavLink>
      <NavLink
        onClick={props.onClose}
        className={({ isActive }) => (isActive ? "active" : "Navlink")}
        to={"my_cabinets"}
      >
        {t("navbar1")}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "Navlink")}
        onClick={props.onClose}
        to={"news"}
      >
        {t("navbar2")}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "Navlink")}
        onClick={props.onClose}
        to={"about_us"}
      >
        {t("navbar3")}
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "Navlink")}
        onClick={props.onClose}
        to={"contact"}
      >
        {t("navbar4")}
      </NavLink>
      {map2}
      <a href="tel:+998 90 763 09 15" className={style.Wrapper__tel}>+998 90 763 09 15</a>
    </div>
  );
};

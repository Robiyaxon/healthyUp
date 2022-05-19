import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Navbar = (props) => {
  const { t } = useTranslation();

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
    </div>
  );
};

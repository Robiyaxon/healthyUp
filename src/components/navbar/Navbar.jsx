import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const Navbar =  React.memo((props) => {
  const { t } = useTranslation();
  const map = [
    { id: 1, name: t("navbar5"), url: "/" },
    { id: 2, name: t("navbar1"), url: "my_cabinets" },
    { id: 3, name: t("navbar2"), url: "news" },
    { id: 4, name: t("navbar3"), url: "about_us" },
    { id: 5, name: t("navbar4"), url: "contact" },
  ];
  const map2 = map.map((a) => (
    <NavLink
      key={a.id}
      onClick={props.onClose}
      className={({ isActive }) => (isActive ? "active" : "Navlink")}
      to={a.url}
    >
      {a.name}
    </NavLink>
  ));
  return (
    <div className={style.Wrapper}>
      {map2}
      <a href="tel:+998 90 763 09 15" className={style.Wrapper__tel}>
        +998 90 763 09 15
      </a>
    </div>
  );
})

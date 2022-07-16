import React, { useEffect, useState } from "react";
import i18n from "./../../i18n";
import style from "./TopHeader.module.css";
import { useDispatch } from "react-redux";
import logo from "../../assets/home/search/logo2.png";
import drawer from "../../assets/home/header/drawer.webp";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Drawer } from "antd";
import { useNavigate } from 'react-router-dom';

export const TopHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const [scroll, setScroll] = useState("");
  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
      setScroll("");
    } else {
      setScroll(style.scroller);
    }
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, [scroll]);

  function handleChange(event) {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
    dispatch({ type: "LANG_CHANGED", payload: event.target.value });
  }
  const onClose = () => {
    setVisible(false);
  };
  const map = [
    { id: 1, name: t("navbar5"), url: "/" },
    { id: 2, name: t("navbar1"), url: "about_us" },
    { id: 3, name: t("navbar2"), url: "contact" },
    { id: 4, name: "FAQ", url: "faq" },
  ];

  const map2 = map.map((a) => (
    <NavLink
      key={a.id}
      onClick={onClose}
      className={({ isActive }) => (isActive ? "active" : "Navlink")}
      to={a.url}
      id="topHeader"
    >
      {a.name}
    </NavLink>
  ));
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const click = () => {
    navigate("login");
    setVisible(false);
  };
  return (
    <>
      <Drawer placement="right" onClose={onClose} visible={visible} >
        <div className={style.Drawer_Block_Navlink + " " + scroll}>
          {map2}
          <button className={style.Navlink_href} onClick={click}>

            {t("homeHeaderBtn1")}
          </button>
        </div>
      </Drawer>
      <div className={style.Top_Header + " " + scroll}>
        <div className={style.Block}>
          <NavLink to="/home" className={style.Block_Navlink}>
            <img src={logo} alt="rasm bor edi!" />
          </NavLink>
          <div className={style.Menu__link}>
            <div className={style.Navlink + " " + style.stroke}>
              {map2}

              <button className={style.Navlink_href} onClick={click}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {t("homeHeaderBtn1")}
              </button>
            </div>

            <select name="lang" value={lang} onChange={handleChange}>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <div className={style.Drawer_Block}>
              <img src={drawer} alt="rasm bor edi!" onClick={showDrawer} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";

import style from "./LoginPages.module.css";

export const BtnAnimation = ({ text, link, classes = "" }) => {
  useEffect(() => {
  }, []);
  return (
    <NavLink
      to={link}
      className={"container " + classes}
    >
      <span>{text}</span>
    </NavLink>
  );
};


const LoginPages = ({ navigateUrl, data, title }) => {
  const navigate = useNavigate();

  const OnClick = (who) => {
    alert(who.target.innerText);
    navigate(navigateUrl);
  };

  const dataMap = data.map((d) => (
    <button onClick={OnClick} key={d.id}>
      {d.name}
    </button>
  ));

  return (
    <div className={style.body}>
      <h1>{title}</h1>
      {dataMap}
    </div>
  );
};

export default LoginPages;


import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import style from "./LoginPages.module.css";

export const BtnAnimation = ({ text, link, classes = "" }) => {
  useEffect(() => {}, []);
  return (
    <NavLink to={link} className={"container " + classes}>
      <span>{text}</span>
    </NavLink>
  );
};


const LoginPages = ({
  navigateUrl,
  navigateUrl2 = navigateUrl,
  data,
  title,
  settype,
}) => {
  const navigate = useNavigate();

  const OnClick = (who) => {
    const id = Number(who.target.id) === 1 ;
    console.log(id);
    if (Number(who.target.id) === 1) {
      navigate(navigateUrl);
    } else {
      navigate(navigateUrl2);   
    }
    settype(who.target.id);
  };

  const dataMap = data.map((d) => (
    <button onClick={OnClick} key={d.id} id={d.id}>
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

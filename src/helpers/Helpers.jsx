import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import style from "./LoginPages.module.css";

export const BtnAnimation = React.memo(({ text, link, classes = "" }) => {
  return (
    <NavLink to={link} className={"container " + classes}>
      <span>{text}</span>
    </NavLink>
  );
});

const LoginPages = ({
  navigateUrl,
  navigateUrl2 = navigateUrl,
  data,
  title,
  settype,
  navigateUrl3 = navigateUrl2,
}) => {
  const navigate = useNavigate();

  const OnClick = (who) => {
    // const id = Number(who.target.id) === 1 ;
    if (Number(who.target.id) === 1) {
      navigate(navigateUrl);
    } else if (Number(who.target.id) === 2) {
      navigate(navigateUrl2);
    } else if (Number(who.target.id) === 3) {
      navigate(navigateUrl3);
    }
    // console.log(id);
    //
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

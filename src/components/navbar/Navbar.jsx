import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = (props) => {
  return (
    <div className={style.Wrapper}>
      <NavLink onClick={props.onClose} className={style.Navlink} to={"my_cabinets"}>
        My Cabinet{" "}
      </NavLink>
      <NavLink className={style.Navlink} onClick={props.onClose} to={"news"}>
        News{" "}
      </NavLink>
      <NavLink className={style.Navlink} onClick={props.onClose} to={"about_us"}>
        About Us{" "}
      </NavLink>
      <NavLink className={style.Navlink} onClick={props.onClose} to={"contact"}>
        Contact{" "}
      </NavLink>
    </div>
  );
};

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"
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

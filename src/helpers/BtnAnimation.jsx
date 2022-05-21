import React from "react";
import { NavLink } from 'react-router-dom';

export const BtnAnimation = ({ text, link }) => {
  return (
    <NavLink to={link} className={"container"}>
      {text}
    </NavLink>
  );
};

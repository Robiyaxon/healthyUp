import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
export const BtnAnimation = ({ text, link, classes='' }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <NavLink to={link} className={"container " + classes}>
        <span>{text}</span>
    </NavLink>
  );
};

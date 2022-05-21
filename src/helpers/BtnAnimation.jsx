import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
export const BtnAnimation = ({ text, link, classes='' }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <NavLink  data-aos="fade-down"
    data-aos-duration="1000" to={link} className={"container " + classes}>
      {text}
    </NavLink>
  );
};

import React, { useEffect } from "react";
import style from "./task.module.css";
import task from "../../assets/TopHeader/task.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { SocialNetworks } from "./SocialNetworks";

export const Task = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const map = [
    {
      id: 1,
      name: "Robiya To`xtayeva",
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
    sint!`,
      capitalLetter: "F",
    },
    {
      id: 2,
      name: "Robiya To`xtayeva",
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
    sint!`,
      capitalLetter: "R",
    },
    {
      id: 3,
      name: "Robiya To`xtayeva",
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
    sint!`,
      capitalLetter: "R",
    },
    {
      id: 4,
      name: "Robiya To`xtayeva",
      title: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
    sint!`,
      capitalLetter: "R",
    },
  ];
  const mapCard = map.map((a) => (
    <div key={a.id} className={style.Card}>
      <div className={style.Card__UserName}>
        <div className={style.Card__UserCapitalLetter}>{a.capitalLetter}</div>
        <p data-aos="fade-down" data-aos-duration="1000">
          {a.name}
        </p>
      </div>
      <h6 data-aos="fade-down" data-aos-duration="1000">
        {a.title}
      </h6>
    </div>
  ));
  return (
    <>
      <div className={style.wrapper}>
        <h1 data-aos="fade-down" data-aos-duration="1000">
          Biz sizga tezroq natijalarga erishishga yordam beradigan va tanangizni
          chiniqtiradigan topshiriqlar beramiz.
        </h1>
        <div className={style.Task__img}>
          <img
            src={task}
            alt=""
            data-aos="fade-down"
            data-aos-duration="1000"
          />
        </div>
        <div className={style.Cards_Blog}>{mapCard}</div>
      </div>
      <SocialNetworks />
    </>
  );
};

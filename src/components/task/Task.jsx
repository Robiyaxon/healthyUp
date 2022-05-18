import React from "react";
import style from "./task.module.css";
import task from "../../assets/TopHeader/task.svg";
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
      <p>{a.name}</p>
    </div>
    <h6>{a.title}</h6>
  </div>
));
export const Task = () => {
  return (
    <>
      <div className={style.wrapper}>
        <h1>
          Biz sizga tezroq natijalarga erishishga yordam beradigan va tanangizni
          chiniqtiradigan topshiriqlar beramiz.
        </h1>
        <div className={style.Task__img}>
          <img src={task} alt="" />
        </div>
        <div className={style.Cards_Blog}>{mapCard}</div>
      </div>
      {/* <SocialNetworks /> */}
    </>
  );
};
export const SocialNetworks = () => {
  return <div className={style.SocialNetworks}>
   <div className={style.SocialNetworks__icon}>sesleoeokded</div>
   <div className={style.SocialNetworks__text}>dedededed</div>
  </div>;
};

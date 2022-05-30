import React from "react";
import style from "./Search.module.css";
import img1 from "../../assets/home/search/people1.svg"
export const Search = () => {
  return (
    <div className={style.Search}>
      <div>
<h1>500+ dan ziyod mutaxassislar saytimizda ro‘yxatdan otdi</h1>
<p></p>
      </div>
      <div>
        <SearchImg />
      </div>
    </div>
  );
};
export const SearchImg = () => { 
  return <div className={style.Search_Img}><img src={img1} alt="" /></div>;
};

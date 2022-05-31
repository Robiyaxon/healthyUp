import React from "react";
import style from "./Search.module.css";
import img1 from "../../assets/home/search/group.svg";
import Search from "antd/lib/input/Search";
const onSearch = (value) => console.log(value);
export const Search2 = () => {
  return (
    <div className={style.Search}>
      <div className={style.Title}>
        <h1>500+ dan ziyod mutaxassislar saytimizda ro‘yxatdan otdi</h1>
        <p>
          Ortiqcha vazndan qiynalayotgan insonlarga yordam berish uchun 500+ dan
          ziyod mutaxassislar saytimizda ro‘yxatdan otdi
        </p>
        <Search
          placeholder="Mutaxassis topish"
          allowClear
          enterButton="Qidirish"
          size="large"
          onSearch={onSearch}
          className={style.input}
        />
      </div>
      <div className={style.SearchImg}>
        <SearchImg />
      </div>
    </div>
  );
};
export const SearchImg = () => {
  return (
    <div className={style.Search_Img}>
      <img src={img1} alt="" className={style.img1} />
    </div>
  );
};

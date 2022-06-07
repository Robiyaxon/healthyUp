import React, { useEffect } from "react";
import style from "./Search.module.css";
import img1 from "../../assets/home/search/group.svg";
import Search from "antd/lib/input/Search";
import Aos from "aos";
import "aos/dist/aos.css";

const onSearch = (value) => console.log(value);

export const Search2 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={style.Search}>
      <div className={style.Title}>
        <h1 data-aos="fade-up" data-aos-duration="1000">500+ dan ziyod mutaxassislar saytimizda ro‘yxatdan otdi</h1>
        <p data-aos="fade-up" data-aos-duration="1000">
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
      <img data-aos="fade-up" data-aos-duration="1000" src={img1} alt="" className={style.img1} />
    </div>
  );
};

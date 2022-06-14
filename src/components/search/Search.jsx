import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "antd/lib/input/Search";

import img1 from "../../assets/home/search/group.svg";

import { instance } from './../../api/api';

import style from "./Search.module.css";

const onSearch = (value) => console.log(value);

export const MySearch = () => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);

  useEffect(() => {
    instance.get("search_static/").then((response) => setData(response.data));
  }, []);

  return (
    <>
      {data.map((a) => (
        <div className={style.Search} key={a.id}>
          <div className={style.Title}>
            <h1>
              {language === "uz" ? (
                <>{a.title_uz}</>
              ) : language === "en" ? (
                <>{a.title_en}</>
              ) : language === "ru" ? (
                <>{a.title_ru}</>
              ) : (
                <> 500+ dan ziyod mutaxassislar saytimizda ro‘yxatdan otdi</>
              )}
            </h1>
            <p>
              {language === "uz" ? (
                <>{a.text_uz}</>
              ) : language === "en" ? (
                <>{a.text_en}</>
              ) : language === "ru" ? (
                <>{a.text_ru}</>
              ) : (
                <>
                  {" "}
                  Ortiqcha vazndan qiynalayotgan insonlarga yordam berish uchun
                  500+ dan ziyod mutaxassislar saytimizda ro‘yxatdan otdi
                </>
              )}
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
      ))}
    </>
  );
};
export const SearchImg = () => {
  return (
    <div className={style.Search_Img}>
      <img
        src={img1}
        alt=""
        className={style.img1}
      />
    </div>
  );
};

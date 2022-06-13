import React, { useEffect, useState } from "react";
import style from "./Search.module.css";
import img1 from "../../assets/home/search/group.svg";
import Search from "antd/lib/input/Search";
import axios from "axios";
import { useSelector } from "react-redux";
const onSearch = (value) => console.log(value);
var config = {
  method: "get",
  url: "http://10.10.8.46:8000/search_static/",
  headers: {
    "Content-Type": "application/json",
  },
};
export const MySearch = () => {
  const [data, setData] = useState([]);
  const { language } = useSelector((state) => state.langReducer);

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }, []);
  return (
    <>
      {data.map((a) => (
        <div className={style.Search}>
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

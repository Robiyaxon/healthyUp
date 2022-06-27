import React, { memo } from "react";
import Search from "antd/lib/input/Search";
import img1 from "../../assets/home/header/logo.png";
import style from "./Search.module.css";
import { useTranslation } from 'react-i18next';

export const MySearch = memo(() => {

  const onSearch = (value) => console.log(value);
  const { t } = useTranslation()

  return (
    <>
      <div className={style.Search} >
        <div className={style.Title}>
          <h1>
            {t("my_serch")}
          </h1>
          <p>
            {t("text_my_serch")}
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
          <div className={style.Search_Img}>
            <img
              src={img1}
              alt=""
              className={style.img1}
            />
          </div>
        </div>
      </div>

    </>
  );
})


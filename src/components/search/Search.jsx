import React, { memo } from "react";
import img1 from "../../assets/home/header/logo.png";
import style from "./Search.module.css";
import { useTranslation } from 'react-i18next';
export const MySearch = memo(() => {
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
        </div>
        <div className={style.SearchImg}>
          <div className={style.Search_Img}>
            <img
              src={img1}
              alt="rasm bor edi!"
              className={style.img1}
            />
          </div>
        </div>
      </div>

    </>
  );
})


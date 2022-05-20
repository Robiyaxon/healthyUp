import React from "react";

import main from "../../../assets/home/header/main.png";

import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__img}>
          <img src={main} alt="" />
        </div>
        <div className={styles.header__text_block}>
          <h1 className={styles.header__text_block__title}>
            Vazn <strong> yo‘qotishni </strong> istaysizmi
          </h1>
          <p className={styles.header__text_block__text}>
            Parhezshunoslar va murabbiylar ham ro'yxatdan o'tishlari mumkin
            saytimiz orqali o'z maslahatlarini berishadi.
          </p>
          <div className={styles.header__text_block__btn}>
            <div class={'container'}>{t("homeHeaderBtn1")}</div>
            <NavLink to="/signUp" className={'container'}>
              {t("homeHeaderBtn2")}
            </NavLink>
          </div>
        </div>
        <p className={styles.endText}>
          Har qanday vazn yo'qotish dasturiga amal qilishni boshlashdan oldin,
          shifokoringiz bilan maslahatlashishni tavsiya qilamiz
        </p>
      </div>
    </>
  );
};

import React, { useEffect } from "react";

import main from "../../../assets/home/header/main.png";

import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export const Header = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__img}>
          <img src={main} alt=""  data-aos="fade-down"
        data-aos-duration="1000" />
        </div>
        <div className={styles.header__text_block}>
          <h1 className={styles.header__text_block__title} data-aos="fade-down"
          data-aos-duration="1000">
            Vazn <strong> yo‘qotishni </strong> istaysizmi
          </h1>
          <p className={styles.header__text_block__text} data-aos="fade-down"
          data-aos-duration="1000">
            Parhezshunoslar va murabbiylar ham ro'yxatdan o'tishlari mumkin
            saytimiz orqali o'z maslahatlarini berishadi.
          </p>
          <div className={styles.header__text_block__btn}>
            <div className={'container'}>{t("homeHeaderBtn1")}</div>
            <NavLink to="/signUp" className={'container'}>
              {t("homeHeaderBtn2")}
            </NavLink>
          </div>
        </div>
        <p className={styles.endText} data-aos="fade-down"
          data-aos-duration="1000">
          Har qanday vazn yo'qotish dasturiga amal qilishni boshlashdan oldin,
          shifokoringiz bilan maslahatlashishni tavsiya qilamiz
        </p>
      </div>
    </>
  );
};

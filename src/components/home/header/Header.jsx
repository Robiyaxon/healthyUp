import React, { useEffect } from "react";

import main from "../../../assets/home/header/main.png";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { BtnAnimation } from './../../../helpers/BtnAnimation';
export const Header = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  const text = "Vazn yo‘qotishni istaysizmi";
  const first = text.split(' ')[1]
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
            Vazn <strong> {first} </strong> istaysizmi
          </h1>
          <p className={styles.header__text_block__text} data-aos="fade-down"
          data-aos-duration="1000">
            Parhezshunoslar va murabbiylar ham ro'yxatdan o'tishlari mumkin
            saytimiz orqali o'z maslahatlarini berishadi.
          </p>
          <div className={styles.header__text_block__btn}>
            <BtnAnimation text={t("homeHeaderBtn1")} link={"login"} classes={' firstContainer'} />
            <BtnAnimation text={t("homeHeaderBtn2")} link="/signUp" />
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

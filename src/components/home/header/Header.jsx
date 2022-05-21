import React from "react";
import { useTranslation } from "react-i18next";

import main from "../../../assets/home/header/main.png";
import { BtnAnimation } from './../../../helpers/BtnAnimation';

import styles from "./Header.module.css";

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
            <BtnAnimation text={t("homeHeaderBtn1")} link={"login"} />
            <BtnAnimation text={t("homeHeaderBtn2")} link="/signUp" />
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

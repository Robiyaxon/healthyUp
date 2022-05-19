import React from "react";

import main from "../../../assets/home/header/main.png";

import styles from "./Header.module.css";
<<<<<<< HEAD
=======
import { useTranslation } from 'react-i18next';
>>>>>>> 04fbb36230fae9a867d8d18879c990940aa96230

export const Header = () => {
  const { t } = useTranslation();
  return (
<<<<<<< HEAD
    <div className={styles.header}>
      <div className={styles.header__img}>
        <img src={main} alt="header img" />
      </div>
      <div className={styles.header__text_block}>
        <h1 className={styles.header__text_block__title}>
          Vazin <strong> yo‘qoyishni </strong> istaysizmi
        </h1>
        <p className={styles.header__text_block__text}>
          Parhezshunoslar va murabbiylar ham ro'yxatdan o'tishlari mumkin
          saytimiz orqali o'z maslahatlarini berishadi.
        </p>
        <div className={styles.header__text_block__btn}>
          <button>Kirish</button>
          <button>Login</button>
=======
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
            <div class={styles.container}>
              <a
                href="/"
                class={styles.btn + " " + styles.effect01}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t("homeHeaderBtn1")}</span>
              </a>
            </div>
            <div class={styles.container + " " + styles.container2}>
              <a
                href="/"
                class={styles.btn + " " + styles.effect01}
                target="_blank"
                rel="noreferrer"
              >
                <span>{t("homeHeaderBtn2")}</span>
              </a>
            </div>
          </div>
>>>>>>> 04fbb36230fae9a867d8d18879c990940aa96230
        </div>
        <p className={styles.endText}>
          Har qanday vazn yo'qotish dasturiga amal qilishni boshlashdan oldin,
          shifokoringiz bilan maslahatlashishni tavsiya qilamiz
        </p>
      </div>
    </>
  );
};

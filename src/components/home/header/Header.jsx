import React from "react";

import main from "../../../assets/home/header/main.png";
import { Task } from "../../task/Task";

import styles from "./Header.module.css";
import { useTranslation } from 'react-i18next';

const Header = () => {
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
        </div>
        <p className={styles.endText}>
          Har qanday vazn yo'qotish dasturiga amal qilishni boshlashdan oldin,
          shifokoringiz bilan maslahatlashishni tavsiya qilamiz
        </p>
      </div>
      <Task />
    </>
  );
};
export default Header;

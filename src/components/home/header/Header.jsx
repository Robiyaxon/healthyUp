import React from "react";

import main from "../../../assets/home/header/main.png";

import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__img}>
        <img src={main} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default Header;

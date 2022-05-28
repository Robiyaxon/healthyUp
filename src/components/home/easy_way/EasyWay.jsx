import React from "react";
import styles from "./EasyWay.module.css";
import boy from "./../../../assets/home/easy_way/boy.png";
function EasyWay() {
  return (
    <div className={styles.header}>
      <h2 className={styles.header_title}>
        Vazin yo`qotishning eng sodda va oson yollari
      </h2>
      <div className={styles.header_sport}>
        <div className={styles.header__text}>
          <h1>Sport bilan shug‘ullanish</h1>
          <p>
            Sport metabolizmni tezlashtirish usullaridan biridir, ammo, afsuski,
            faqat bu emas. Tabiiyki, ko‘p narsa ovqatlanish va endokrin
            tizimning ishlashiga bog‘liq. Shuning uchun, agar uzoq vaqt davomida
            mashq qilinsa-yu, lekin hech qanday o‘zgarishlar bo‘lmasa, hammasini
            ovqatlanishdan boshlash va gormonlar uchun testdan o‘tish kerak.
          </p>
        </div>
        <img src={boy} alt="bo" />
      </div>
      {/* <div className={styles.header_food}></div> */}
    </div>
  );
}

export default EasyWay;

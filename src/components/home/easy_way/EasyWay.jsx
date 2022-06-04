import React from "react";
import styles from "./EasyWay.module.css";
import boy from "./../../../assets/home/easy_way/boy.png";
import lenta from "./../../../assets/home/easy_way/metr1.png";
import meal from "./../../../assets/home/easy_way/food1.png";
import lenta2 from "./../../../assets/home/easy_way/metr2.png";
import Aos from "aos";
function EasyWay() {;
      Aos.init();
  return (
    <div className={styles.header}>
      <h2 className={styles.header_title} data-aos="fade-up" data-aos-duration="1000">
        Vazin yo`qotishning eng sodda va oson yollari
      </h2>
      <div className={styles.header_sport_wrapper}>
        <div className={styles.header_sport}>
          <div className={styles.header__text}>
            <h1 data-aos="fade-up" data-aos-duration="1000"> Sport bilan shug‘ullanish</h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Sport metabolizmni tezlashtirish usullaridan biridir, ammo,
              afsuski, faqat bu emas. Tabiiyki, ko‘p narsa ovqatlanish va
              endokrin tizimning ishlashiga bog‘liq. Shuning uchun, agar uzoq
              vaqt davomida mashq qilinsa-yu, lekin hech qanday o‘zgarishlar
              bo‘lmasa, hammasini ovqatlanishdan boshlash va gormonlar uchun
              testdan o‘tish kerak.
            </p>
          </div>
          <div className={styles.Boy}>
            <img data-aos="fade-up" data-aos-duration="1000" src={boy} alt="boy" />
          </div>
        </div>
        <div className={styles.header_lenta_wrapper}>
          <img className={styles.header_lenta} src={lenta} alt="lenta" />
        </div>
      </div>

      <div className={styles.header_meal_wrapper}>
        <div className={styles.header_meal}>
          <img data-aos="fade-up" data-aos-duration="1000" src={meal} alt="food img" />
          <div className={styles.header__meal_text}>
            <h1 data-aos="fade-up" data-aos-duration="1000">Meyyor bilan ovqatlanish</h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Soat 18-00 dan keyin ovqat tanovul qilmang. Aynan shu davrda
              organizm faolligi kamayadi va yeyilgan har qanday taom yaxshi hazm
              bo‘lmay, organizmda o‘tirib qoladi. Qabul qilinadigan ovqatning
              asosiy qismi tushlik vaqtiga to‘g‘ri kelishini ta’minlang. Kechki
              ovqat uglevodlar tutmasligi kerak. Iloji bo‘lsa dimlangan
              sabzavotlardan tayyorlangan taomlarni yegan ma’qul.
            </p>
          </div>
        </div>
        <div className={styles.food_lenta_wrapper}>
          <img data-aos="fade-up" data-aos-duration="1000" src={lenta2} alt="lenta" />
        </div>
      </div>
    </div>
  );
}

export default EasyWay;

import React from "react";
import Carousel from "react-elastic-carousel";

import main from "../../../assets/home/carousel/main.png";

import styles from "./Carousel.module.css";

export const MyCarousel = () => {
  return (
    <div className={styles.carousel}>
      <Carousel>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Carousel>
    </div>
  );
};
const Item = () => {
  return (
    <div className={styles.item}>
      <img src={main} alt="" />
      <div  className={styles.item__text}>
        <h1>Vazn yo'qotish uchun eng yaxshi parhez qaysi?</h1>
        <p>
          Ko'pchilik bir necha kilogramm vazn yo'qotish kerakligiga qaror
          qilgandan so'ng, bu savol ko'pchilikni o'ylaydi - vazn yo'qotish uchun
          eng yaxshi tanlov parhezmi? Garchi bu asossiz savol bo'lmasa-da, u
          ko'pincha optimaldan kamroq yondashuvni nazarda tutadi, ya'ni vazn
          yo'qolgunga qadar bir muddat ovqatlanishning tubdan cheklovchi
          rejimini qo'llashni rejalashtirish va keyin odatdagidek ovqatlanishga
          qaytish. Og'irlikni yo'qotgan va undan saqlagan odamlar "moda
          dietalari" ni qabul qilish o'rniga, odatda sog'lom ovqatlanish
          odatlariga doimiy o'tishadi. Shunchaki nosog'lom oziq-ovqatlarni
          sog'lom ovqatlar bilan almashtirish - bir necha haftaga emas, balki
          abadiy - vazn yo'qotishga yordam beradi va boshqa ko'plab
          afzalliklarni...
        </p>
      </div>
    </div>
  );
};

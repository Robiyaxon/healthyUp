import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import main from "../../../assets/home/carousel/main.png";
import { BtnAnimation } from "./../../../helpers/BtnAnimation";
import styles from "./Carousel.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
export const MyCarousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div className={styles.btn_body}>
        <BtnAnimation text={"Barchasi"} link={"login"} />
      </div>
    </div>
  );
};
const Item = () => {
  return (
    <div className={styles.item}>
      <img src={main} alt=""  data-aos="fade-down"
        data-aos-duration="1000" />
      <div className={styles.item__text}>
        <h1  data-aos="fade-down"
        data-aos-duration="1000">Vazn yo'qotish uchun eng yaxshi parhez qaysi?</h1>
        <p  data-aos="fade-down"
        data-aos-duration="1000">
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

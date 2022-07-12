/* eslint-disable eqeqeq */
import React from "react";
import styles from "./Comment.module.css";
// import man2 from "./../../../assets/home/comment/man2.webp";
// import man1 from "./../../../assets/home/comment/man1.webp";
import top from "./../../../assets/home/comment/top.webp";
import bottom from "./../../../assets/home/comment/bottom.webp";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { instance } from "../../../api/api";
import AOS from "aos";
import "aos/dist/aos.css";

const Comment = React.memo(() => {
  const [data, setData] = useState([]);


  useEffect(() => {
    AOS.init({ duration: 2000 });
    instance.get("comment/").then((response) => setData(response.data));
  }, []);


  const { t } = useTranslation();
  const map = data.map((item) => (
    <div data-aos="flip-left" key={item.id} className={styles.header_card1}>
      <p>{item.text}</p>
      <div className={styles.header_person}>
        <img src={item.user.image} alt={item.user.first_name} />
        <div>
          <h3>
            {item.user.first_name} {item.user.last_name}
          </h3>
          <p>
            {item.user.user_type == 2 ? (
              <>Trainer</>
            ) : item.user.user_type == 3 ? (
              <>Dietolog</>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <h2>{t("Comments")}</h2>
        <div className={styles.header_cards}>
          {/* card 1 started */}
          {map}
          {/* card 2 finished */}
          {/* card 3  started*/}
          <div className={styles.header_card3}>
            <img className={styles.top} src={top} alt="top img" />
            <div className={styles.header_card3_content}>
              <h4>{t("happy")}</h4>
              <p>{t("help_you")}</p>
            </div>
            <img className={styles.bottom} src={bottom} alt="bottom img" />
          </div>
          {/* card 3 finished */}
        </div>
      </div>
    </div>
  );
});
export default Comment;

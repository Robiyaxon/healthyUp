import React from "react";
import styles from "./Comment.module.css";
import man2 from "./../../../assets/home/comment/man2.webp";
import man1 from "./../../../assets/home/comment/man1.webp";
import top from "./../../../assets/home/comment/top.webp";
import bottom from "./../../../assets/home/comment/bottom.webp";
// import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Comment = React.memo(() =>{
  const {t}=useTranslation()
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <h2 >
     {t("Comments")}
        </h2>
        <div className={styles.header_cards}>
          {/* card 1 started */}
          <div  className={styles.header_card1}>
            <p>
              Veb sayt menga yoqdi. Semizlik kasalidan qynalyotgan insonlarga
              yordam berayotganimdan hursandman
            </p>
            <div className={styles.header_person}>
              <img
                src={man2}
                alt="person 1 img"
              />
              <div>
                <h3 >
                  Egamberdi Odilov
                </h3>
                <p >
                  Dietolog
                </p>
              </div>
            </div>
          </div>

          {/*card 1 finished */}

          {/* card 2 started */}
          <div
            className={styles.header_card1 + " " + styles.header_card2}
          >
            <p >
              Semizlik kasalidan qiynalayotganlarni ko`rsam ularga juda
              achinaman. Men ularga bepul yordam berishga tayyorman
            </p>
            <div className={styles.header_person}>
              <img
                src={man1}
                alt="person 2 img"
              />
              <div>
                <h3 >
                  Hikmatillo Turg‘unov
                </h3>
                <p >
                  Treyner
                </p>
              </div>
            </div>
          </div>

          {/* card 2 finished */}
          {/* card 3  started*/}
          <div className={styles.header_card3}>
            <img
              className={styles.top}
              src={top}
              alt="top img"
            />
            <div className={styles.header_card3_content}>
              <h4>
              {t("happy")}
              </h4>
              <p>
               {t("help_you")}
              </p>
            </div>
            <img
              className={styles.bottom}
              src={bottom}
              alt="bottom img"
            />
          </div>
          {/* card 3 finished */}
        </div>
      </div>
    </div>
  );
})
export default Comment;

import React from "react";
import styles from "./Comment.module.css";
import man2 from "./../../../assets/home/comment/man2.png";
import man1 from "./../../../assets/home/comment/man1.png";
import top from "./../../../assets/home/comment/top.png";
import bottom from "./../../../assets/home/comment/bottom.png";
import { useEffect } from "react";

function Comment() {
  useEffect(() => {
  }, []);
  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <h2 >
          Sharxlar
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
                Sizga yordam berayotganimizdan mamnunmiz{" "}
              </h4>
              <p>
                Saytimiz orqali sizga yordam berayotganmizdan hursandmiz
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
}

export default Comment;

import React from "react";
import styles from "./Comment.module.css";
import man2 from "./../../../assets/home/comment/man2.png";
import man1 from "./../../../assets/home/comment/man1.png";
import top from "./../../../assets/home/comment/top.png";
import bottom from "./../../../assets/home/comment/bottom.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Comment() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.header}>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Sharxlar
        </h2>
        <div className={styles.header_cards}>
          {/* card 1 started */}
          <div data-aos="fade-up-right" className={styles.header_card1}>
            <p data-aos="fade-up" data-aos-duration="1000">
              Veb sayt menga yoqdi. Semizlik kasalidan qynalyotgan insonlarga
              yordam berayotganimdan hursandman
            </p>
            <div className={styles.header_person}>
              <img
                src={man2}
                alt="person 1 img"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
              <div>
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Egamberdi Odilov
                </h3>
                <p data-aos="fade-up" data-aos-duration="1000">
                  Dietolog
                </p>
              </div>
            </div>
          </div>

          {/*card 1 finished */}

          {/* card 2 started */}
          <div
            data-aos="fade-up-left"
            className={styles.header_card1 + " " + styles.header_card2}
          >
            <p data-aos="fade-up" data-aos-duration="1000">
              Semizlik kasalidan qiynalayotganlarni ko`rsam ularga juda
              achinaman. Men ularga bepul yordam berishga tayyorman
            </p>
            <div className={styles.header_person}>
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                src={man1}
                alt="person 2 img"
              />
              <div>
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Hikmatillo Turg‘unov
                </h3>
                <p data-aos="fade-up" data-aos-duration="1000">
                  Treyner
                </p>
              </div>
            </div>
          </div>

          {/* card 2 finished */}
          {/* card 3  started*/}
          <div className={styles.header_card3}>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              className={styles.top}
              src={top}
              alt="top img"
            />
            <div className={styles.header_card3_content}>
              <h4 data-aos="fade-up" data-aos-duration="1000">
                Sizga yordam berayotganimizdan mamnunmiz{" "}
              </h4>
              <p data-aos="fade-up" data-aos-duration="1000">
                Saytimiz orqali sizga yordam berayotganmizdan hursandmiz
              </p>
            </div>
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
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

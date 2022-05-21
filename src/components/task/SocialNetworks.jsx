import React, { useEffect } from "react";
import style from "./task.module.css";
import instagram from "../../assets/home/socialnetwork/instagram.svg";
import facebook from "../../assets/home/socialnetwork/facebook.svg";
import telegram from "../../assets/home/socialnetwork/telegram.svg";
import { Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
export const SocialNetworks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={style.SocialNetworks}>
      <div className={style.SocialNetworks__icon}>
        <Row>
          <Col span={1}>
            <a href="https://www.instagram.com/accounts/login/?next=/farkhodjon_malikov_official/related_profiles/">
              {" "}
              <img src={instagram} data-aos="fade-down" data-aos-duration="1000" alt=" " className={style.fa} />
            </a>
          </Col>
        </Row>
        <Row>
          <Col span={7} offset={7}>
            <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1635645080&extra_1=s%7Cc%7C313665994039%7Ce%7Cfacebook%20sign%20in%7C&placement=&creative=313665994039&keyword=facebook%20sign%20in&partner_id=googlesem&extra_2=campaignid%3D1635645080%26adgroupid%3D61402567854%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-4265269489%26loc_physical_ms%3D9075972%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwspKUBhCvARIsAB2IYuubzP6Ofm_UWS5ZerN33W8LSYyorLxApXBlLQLVtQvEA33SoU5Y0LUaAqnCEALw_wcB">
              <img src={facebook} data-aos="fade-down" data-aos-duration="1000" className={style.fa} alt="" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col span={1}>
            <a href="https://telegram.org/">
              {" "}
              <img src={telegram} data-aos="fade-down" data-aos-duration="1000"  alt="" className={style.fa} />
            </a>
          </Col>
        </Row>
      </div>
      <div className={style.SocialNetworks__text}>
        <h1 data-aos="fade-down" data-aos-duration="1000">Bizni ijtimoiy tarmoqlardan toping</h1>
        <p data-aos="fade-down" data-aos-duration="1000">
          Muhim yangilanishlar va vazn yo'qotish bo'yicha foydali maslahatlar
          uchun Unimeal umumiy sahifalarini kuzatib boring
        </p>
      </div>
    </div>
  );
};

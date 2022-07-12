import React, { useEffect, useState } from "react";
import style from "./Question.module.css";
import Question2 from "./Question2";
import faq from "../../assets/FAQ/faq.webp";
import { useTranslation } from "react-i18next";
import { instance } from "./../../api/api";
import AOS from "aos";
import "aos/dist/aos.css";
const Question = React.memo(() => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    AOS.init({ duration: 2000 });
    instance.get("question/").then((response) => setData(response.data));
  }, [data]);
  return (
    <div className={style.WrapperQuestion} data-aos="zoom-out">
      <div className={style.Question}></div>
      <div className={style.WrapperCard}>
        <div className={style.CardBlock}>
          <img src={faq} alt="rasm bor edi!" />
          <div>
            <h1> {t("question")}</h1>
            <p>
              {window.innerWidth > 801
                ? t("question_text")
                : window.innerWidth < 430
                ? t("question_text").substring(0, 100) + "..."
                : t("question_text").substring(0, 200) + "..."}
            </p>
          </div>
        </div>
      </div>
      <div className={style.accardion}>
        <h1>{t("faq")}</h1>
        <section className="info">
          {data.map((question) => {
            return <Question2 key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
});
export default Question;

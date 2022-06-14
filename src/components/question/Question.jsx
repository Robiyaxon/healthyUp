import React, { useEffect, useState } from "react";
import style from "./Question.module.css";
import Question2 from "./Question2";
import faq from "../../assets/FAQ/faq.png";
import { useTranslation } from "react-i18next";
import { instance } from './../../api/api';
const Question = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    instance.get("question/").then((response) => setData(response.data));
  }, []);
  return (
    <div className={style.WrapperQuestion}>
      <div className={style.Question}></div>    
      <div className={style.WrapperCard}>
        <div className={style.CardBlock}>
          <img src={faq} alt="" />
          <div>
            <h1>  {t("question")}</h1>
            <p>
            {t("question_text")}
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
};
export default Question;

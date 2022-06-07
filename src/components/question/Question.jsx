import React, { useEffect, useState } from "react";
import style from "./Question.module.css";
import Question2 from "./Question2";
import faq from "../../assets/FAQ/faq.png";
import axios from 'axios';
import { useTranslation } from "react-i18next";
var config = {
  method: "get",
  url: "http://10.10.8.35:8000/question",
  headers: {
    "Content-Type": "application/json",
  },
};
const Question = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
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

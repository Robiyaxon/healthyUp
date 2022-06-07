import React, { useState } from "react";
import style from "./Question.module.css";
// import img from "../../assets/FAQ/logo.svg";
import data from "./data";
import Question2 from "./Question2";
import faq from "../../assets/FAQ/faq.png";
const Question = () => {
  const [questions, setQuestions] = useState(data);
  const [questions2, setQuestions2] = useState(data);

  return (
    <div className={style.WrapperQuestion}>
      <div className={style.Question}></div>    
      <div className={style.WrapperCard}>
        <div className={style.CardBlock}>
          <img src={faq} alt="" />
          <div>
            <h1>Frequently Asked Questions</h1>
            <p>
              Here are a few of the questions we get the most. If you don't see
              what's on your mind, reach out to us anytime on phone, chat, or
              email.
            </p>
          </div>
        </div>
      </div>
      <div className={style.accardion}>
          <h1>Sport  bo`yicha</h1>
      <section className="info">
          {questions.map((question) => {
            return <Question2 key={question.id} {...question} />;
          })}
        </section>

        <h1>Dietolog bo`yicha</h1>

      <section className="info">
          {questions2.map((question) => {
            return <Question2 key={question.id} {...question} />;
          })}
        </section>

      </div>
    
    </div>
  );
};
export default Question;

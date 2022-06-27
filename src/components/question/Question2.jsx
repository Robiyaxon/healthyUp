import React, { useState } from "react";
import "./faq.css"
import { useSelector } from 'react-redux';
import {
  MinusOutlined,PlusOutlined
} from '@ant-design/icons'
const Question =  React.memo(({ id, question_uz, answer_uz,question_ru, answer_ru,question_en,answer_en}) => {
  const { language } = useSelector((state) => state.langReducer);
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question_spec" onClick={() => setShowInfo(!showInfo)}>
      <header>
        <h4> {language === "uz" ? (
            <>{question_uz}</>
          ) : language === "en" ? (
            <>{question_en}</>
          ) : language === "ru" ? (
            <>{question_ru}</>
          ) : (
            <>Kilo yo'qotish uchun parhez yoki jismoniy mashqlar muhimroqmi ?</>
          )}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <MinusOutlined /> : <PlusOutlined />}
        </button>
      </header>
      {showInfo && <p>   {language === "uz" ? (
            <>{answer_uz}</>
          ) : language === "en" ? (
            <>{answer_en}</>
          ) : language === "ru" ? (
            <>{answer_ru}</>
          ) : (
            <>Siz noto'g'ri ovqatlanishdan voz kecholmaysiz. Bu shunchalik oddiy. Men jismoniy mashqlar muhim emas demayman, bu aniq. Ammo shuni aytmoqchimanki, agar siz sport zalida o'tkazish uchun soatlaringiz bo'lmasa - men bilmayman - agar ovqatlanish odatlaringiz bir xil darajada bo'lmasa, siz o'lchovdagi raqamni ko'rmaysiz.</>
          )}</p>}
    </article>
  );
})

export default Question;

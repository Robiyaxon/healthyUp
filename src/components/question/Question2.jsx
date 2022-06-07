import React, { useState } from "react";
import "./faq.css"
import {
  MinusOutlined,PlusOutlined
} from '@ant-design/icons'
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question_spec" onClick={() => setShowInfo(!showInfo)}>
      <header>
        <h4>{title}</h4>
        <hr />
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <MinusOutlined /> : <PlusOutlined />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

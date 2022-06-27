import React, { useState } from 'react'
import style from "../../login/foods/Foods.module.css"
import { Button } from 'antd';
import { useEffect } from 'react';
import { instance } from '../../../api/api';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sports = React.memo((props) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [app, setApp] = useState([]);
  const { language } = useSelector((state) => state.langReducer);

  useEffect(() => {
    instance.get("sport/").then((response) => setData(response.data));
  }, [setData]);
  const click = async (id) => {
    let temp = app;
    temp.push(id)
    setApp(temp);
  }
  const click2 = () => {
    navigate("/femaleOrMale")
    props.setcan_not_sports(app)
  }
  return (
    <div className={style.Foods}>
      <h1>{t("no_sport")}</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          {data.map(a => <div key={a.id} className={style.Block_Card} onClick={() => click(a.id)
          }>  {language === "uz" ? (
            <>{a.name}</>
          ) : language === "en" ? (
            <>{a.en_name}</>
          ) : language === "ru" ? (
            <>{a.ru_name}</>
          ) : (
            <>Mevalar bor edi!</>
          )}</div>)}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          onClick={click2}
        >
          {t("Continue")}
        </Button>
      </div>

    </div>
  )
})
export default Sports
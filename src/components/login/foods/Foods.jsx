import React, { useState } from 'react'
import style from "./Foods.module.css"
import { Button } from 'antd';
import { useEffect } from 'react';
import { instance } from '../../../api/api';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Foods =  React.memo((props) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [app, setApp] = useState([]);
  const [selectedList, setSelectedList] = useState({});
  useEffect(() => {
    instance.get("product/").then((response) => setData(response.data));
  }, [setData]);
  console.log(selectedList);
  const click = async (id) => {
    let temp = app;
    temp.push(id)
    setApp(temp);
    setSelectedList(id)
  }
  const click2 = () => {
    navigate("/femaleOrMale")
    props.setcan_not_dieta(app)
  }
  return (
    <div className={style.Foods}>
      <h1>{t("foods")}</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          {data.map(a => <div  key={a.id} className={ style.Block_Card} onClick={() => click(a.id)
          }>{a.name}</div>)}
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
  );
})
export default Foods;

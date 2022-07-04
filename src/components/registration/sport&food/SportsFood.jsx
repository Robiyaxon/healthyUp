import React, { useState } from 'react'
import style from "../../login/foods/Foods.module.css"
import { Button } from 'antd';
import { useEffect } from 'react';
import { instance } from '../../../api/api';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Sport_Food = React.memo((props) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const navigate = useNavigate();
  const [app, setApp] = useState([]);
  const [app2, setApp2] = useState([]);
  useEffect(() => {
    instance.get("sport/").then((response) => setData(response.data));
    instance.get("product/").then((response) => setData2(response.data));
  }, []);
  const deleteItem = (index, id) => () => {
    setData((items) => items.filter((_, i) => i !== index))
    let temp = app;
    temp.push(id)
    setApp(temp);
    return data.filter(item => item.id !== id)
  }
  const deleteItem2 = (index, id) => () => {
    setData2((items) => items.filter((_, i) => i !== index))
    let temp = app2;
    temp.push(id)
    setApp2(temp);
  }
  const click2 = () => {
    navigate("/femaleOrMale")
    props.setcan_not_sports(app)
    props.setcan_not_dieta(app2)
  }
  return (
    <div className={style.Foods}>
      <h1>{t("no_sport")}</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          {data.map((a, index) => <div key={a.id} className={style.Block_Card} onClick={deleteItem(index, a.id)}>{a.name}</div>)}
        </div>
      </div>
      <h1>{t("foods")}</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          {data2.map((a, index) => <div key={a.id} className={style.Block_Card} onClick={deleteItem2(index, a.id)}>{a.name}</div>)}
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
export default Sport_Food
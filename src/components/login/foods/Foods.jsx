import React, { useState } from 'react'
import style from "./Foods.module.css"
import { Button } from 'antd';
import { useEffect } from 'react';
import { instance } from '../../../api/api';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FoodItem from './FoodItem';
const Foods = React.memo((props) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [app, setApp] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  const [selectedList, setSelectedList] = useState({});
  useEffect(() => {
    instance.get("product/").then((response) => setData(response.data));
  }, [setData]);
  const click = async (id) => {

    let temp = app;
    temp.push(id)
    setApp(temp);
    setSelectedList(id)
    return data.filter(item => item.id !== id)
  }
  const click2 = () => {
    navigate("/femaleOrMale")
    props.setcan_not_dieta(app)
    // return data.filter(item=>item.id!==id)
  };

  const deleteCard =(id)=>setData(data => data.filter(item=>item.id!==id))
  


  return (
    <div className={style.Foods}>
      <h1>{t("foods")}</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          {data.map(a =><FoodItem deleteCard={()=>deleteCard(a)}  key={a.id} {...a}  id={a.id} />)}
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

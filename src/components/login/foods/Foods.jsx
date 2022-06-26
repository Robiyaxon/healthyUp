import React, { useState } from 'react'
import style from "./Foods.module.css"
import { Button } from 'antd';
import { useEffect } from 'react';
import { instance } from '../../../api/api';
// import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Foods = (props) => {
  // const { t } = useTranslation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [app, setApp] = useState([]);
  useEffect(() => {
    instance.get("product/").then((response) => setData(response.data));
  }, []);
  const click = async (id) => {
    let temp = app;
    temp.push(id)
    setApp(temp);
  }
  const click2 = () => {
    navigate("/femaleOrMale")
    props.setcan_not_dieta(app)
  }
  return (
    <div className={style.Foods}>
      <h1>Foods</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          {data.map(a => <div key={a.id} className={style.Block_Card} onClick={() => click(a.id)
          }>{a.name}</div>)}
        </div>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={click2}
      >
        {/* {t("Continue")} */}
        Continue
      </Button>
    </div>
  );
};
export default Foods;

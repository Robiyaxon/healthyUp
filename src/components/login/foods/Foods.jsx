import React, { useState } from 'react'
import style from "./Foods.module.css"
import { Button } from 'antd';
import { useEffect } from 'react';
import { instance } from '../../../api/api';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
var config = {
  method: "get",
  url: "http://10.10.8.46:8000/product/",
  headers: {
    "Content-Type": "application/json",
  },
};
const Foods = (props) => {

  const { t } = useTranslation();
  // const [data, setData] = useState([
    
  // ]);
  const navigate = useNavigate();
  const [texnikaModal, setTexnikaModal] = useState("");
  const [app, setApp] = useState([
    {id:1}

  ]);

  const data = [
    {id:1, name:"sdfgsdg"},
    {id:2, name:"sdfgsdg"},
    {id:3, name:"sdfgsdg"}
  ]

  // console.log(data);
  
  // const app = []


  const appPush  = {id: texnikaModal}

  useEffect(() => {
    let temp = app;
    temp.push(texnikaModal)
    setApp(temp);
    // axios(config)
    //   .then(function (response) {
    //     // setData(response.data);
    //   })
    //   .catch(function (error) { });
  }, []);
  const clikc = () => {
    navigate("/femaleOrMale")
    props.setcan_not_dieta(texnikaModal)
  }

  console.log("ID", texnikaModal);

  console.log("here", app);
  return (
    <div className={style.Foods}>
      <h1>{t("foods")}</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          Hello
          {data.map(a => <div className={style.Block_Card} onClick={() => setTexnikaModal(a.id)
          }>{a.name}</div>)}
        </div>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        onClick={clikc}
      >
        {t("Continue")}
      </Button>
    </div>
  )
}
export default Foods
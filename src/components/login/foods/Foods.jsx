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
const Foods = React.memo((props) => {

  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [texnikaModal, setTexnikaModal] = useState('');
// app.push(texnikaModal)
const menuItems = ["Easy", "Medium", "Hard"];
const [activeButton, setActiveButton] = useState("");
console.log(activeButton);
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) { });
  }, []);
  const clikc = () => {
    navigate("/femaleOrMale")
    props.setcan_not_dieta(texnikaModal)
  }

  const arr = [
    {id:1, name:"bla-bla"}
  ]

  arr.push(activeButton)

  console.log(arr);

  console.log(texnikaModal);
  // console.log(app);
  return (
    <div className={style.Foods}>
      <h1>{t("foods")}</h1>
      <div className={style.Select_block}>
        <div className={style.card}>
          {/* {map.map(a => 
          <div className={style.Block_Card + ' ' + texnikaModal} onClick={() => setTexnikaModal('active')
          }>{a.name}</div>)} */}
        </div>
      </div>
      {menuItems.map((level, idx) => {
        return (
          <button
            key={level}
            onClick={() => {
              setActiveButton(level);
            }}
            // style={{
            //   display: activeButton === level ? "none" : ""
            // }}
            className={activeButton === level ? "none" : null}
          >
            {level}
          </button>
        );
      })}
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
})
export default Foods
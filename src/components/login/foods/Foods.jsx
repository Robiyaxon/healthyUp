import React, { useState } from 'react'
import style from "./Foods.module.css"
import { Button} from 'antd';
import { useEffect } from 'react';
import { instance } from '../../../api/api';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Foods = React.memo((props) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [texnikaModal, setTexnikaModal] = useState(0);
  // console.log(texnikaModal);
  // props.setcan_not_dieta(texnikaModal)
  useEffect(() => {
    instance.get("product/").then((response) => setData(response.data));
  }, []);
  const clikc=()=>{
    navigate("/femaleOrMale")
  }
  return (
    <div className={style.Foods}>
      <h1>Yemaydigan mahsulotingizni belgilab qo‘ying</h1>
      <div className={style.Select_block}>
        {/* <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          placeholder="Mahsulotlar"
          className={style.Select}
          options={data}
        /> */}
        <div>
          {data.map(a => <div onClick={() => setTexnikaModal({ id: a.id })
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
})
export default Foods
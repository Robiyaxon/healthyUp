import React from "react";
import UploadImg from "./UploadImg";

import style from "./OtherCreateAccount.module.css";
import InputForm from "./InputForm";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const OtherCreateAccount = ({ first_name, last_name, type }) => {
  const [img, setImg] = useState(null);

  const {t} = useTranslation()
  console.log(img);

  return (
    <div className={style.body}>
      <h1 className={style.body__title}>
        {/* Salom {first_name} {last_name} */}
      </h1>
      <p className={style.body__text}>
        {t("dataAcc")}
      </p>
      <div>
        <UploadImg setImg={setImg} />
        <div className={style.InputForm}>
          <InputForm type={type} img={img} />
        </div>
      </div>
    </div>
  );
};

export default OtherCreateAccount;

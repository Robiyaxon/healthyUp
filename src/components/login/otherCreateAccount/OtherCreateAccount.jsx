import React from "react";
import UploadImg from "./UploadImg";

import style from "./OtherCreateAccount.module.css";
import InputForm from "./InputForm";
import { useState } from "react";

const OtherCreateAccount = ({ first_name, last_name, type }) => {
  const [img, setImg] = useState(null);

  return (
    <div className={style.body}>
      <h1 className={style.body__title}>
        Salom {first_name} {last_name}
      </h1>
      <p className={style.body__text}>
        O‘zingiz haqingizda ma'lumotlarni to‘ldiring
      </p>
      <div>
        <UploadImg setImg={setImg} />
        <div>
          <InputForm type={type} img={img} />
        </div>
      </div>
    </div>
  );
};

export default OtherCreateAccount;

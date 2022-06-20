import React from 'react'
import UploadImg from './UploadImg'

import style from './OtherCreateAccount.module.css'
import InputForm from './InputForm';

const OtherCreateAccount = ({first_name, last_name}) => {
  return (
    <div className={style.body}>
      <h1 className={style.body__title}> Salom {first_name} {last_name}</h1>
      <p className={style.body__text}>O‘zingiz haqingizda ma'lumotlarni to‘ldiring</p>
      <div>

      <UploadImg/>
      <div>
        <InputForm/>
      </div>
      </div>
    </div>
  )
}

export default OtherCreateAccount

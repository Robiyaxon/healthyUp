import React from 'react'
import style from "./SinglePerson.module.css"
import { Spin } from 'antd';
export const SinglePerson = (props) => {
  if (!props.person) {
    <div className="SpinStyle">
      <Spin />
    </div>
  }
  return (
    <div className={style.PerconAc}>
{/* <h1>{props.person.last_name}</h1> */}
swsws
    </div>
  )
}

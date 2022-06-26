import React from 'react'
import style from "./SinglePerson.module.css"
import { Spin } from 'antd';
import { useEffect } from 'react';
export const SinglePerson = React.memo(({ person }) => {
  useEffect(() => {
    console.log(person);
  }, []);

  if (!person) {
    <div className="SpinStyle">
      <Spin />
      loading!!!!
    </div>
  }
  return (
    <div className={style.PerconAc}>
      {/* <h1>{person.last_name}</h1>? */}
      swsws
    </div>
  )
})


/* eslint-disable react-hooks/exhaustive-deps */
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
    </div>
  }
  const map = [
    { id: 1, label: "Familya", name: "Haydarov" },
    { id: 2, label: "Ism:", name: "Dostonbek" },
    { id: 3, label: "Tug‘ilgan sana:", name: "15, Sentyabr, 2000 yil" },
    { id: 4, label: "Jinsi:", name: "Erkak:" },
    { id: 5, label: "Telefon raqamingiz::", name: "+998 90 763 03 03" },
    { id: 6, label: "Ma'lumoti::", name: "O‘rta" },
    { id: 7, label: "Ish taribasi:", name: "5 oy" },
  ]
  const map2 = map.map(a => <div key={a.id} className={style.card}>
    <p>{a.label}</p>
    <h1>{a.name} </h1>
  </div>)
  return (
    <div className={style.PerconAc}>
      <div className={style.shadow}>

      </div>
      {/* <h1>{person.last_name}</h1>? */}
      <div className={style.block}>   <img src="data:image/jpeg;base64,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" alt="" />
      <div className={style.Block90}>
         {map2}
      </div>
       <div className={style.Document}>
      <p>Batafsil malumot</p>
      <h1>Mening ismim Haydarov Dostonbek. Yoshim 22 da. 5 oydan buyon diyetolog sifatida ishlab kelaman. Faoliyatimni yaqin kunlarda boshlaganimga qaramay sizga yordam bera oladigan darajada bilim va ko‘nikmalarga egaman. Oz fursat mobaynida juda ko‘p ozishni istagan insonlar bilan ishladim. deyarli ularning hammasi oz istagan natijaga erishdilar va erishib kelmoqdalar.</h1>
     <p>Manzili:</p>
     <h1>O’zbekiston Respublikasi, Andijon viloyati, Baliqchi tumani</h1>
       </div>

      </div>

    </div>
  )
})


import React from 'react'
import style from './Foods.module.css';
import { useSelector } from 'react-redux';
export default function FoodItem({id,name,en_name,ru_name,deleteCard}) {
const { language } = useSelector((state) => state.langReducer);
console.log(deleteCard)
return (
    <>
    <div key={id} className={style.Block_Card} onClick={deleteCard}>
            {language === "uz" ? (
              <>{name}</>
            ) : language === "en" ? (
              <>{en_name}</>
            ) : language === "ru" ? (
              <>{ru_name}</>
            ) : (
              <>Mevalar bor edi!</>
            )}
          </div>
    </>
  )
}


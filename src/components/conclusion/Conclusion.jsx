import React from 'react'
import style from "./Conclusion.module.css"
import { useNavigate } from 'react-router-dom';
import img from "../../assets/about_us/header.png"
import { useEffect } from 'react';
import { instance } from '../../api/api';
const Conclusion =  React.memo(({ token }) => {
  const navigate = useNavigate()
  // const [data, setData] = useState([]);
  console.log(token);
  localStorage.setItem("token", token)
  const qidiruv = () => {
    navigate("/faq")
  }
  const profile = () => {
    navigate("/foods")
  }
  useEffect(() => {
    const config = {
      headers: {
        Authorization:  token
      }
    }
    instance.get(`user`, config).then(
      (response) => console.log(response)
    );
  }, [token]);
  return (
    <div className={style.Conclusion}>
      <h1 className={style.Title}>Profilingizning xulosasi</h1>
      <div className={style.Profile}>
        <div className={style.Block}>
          <p>Statistik vazin</p>
          <h1>67 kg </h1>
        </div>
        <div className={style.Block}>
          <p>Kunlik yeyilishi kerak bolgan KK</p>
          <h1>767 kk  </h1>
        </div>
        <div className={style.Block}>
          <p>Kunlik yo‘qotilyotgan vazin</p>
          <h1>0.1  kg  </h1>
        </div>
      </div>
      <div className={style.navigate}>
        <button onClick={qidiruv} className={style.button1}>Mutaxassis qidirish</button>
        <button onClick={profile} className={style.button2}>Mening profilim</button>
      </div>
      <h1 className={style.Title}>Topshiriqlar</h1>
      <p className={style.p}>Siz uchun kunlik topshiriqlar. Topshiriqni bajargach belgilashni unutmang!</p>
      <div className={style.topshiriq}>
        {/* <video src=""></video> */}
        <img src={img} alt="" />
        <div className={style.Topshiriq2}>
          <p>1-topshiriq</p>
        </div>
        <label className={style.checkbox}>
          <input type="checkbox" className={style.checkbox__input} />
          <span className={style.checkbox__inner}></span>
        </label>
      </div>
    </div>
  )
})
export default Conclusion
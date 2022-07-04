import CountUp from "react-countup";
import { useNavigate } from 'react-router-dom';

import style from "./Loader.module.css";

const Loader = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    var dom = document.getElementsByTagName("span") && document.getElementsByTagName("span")[4] ? document.getElementsByTagName("span")[4].textContent : "some error"
    if (Number(dom) === 100) {
      navigate('/')
    } else {
      console.log(dom === 100 + " error");

    }
  }, 10000);

  return (
    <div className={style.loader}>
      <h1>Ma'lumotlarni qayta ishlash</h1>
      <p>Sizning ovqatlanish rejangiz hisoblanmoqda...</p>
      <CountUp id={'count'} start={1} end={100} duration={9}></CountUp>
    </div>
  );
};

export default Loader;

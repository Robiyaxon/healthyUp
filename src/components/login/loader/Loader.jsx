import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";

import style from "./Loader.module.css";

const Loader = ({text = 'Sizning ovqatlanish rejangiz hisoblanmoqda...', link='/conclusion'}) => {
  const navigate = useNavigate();

  setTimeout(() => {
    var dom = document.getElementsByTagName("span") && document.getElementsByTagName("span")[4] ? document.getElementsByTagName("span")[4].textContent : "some error"
    if (Number(dom) === 100) {
      navigate(link)
    } else {
      console.log(dom === 100 + " error");
    }
  }, 10000);

  return (
    <div className={style.loader__body}>
      <h1 className={style.loader__title}>Ma'lumotlarni qayta ishlash</h1>
      <p  className={style.loader__text}>{text}</p>
      <div className={style.loader}>
        <CountUp id={"count"} start={1} end={100} duration={9}></CountUp>
      </div>
    </div>
  );
};

export default Loader;

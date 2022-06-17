import style from "./Loader.module.css";
import CountUp from "react-countup";
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    var dom = document.getElementsByTagName("span") && document.getElementsByTagName("span")[4] ? document.getElementsByTagName("span")[4].textContent : "some error"
    console.log( dom );
    if (Number(dom) === 100) {
      console.log(dom===100);
      navigate('/home')
    }else{
      console.log( dom===100 + " error");

    }
  }, 10000);

  return (
    <div className={style.loader}>
      <CountUp id={'count'} start={1} end={100} duration={9}></CountUp>
    </div>
  );
};

export default Loader;


import { React } from 'react';


import style from './WhoIsTheUser.module.css'

const WhoIsTheUser = () => {
  return ( 
    <div className={style.body}>
      <h1>Kim sifatida ro'yxatdan o'tmoqchisiz</h1>
      <button>User</button>
      <button>Dietolog</button>
      <button>Treyner</button>
    </div>
   );
}
 
export default WhoIsTheUser;
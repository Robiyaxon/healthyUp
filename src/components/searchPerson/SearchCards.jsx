import React from "react";
import style from "./SearchPerson.module.css";
import { URL_FOR_IMG } from "../../api/api";
import person from "./../../assets/search_person/person.png";
import { NavLink } from 'react-router-dom';
function SearchCards({ item }) {
  return (
    <>
      <NavLink to={"/singilur/" + item.id} key={item.id} className={style.card_content}>
        <div >
          <div className={style.img_bordered}>
            <div className={style.img_wrapper}>
              {item.image ? (
                <img src={URL_FOR_IMG + item.image} alt="rasm bor" />
              ) : (
                <img src={person} alt="img bor" />
              )}
            </div>
          </div>
          <div className={style.person}>
            {item.first_name} {item.last_name}
          </div>
          <div className={style.star}>
            {item.reyting ? (
              <>
                {Array.apply(null, {
                  length: Math.floor(item.reyting),
                }).map((e, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </>
            ) : null}
          </div>
        </div>

      </NavLink>

    </>
  );
}

export default SearchCards;

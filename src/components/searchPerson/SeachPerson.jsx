import React from "react";
import { useState, useEffect, useRef } from "react";
import style from "./SearchPerson.module.css";
import { Link, NavLink } from "react-router-dom";
// import girl from "./../../assets/search_person/girl.png";
import { instance } from "./../../api/api";

const SeachPerson = () => {
  const [value, setValue] = useState("");
  const inputElement = useRef();
  const inputFocus = () => {
    inputElement.current.focus();
  };
  const [diatolog, setDietolog] = useState([]);
  const [trainer, setTrainer] = useState([]);

  useEffect(() => {
    instance
      .get("get_dietolog/")
      .then((response) => setDietolog(response.data));
    instance.get("get_treyner/").then((response) => setTrainer(response.data));
  }, []);


  const mapTrainer = trainer
    .filter((item) => item.image && item.reyting > 0)
    .sort((a, b) => b.reyting - a.reyting)
    .slice(0, 4)
    .map((item, index) => {
      return (
        <>
        <NavLink to={"singilur/" + item.id}> 
          <div key={index} className={style.card_content}>
            <div className={style.img_bordered}>
              <div className={style.img_wrapper}>
                <img
                  src={"http://10.10.7.17:8000" + item.image}
                  alt="rasm bor"
                />
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
    });

  const mapDiatolog = diatolog
    .filter((item) => item.image && item.reyting > 0)
    .sort((a, b) => b.reyting - a.reyting)
    .slice(0, 4)
    .map((item, index) => {
      return (
        <>
          <div key={index} className={style.card_content}>
            <div className={style.img_bordered}>
              <div className={style.img_wrapper}>
                <img
                  src={"http://10.10.7.17:8000" + item.image}
                  alt="rasm bor"
                />
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
        </>
      );
    });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* form start */}
        <div className={style.form_wrapper}>
          <form>
            <input
              ref={inputElement}
              type="text"
              name="person"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Qidiruv"
            />
            <i
              onClick={inputFocus}
              className="fa-solid fa-magnifying-glass"
            ></i>
          </form>
        </div>
        {/* form end */}
        {/* card 1 start title */}
        <div className={style.card_wrapper}>
          <div className={style.card_job}>Dietolog</div>
          <div className={style.car_job_all}>
            <Link to="/searched_person">
              Barchasi <i class="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>

        {/* card 1 content  */}
        <div className={style.card_content_wrapper}>
          <div className={style.card_content_container}>{mapDiatolog}</div>
        </div>
        {/* card 1 end */}
        {/* card 2 start title */}
        <div className={style.card_wrapper}>
          <div className={style.card_job + " " + style.card_job2}>
            Treynerlar
          </div>
          <div className={style.car_job_all}>
            <Link to="/searched_person">
              Barchasi <i class="fa-solid fa-chevron-right"></i>
            </Link>
          </div>
        </div>
        {/* card 2 end title */}

        {/* card 2 content  */}
        <div className={style.card_content_wrapper}>
          <div className={style.card_content_container}>
            {/* ------ */}
            {mapTrainer}
          </div>
        </div>
        {/* card 2 end */}
      </div>
    </div>
  );
};

export default SeachPerson;

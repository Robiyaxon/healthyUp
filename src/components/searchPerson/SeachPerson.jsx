import React, { useState, useEffect } from "react";
import style from "./SearchPerson.module.css";
import { Link } from "react-router-dom";
import { instance } from "./../../api/api";
import { useTranslation } from "react-i18next";
import SearchCards from "./SearchCards";
const SeachPerson = React.memo(() => {
  const { t } = useTranslation();
  // const [value, setValue] = useState("");
  // const [search, setSearch] = useState([]);
  const [diatolog, setDietolog] = useState([]);
  const [trainer, setTrainer] = useState([]);
  useEffect(() => {
    instance
      .get("get_dietolog/")
      .then((response) => setDietolog(response.data));
    instance.get("get_treyner/").then((response) => setTrainer(response.data));
  }, [setTrainer]);
  const mapTrainer = trainer
    .filter((item) => item.image && item.reyting > 0)
    .sort((a, b) => b.reyting - a.reyting)
    .slice(0, 4)
    .map((item,index) => {
      return (
        <>
          <div key={index} className={style.card_content} >
            <SearchCards item={item} />
          </div>
        </>
      );
    });

  const mapDiatolog = diatolog
    .filter((item) => item.image && item.reyting > 0)
    .sort((a, b) => b.reyting - a.reyting)
    .slice(0, 4)
    .map((item,index) => {
      return (
        <div key={item.id} className={style.card_content}>
          <SearchCards item={item}/>
        </div>
      );
    });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* form start */}
        {/* <div className={style.form_wrapper}>
          <form>
            <input
              type="text"
              name="person"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t("search")}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </form>
        </div> */}
        {/* form end */}
        {/* card 1 start title */}
        <div className={style.card_wrapper}>
          <div className={style.card_job}>{t("dietolog")}</div>
          <div className={style.car_job_all}>
            <Link to="/search_deatolog_all">
              {t("all")} <i className="fa-solid fa-chevron-right"></i>
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
            {t("trainer")}
          </div>
          <div className={style.car_job_all}>
            <Link to="/search_trainer_all">
              {t("all")} <i className="fa-solid fa-chevron-right"></i>
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
})

export default SeachPerson;

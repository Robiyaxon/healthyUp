import React, { useState, useEffect } from "react";
import style from "./AllPerson.module.css";
import { instance } from "./../../api/api";
import SearchCards from "./SearchCards";

const AllDietolog = React.memo(()=> {
  const [diatolog, setDietolog] = useState([]);

  useEffect(() => {
    instance
      .get("get_dietolog/")
      .then((response) => setDietolog(response.data));
  }, [setDietolog]);

  const mapDiatolog = diatolog
    .filter((item) => item.image && item.reyting > 0)
    .sort((a, b) => b.reyting - a.reyting)
    .map((item, index) => {
      return (
        <>
          <SearchCards item={item} index={index} />
        </>
      );
    });

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.card_content_wrapper}>
          <div className={style.card_content_container}>{mapDiatolog}</div>
        </div>
      </div>
    </div>
  );
})
export default AllDietolog;

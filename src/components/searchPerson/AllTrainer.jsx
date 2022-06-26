import React, { useState, useEffect } from "react";
import style from "./AllPerson.module.css";
import { instance } from "./../../api/api";
import SearchCards from "./SearchCards";
import "antd/dist/antd.css";
import { Pagination } from "antd";

function AllDietolog() {
  const [trainer, setTrainer] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [pageSize, setPageSize] = useState(16);

  useEffect(() => {
    setMinIndex(0);
    setMaxIndex(pageSize);
    instance.get("get_treyner/").then((response) => {
      return setTrainer(response.data);
    });
  }, []);

  function HandleChange(page) {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  }

  const mapDiatolog = trainer
    .sort((a, b) => b.reyting - a.reyting)
    .map(
      (item, index) =>
        index >= minIndex &&
        index < maxIndex && (
          <SearchCards key={item.id} item={item} index={index} />
        )
    );

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.card_content_wrapper}>
          <div className={style.card_content_container}>{mapDiatolog}</div>
        </div>
        <Pagination
          pageSize={pageSize}
          current={current}
          total={trainer.length}
          onChange={HandleChange}
          style={{ textAlign: "center" }}
        />
      </div>
    </div>
  );
}

export default AllDietolog;

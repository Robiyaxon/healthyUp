/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import style from "./AllPerson.module.css";
import style2 from "./SearchPerson.module.css";
import { instance } from "./../../api/api";
import SearchCards from "./SearchCards";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { useTranslation } from "react-i18next";

const AllDietolog = React.memo(() => {
  const [trainer, setTrainer] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [pageSize, setPageSize] = useState(16);
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  let handleSearch = (query) => {
    console.log(query);
    fetch(`https://ehealthuz.pythonanywhere.com/search/?search=${query}`)
      .then((response) => response.json())
      .then((data) => setSearchedData(data))
      .catch((e) => console.log(e));
  };

  const { t } = useTranslation();
  // pagenation changing by width of window
  let update = () => {
    if (window.innerWidth > 950) {
      setPageSize(16);
    } else if (window.innerWidth < 950 && window.innerWidth > 750) {
      setPageSize(12);
    } else if (window.innerWidth < 750 && window.innerWidth > 400) {
      setPageSize(8);
    } else if (window.innerWidth < 400) {
      setPageSize(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", update);
    instance.get("get_treyner/").then((response) => {
      return setTrainer(response.data);
    });
    setMinIndex(0);
    setMaxIndex(pageSize);
  }, [pageSize]);

  // pagenation
  function HandleChange(page) {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
    window.scrollTo(0, 0);
  }

  // function handleSearch() {
  //   if (search === "") {
  //     return trainer;
  //   } else if (search.length > 1) {
  //     return trainer
  //       .map(
  //         (item) => item.first_name.toLocaleLowerCase(),
  //         (item) => item.last_name.toLocaleLowerCase()
  //       )
  //       .filter(
  //         (item) =>
  //           item.first_name.includes(search.toLocaleLowerCase()) ||
  //           item.item.last_name.includes(search.toLocaleLowerCase())
  //       );
  //   }
  // }

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
      <div className={style2.form_wrapper}>
      
      </div>
      <div className={style.container}>
        <div className={style.card_content_wrapper}>
          <div className={style.card_content_container}>{mapDiatolog}</div>
        </div>
        <Pagination
          pageSize={pageSize}
          current={current}
          total={trainer.length}
          onChange={HandleChange}
          style={{ textAlign: "center", marginTop: "1rem" }}
        />
      </div>
    </div>
  );
});

export default AllDietolog;

import React from "react";
import { useTranslation } from "react-i18next";

import main from "../../../assets/home/laseWeightFast/main.png";

import styles from "./LoseWeightFast.module.css";

const LoseWeightFast = () => {
  const { t } = useTranslation()
  const data = [
    { id: 1, number: "01", title: "Gollivud parhezi" },
    { id: 2, number: "02", title: "Karamli parhez" },
    { id: 3, number: "03", title: "Yaponch parhez" },
    { id: 4, number: "04", title: "Braziliya parhezi" },
    { id: 5, number: "05", title: "Intervalli parhez" },
    { id: 6, number: "06", title: "Grechkali parhezi" },
    { id: 7, number: "07", title: "Sho’rvali parhezi" },
    { id: 8, number: "08", title: "Top-modellar parhezi" },
    { id: 9, number: "09", title: "Qatiqli parhezi" },
    { id: 10, number: "10", title: "Sharbatli parhezi" },
  ];

  const dataMap = data.map((d) => (
    <div className={styles.blocks__box} key={d.id}>
      <h1>{d.number}</h1>
      <p>{d.title}</p>
    </div>
  ));

  return (
    <div>
      <h1 className={styles.title}>
        {" "}
        TEZ OZISH UCHUN PARHEZLARNING 10 TA ENG SAMARALISI
      </h1>
      <div className={styles.main__block}>
        <img src={main} alt="" />
        <div className={styles.blocks}>{dataMap}</div>
      </div>
    </div>
  );
};

export default LoseWeightFast;

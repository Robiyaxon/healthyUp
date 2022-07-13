import React from "react";
import style from "./SinglePerson.module.css";
import person34 from "./../../assets/search_person/person.webp";
import { Spin } from "antd";
import { useTranslation } from "react-i18next";

export const SinglePerson = React.memo(({ person }) => {
  const { t } = useTranslation();
  if (!person) {
    return (
      <div className="SpinStyle">
        <Spin />
      </div>
    );
  }
  const map = [
    { id: 1, label: t("userSurname"), name: person.last_name },
    { id: 2, label: t("userName"), name: person.first_name },
    {
      id: 3,
      label: t("borthday"),
      name: person.birthday ? (
        person.birthday
      ) : (
        <>Tug`ilganlik sanasi berkitilgan</>
      ),
    },
    {
      id: 5,
      label: t("userTel"),
      name: person.phone ? person.phone : <>Telefon nomer Berkitilgan</>,
    },
    {
      id: 6,
      label: t("expertReference"),
      name:
        person.information === 1 ? (
          <>Boshlang`ich</>
        ) : person.information === 2 ? (
          <>O`rta</>
        ) : (
          <>OLIY</>
        ),
    },
    { id: 7, label: t("experience"), name: person.experience + " yil" },
  ];

  const map2 = map.map((a) => (
    <div key={a.id} className={style.card}>
      <p>{a.label}</p>
      <h1>{a.name} </h1>
    </div>
  ));
  return (
    <div className={style.PerconAc}>
      <div className={style.shadow}></div>
      <div className={style.block}>
        {person.image ? (
          <img
            src={"http://ehealthuz.pythonanywhere.com/" + person.image}
            alt="rasm bor"
          />
        ) : (
          <img src={person34} alt="img bor" />
        )}
        <div className={style.Block90}>{map2}</div>
        <div className={style.Document}>
          <p>Batafsil malumot</p>
          <h1>
            Mening ismim {person.last_name} {person.first_name}{" "}
            {person.experience} yillik tajribam bor. sizga yordam bera oladigan
            darajada bilim va ko‘nikmalarga egaman. Oz fursat mobaynida juda
            ko‘p ozishni istagan insonlar bilan ishladim. deyarli ularning
            hammasi oz istagan natijaga erishdilar va erishib kelmoqdalar.
          </h1>
          <p>Manzili:</p>
          <h1>{person.addres}</h1>
        </div>
      </div>
    </div>
  );
});

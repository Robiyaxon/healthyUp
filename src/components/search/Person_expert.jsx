import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import axios from "axios";

import person34 from "./../../assets/search_person/person.webp";

import style from "../searchPerson/SinglePerson.module.css";

const PersonExpert = React.memo(({ person }) => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://ehealthuz.pythonanywhere.com/user/",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + localStorage.getItem("token"),
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const map = [
    { id: 1, label: t("userSurname"), name: data.last_name },
    { id: 2, label: t("userName"), name: data.first_name },
    {
      id: 3,
      label: t("borthday"),
      name: data.birthday ? (
        data.birthday
      ) : (
        <>Tug`ilganlik sanasi berkitilgan</>
      ),
    },
    {
      id: 5,
      label: t("userTel"),
      name: data.phone ? data.phone : <>Telefon nomer Berkitilgan</>,
    },
    {
      id: 6,
      label: t("expertReference"),
      name:
        data.information === 1 ? (
          <>Boshlang`ich</>
        ) : data.information === 2 ? (
          <>O`rta</>
        ) : (
          <>OLIY</>
        ),
    },
    { id: 7, label: t("experience"), name: data.experience + " yil" },
  ];

  const map2 = map.map((a) => (
    <div key={a.id} className={style.card}>
      <p>{a.label}</p>
      <h1>{a.name} </h1>
    </div>
  ));
  return (
    <div className={style.PerconAc}>
      <h1 className={style.Spes}>Sizning Profilingiz</h1>
      <div className={style.block}>
        {data.image ? (
          <img
            src={"http://ehealthuz.pythonanywhere.com/" + data.image}
            alt="rasm bor"
          />
        ) : (
          <img src={person34} alt="img bor" />
        )}
        <div className={style.Block90}>{map2}</div>
        <div className={style.Document}>
          <p>Batafsil malumot</p>
          <h1>{data.bio}</h1>
          <h1>
            Mening ismim {data.last_name} {data.first_name} {data.experience}{" "}
            yillik tajribam bor. sizga yordam bera oladigan darajada bilim va
            ko‘nikmalarga egaman.
          </h1>

          <p>Manzili:</p>
          <h1>{data.addres}</h1>
        </div>
        {/* <NavLink  className="buttonStyle" to={"/otherAccSettings"}>Settings</NavLink> */}
        <div className="buttonStyle">
          <Button
            htmlType="submit"
            className={"buttonSubmit"}
            onClick={() => navigate("/otherAccSettings")}
          >
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
});

export default PersonExpert;

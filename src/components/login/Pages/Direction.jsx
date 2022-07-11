import React from "react";
import LoginPages from "../../../helpers/Helpers";
import { useTranslation } from 'react-i18next';

const Direction = (props) => {
  const {t}=useTranslation()
  const data = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Dieta" },
    { id: 3, name: "Diet & Sport" },
  ];
  return (
    <div>
      <LoginPages
        settype={props.settype_loss}
        navigateUrl={"/sports"}
        navigateUrl2={"/foods"}
        navigateUrl3={"/foods&sport"}
        title={t("yonalish")}
        data={data}

      />
    </div>
  );
};

export default Direction;
